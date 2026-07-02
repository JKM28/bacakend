<template>
  <div class="quiz-player">
    <section class="status-card">
      <div class="status-top">
        <div>
          <p class="status-kicker">Now practicing</p>
          <h3>Level {{ level }} Quiz</h3>
        </div>
        <div class="status-stats">
          <span>{{ answeredCount }} answered</span>
          <span>{{ questions.length }} total</span>
        </div>
      </div>

      <div class="progress-track" role="progressbar" :aria-valuemin="0" :aria-valuemax="100" :aria-valuenow="progressPercent">
        <div class="progress-fill" :style="{ width: `${progressPercent}%` }"></div>
      </div>
      <p class="progress-text">Question {{ displayQuestionNumber }} of {{ questions.length }}</p>
    </section>

    <section v-if="current" class="question-shell">
      <QuestionRenderer :question="current" @answered="onAnswered" />
    </section>

    <section v-if="feedback" class="feedback-card" :class="feedback.kind">
      {{ feedback.message }}
    </section>

    <section class="nav-row" v-if="!finished">
      <button @click="prev" class="nav-btn" :disabled="index === 0">Previous</button>
      <button @click="next" class="nav-btn nav-btn-primary" :disabled="index >= questions.length - 1">Next</button>
    </section>

    <section v-if="finished" class="result-card">
      <div class="result-title">Quiz Summary</div>
      <div class="result-line">Auto-scored points: {{ score }} / {{ maxScore }}</div>
      <div class="result-line">Completion: {{ answeredCount }} / {{ questions.length }} responses</div>
      <button class="retry-btn" @click="restart">Try again</button>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import QuestionRenderer from './QuestionRenderer.vue';

const props = defineProps({
  level: { type: String, default: 'A1' },
  questions: { type: Array, default: () => [] }
});

const index = ref(0);
const answers = ref({});
const score = ref(0);
const feedback = ref(null);
const randomizedQuestions = ref([]);

const questions = computed(() => randomizedQuestions.value);
const current = computed(() => questions.value[index.value] || null);
const maxScore = computed(() => questions.value.reduce((s,q)=>s+(q.points||1),0));
const finished = computed(() => index.value >= questions.value.length);
const answeredCount = computed(() => Object.keys(answers.value).length);
const displayQuestionNumber = computed(() => {
  if (questions.value.length === 0) return 0;
  return Math.min(index.value + 1, questions.value.length);
});
const progressPercent = computed(() => {
  if (questions.value.length === 0) return 0;
  const ratio = Math.min(index.value, questions.value.length) / questions.value.length;
  return Math.round(ratio * 100);
});

watch(
  () => props.questions,
  (newQuestions) => {
    randomizedQuestions.value = shuffleQuestions(newQuestions || []);
    index.value = 0;
    answers.value = {};
    score.value = 0;
    feedback.value = null;
  },
  { immediate: true }
);

function shuffleQuestions(items) {
  const cloned = [...items];
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

function onAnswered({ id, value }) {
  if (answers.value[id] == null) {
    answers.value[id] = value;
    const q = questions.value.find(x => x.id === id);
    if (q && ['mcq','gapfill','audio'].includes(q.type)) {
      const normalized = String(value || '').trim().toLowerCase();
      const correct = String(q.answer || '').trim().toLowerCase();
      if (normalized && normalized === correct) {
        score.value += (q.points || 1);
        feedback.value = { kind: 'ok', message: 'Answer saved.' };
      } else {
        feedback.value = { kind: 'warn', message: 'Answer saved. Keep going.' };
      }
    } else if (q && q.type === 'short_answer') {
      feedback.value = { kind: 'info', message: 'Response saved. Short answers are for practice and not auto-scored.' };
    }
  }
  next();
}

function next() { if (index.value < questions.value.length - 1) index.value++; else index.value = questions.value.length; }
function prev() { if (index.value > 0) index.value--; }

function restart() {
  randomizedQuestions.value = shuffleQuestions(props.questions || []);
  index.value = 0;
  answers.value = {};
  score.value = 0;
  feedback.value = null;
}
</script>

<style scoped>
.quiz-player {
  max-width: 46rem;
  margin: 0 auto;
  display: grid;
  gap: 0.85rem;
}

.status-card {
  border-radius: 1rem;
  border: 1px solid #dfd7c7;
  background: linear-gradient(180deg, #fffaf0 0%, #fffef9 100%);
  padding: 0.9rem 1rem;
}

.status-top {
  display: flex;
  justify-content: space-between;
  gap: 0.7rem;
  align-items: flex-end;
}

.status-kicker {
  margin: 0;
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
  color: #8a6642;
}

.status-card h3 {
  margin: 0.2rem 0 0;
  color: #182838;
  font-size: 1.15rem;
}

.status-stats {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.status-stats span {
  border-radius: 999px;
  border: 1px solid #c9d8e8;
  background: #edf5ff;
  padding: 0.14rem 0.5rem;
  font-size: 0.74rem;
  font-weight: 700;
  color: #23405c;
}

.progress-track {
  margin-top: 0.72rem;
  height: 0.6rem;
  border-radius: 999px;
  background: #e7edf4;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #1a7bd8 0%, #45b1ff 100%);
  transition: width 220ms ease;
}

.progress-text {
  margin: 0.45rem 0 0;
  font-size: 0.84rem;
  color: #4d6275;
  font-weight: 600;
}

.question-shell {
  border-radius: 1rem;
  background: #f7f3eb;
  border: 1px solid #e6dece;
  padding: 0.6rem;
}

.feedback-card {
  border-radius: 0.78rem;
  border: 1px solid transparent;
  padding: 0.58rem 0.75rem;
  font-size: 0.9rem;
  font-weight: 600;
}

.feedback-card.ok {
  background: #e9f8ee;
  border-color: #bddfc8;
  color: #195532;
}

.feedback-card.warn {
  background: #fff3e4;
  border-color: #f1d5ad;
  color: #734512;
}

.feedback-card.info {
  background: #eaf4ff;
  border-color: #c4d9f0;
  color: #1f466c;
}

.nav-row {
  display: flex;
  justify-content: space-between;
  gap: 0.7rem;
}

.nav-btn,
.retry-btn {
  border: 1px solid #cfdceb;
  border-radius: 0.72rem;
  background: #ffffff;
  color: #18314a;
  padding: 0.52rem 0.95rem;
  font-weight: 700;
}

.nav-btn:hover:not(:disabled),
.retry-btn:hover {
  background: #f3f8ff;
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.nav-btn-primary {
  background: #0f66bf;
  border-color: transparent;
  color: #ffffff;
}

.nav-btn-primary:hover:not(:disabled) {
  background: #0b56a2;
}

.result-card {
  border-radius: 0.95rem;
  border: 1px solid #cbe7d3;
  background: linear-gradient(180deg, #f1fff6 0%, #f8fff9 100%);
  padding: 0.9rem;
}

.result-title {
  font-size: 1.05rem;
  font-weight: 800;
  color: #1f5231;
}

.result-line {
  margin-top: 0.35rem;
  color: #355447;
}

.retry-btn {
  margin-top: 0.7rem;
}

.nav-btn:focus-visible,
.retry-btn:focus-visible {
  outline: 3px solid #1d74d8;
  outline-offset: 2px;
}

@media (max-width: 700px) {
  .status-top {
    align-items: flex-start;
    flex-direction: column;
  }

  .nav-row {
    flex-direction: column;
  }
}
</style>
