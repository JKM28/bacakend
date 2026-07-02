<template>
  <section class="question-card">
    <header class="question-header">
      <span class="question-type">{{ typeLabel }}</span>
      <span class="question-skill" v-if="question.skill">{{ question.skill }}</span>
    </header>

    <div class="question-prompt" v-html="question.prompt"></div>

    <p class="question-help" v-if="question.type === 'mcq'">Choose one answer.</p>
    <p class="question-help" v-else-if="question.type === 'gapfill'">Type one short phrase to complete the blank.</p>
    <p class="question-help" v-else-if="question.type === 'short_answer'">Write 2-5 sentences. This answer is for practice and not auto-scored.</p>

    <div v-if="question.type === 'mcq'" class="option-list">
      <button
        v-for="(opt, i) in displayedOptions"
        :key="`${opt}-${i}`"
        class="option-btn"
        @click="select(opt)"
      >
        <span class="option-index">{{ letters[i] || i + 1 }}</span>
        <span>{{ opt }}</span>
      </button>
    </div>

    <div v-else-if="question.type === 'gapfill'" class="input-block">
      <input v-model="answer" class="answer-input" placeholder="Type your answer" />
      <button class="submit-btn" :disabled="!hasInput" @click="submit">Submit answer</button>
    </div>

    <div v-else-if="question.type === 'short_answer'" class="input-block">
      <textarea
        v-model="answer"
        rows="5"
        class="answer-input answer-textarea"
        placeholder="Write your response in German"
      ></textarea>
      <button class="submit-btn" :disabled="!hasInput" @click="submit">Save response</button>
    </div>

    <div v-else-if="question.type === 'audio'" class="input-block">
      <audio :src="question.audio_url" controls class="audio-player"></audio>
      <div class="option-list">
        <button
          v-for="(opt, i) in displayedOptions"
          :key="`${opt}-${i}`"
          class="option-btn"
          @click="select(opt)"
        >
          <span class="option-index">{{ letters[i] || i + 1 }}</span>
          <span>{{ opt }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
const props = defineProps({ question: Object });
const emit = defineEmits(['answered']);
const answer = ref('');
const displayedOptions = ref([]);
const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

const hasInput = computed(() => String(answer.value || '').trim().length > 0);
const typeLabel = computed(() => {
  if (props.question?.type === 'mcq') return 'Multiple Choice';
  if (props.question?.type === 'gapfill') return 'Gap Fill';
  if (props.question?.type === 'short_answer') return 'Short Answer';
  if (props.question?.type === 'audio') return 'Audio';
  return 'Question';
});

watch(
  () => props.question?.id,
  () => {
    answer.value = '';
    displayedOptions.value = shuffleOptions(props.question?.options || []);
  },
  { immediate: true }
);

function shuffleOptions(items) {
  const cloned = [...items];
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

function select(opt) {
  emit('answered', { id: props.question.id, value: opt });
}
function submit() {
  if (!hasInput.value) return;
  emit('answered', { id: props.question.id, value: answer.value });
}
</script>

<style scoped>
.question-card {
  border-radius: 1rem;
  border: 1px solid #e6e0d2;
  background: linear-gradient(180deg, #fffefb 0%, #fffaf1 100%);
  padding: 1rem;
}

.question-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
}

.question-type,
.question-skill {
  border-radius: 999px;
  border: 1px solid rgba(17, 24, 39, 0.15);
  background: #ffffff;
  padding: 0.2rem 0.55rem;
  font-size: 0.74rem;
  font-weight: 700;
  color: #1f3346;
  text-transform: capitalize;
}

.question-prompt {
  margin-top: 0.7rem;
  color: #152636;
  font-size: 1.16rem;
  font-weight: 700;
  line-height: 1.35;
}

.question-help {
  margin: 0.4rem 0 0;
  color: #4e6277;
  font-size: 0.88rem;
}

.option-list {
  margin-top: 0.8rem;
  display: grid;
  gap: 0.55rem;
}

.option-btn {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border: 1px solid #d9e4f0;
  border-radius: 0.75rem;
  background: #ffffff;
  padding: 0.7rem 0.85rem;
  color: #1a2d3f;
  text-align: left;
  transition: background-color 160ms ease, border-color 160ms ease, transform 160ms ease;
}

.option-btn:hover {
  background: #f2f8ff;
  border-color: #bcd3ea;
  transform: translateY(-1px);
}

.option-btn:focus-visible,
.submit-btn:focus-visible,
.answer-input:focus-visible {
  outline: 3px solid #1d74d8;
  outline-offset: 2px;
}

.option-index {
  min-width: 1.65rem;
  height: 1.65rem;
  border-radius: 999px;
  background: #ecf4ff;
  border: 1px solid #b6cde5;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  font-weight: 700;
}

.input-block {
  margin-top: 0.8rem;
}

.answer-input {
  width: 100%;
  border: 1px solid #d6deeb;
  border-radius: 0.75rem;
  background: #ffffff;
  padding: 0.72rem 0.8rem;
  color: #1e2f40;
}

.answer-textarea {
  resize: vertical;
}

.submit-btn {
  margin-top: 0.65rem;
  border: 1px solid transparent;
  border-radius: 0.7rem;
  background: #0f66bf;
  color: #ffffff;
  font-weight: 700;
  padding: 0.58rem 0.9rem;
}

.submit-btn:disabled {
  background: #a6bdd5;
  cursor: not-allowed;
}

.audio-player {
  width: 100%;
}

@media (max-width: 700px) {
  .question-header {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
