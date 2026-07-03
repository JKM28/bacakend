<template>
  <div class="topic-page">

    <!-- TOP BAR -->
    <header class="topbar">
      <router-link to="/" class="wordmark">
        <span class="mark-dot"></span>
        Deutschprüfung
      </router-link>
      <div class="topbar-meta">GER · CEFR&nbsp;&nbsp;A1 – B1</div>
    </header>

    <!-- HERO -->
    <section class="topic-hero">
      <p class="eyebrow">Dedicated topic</p>
      <h1 class="topic-title">Verb + Präpositionen</h1>
      <p class="dict-entry">
        <strong>Verb + Preposition</strong>&nbsp;&nbsp;<em>grammar focus</em> — fixed verb/preposition pairs and their case
      </p>
      <p class="topic-lede">
        Choose a level to practice verb + preposition combinations, their case,
        and the English translation of each expression.
      </p>
    </section>

    <!-- LEVELS -->
    <section class="levels">
      <div class="section-head">
        <h2>Select your level</h2>
        <p>Every level has its own set of combinations. Start where you stand.</p>
      </div>

      <div class="level-grid">

        <router-link
          :to="{ path: '/level/A1', query: { skill: 'verb-prepositions' } }"
          class="level-card a1"
        >
          <div class="shape-box">
            <span class="shape circle"></span>
          </div>
          <p class="level-code">Niveau A1 — Anfänger</p>
          <h3>Basic patterns</h3>
          <p class="level-desc">
            Short, common verb + preposition combinations with clear examples.
          </p>
          <span class="level-cta">Prüfung starten <span class="arrow">→</span></span>
        </router-link>

        <router-link
          :to="{ path: '/level/A2', query: { skill: 'verb-prepositions' } }"
          class="level-card a2"
        >
          <div class="shape-box">
            <span class="shape square"></span>
          </div>
          <p class="level-code">Niveau A2 — Grundstufe</p>
          <h3>Everyday usage</h3>
          <p class="level-desc">
            More frequent verbs and slightly richer contexts.
          </p>
          <span class="level-cta">Prüfung starten <span class="arrow">→</span></span>
        </router-link>

        <router-link
          :to="{ path: '/level/B1', query: { skill: 'verb-prepositions' } }"
          class="level-card b1"
        >
          <div class="shape-box">
            <span class="shape triangle"></span>
          </div>
          <p class="level-code">Niveau B1 — Mittelstufe</p>
          <h3>Natural translation</h3>
          <p class="level-desc">
            Longer phrases and more nuanced combinations.
          </p>
          <span class="level-cta">Prüfung starten <span class="arrow">→</span></span>
        </router-link>

      </div>
    </section>

    <!-- BACK -->
    <footer class="foot">
      <router-link to="/" class="back-link">← Back to home</router-link>
    </footer>

  </div>
</template>

<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&family=Archivo:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap");

/* ==========================================
   TOKENS — same as home.vue
========================================== */

* {
  box-sizing: border-box;
}

.topic-page {
  --paper: #f2eee5;
  --ink: #16130e;
  --red: #e2261f;
  --blue: #1b4fd8;
  --yellow: #f5b80c;
  --muted: #6e675b;
  --rule: 2px solid var(--ink);

  font-family: "Archivo", sans-serif;
  background: var(--paper);
  color: var(--ink);
  min-height: 100vh;
  padding: 0 clamp(20px, 5vw, 64px) 0;
}

/* ==========================================
   TOP BAR
========================================== */

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 3px solid var(--ink);
}

.wordmark {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Jost", sans-serif;
  font-weight: 600;
  font-size: 1.15rem;
  letter-spacing: 0.02em;
  color: var(--ink);
  text-decoration: none;
}

.mark-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--yellow);
  border: 2px solid var(--ink);
}

.topbar-meta {
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
}

/* ==========================================
   HERO
========================================== */

.topic-hero {
  padding: clamp(40px, 7vw, 80px) 0 clamp(28px, 4vw, 48px);
}

.eyebrow {
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin: 0 0 18px;
}

.topic-title {
  font-family: "Jost", sans-serif;
  font-weight: 600;
  font-size: clamp(2.6rem, 7vw, 5rem);
  line-height: 0.98;
  letter-spacing: -0.02em;
  margin: 0;
}

.dict-entry {
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.92rem;
  color: var(--muted);
  border-left: 3px solid var(--ink);
  padding-left: 14px;
  margin: 24px 0 0;
}

.dict-entry strong {
  color: var(--ink);
  font-weight: 500;
}

.topic-lede {
  max-width: 560px;
  font-size: 1.05rem;
  line-height: 1.7;
  margin: 22px 0 0;
  color: var(--ink);
}

/* ==========================================
   SECTION HEAD
========================================== */

.section-head {
  margin-bottom: 32px;
}

.section-head h2 {
  font-family: "Jost", sans-serif;
  font-weight: 600;
  font-size: clamp(1.6rem, 3.4vw, 2.2rem);
  margin: 0 0 8px;
  letter-spacing: -0.01em;
}

.section-head p {
  color: var(--muted);
  margin: 0;
}

/* ==========================================
   LEVELS — identical pattern to home.vue
========================================== */

.levels {
  padding: clamp(16px, 4vw, 32px) 0 clamp(48px, 6vw, 72px);
}

.level-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.level-card {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--ink);
  background: var(--paper);
  border: var(--rule);
  padding: 28px 28px 32px;
  transition: background-color 0.25s ease, transform 0.25s ease;
}

.level-card:hover {
  transform: translateY(-6px);
}

.level-card:focus-visible {
  outline: 3px solid var(--blue);
  outline-offset: 4px;
}

.shape-box {
  height: 80px;
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}

.shape {
  display: block;
  width: 64px;
  height: 64px;
  transition: transform 0.3s ease, background-color 0.25s ease;
}

.circle {
  border-radius: 50%;
  background: var(--yellow);
}

.square {
  background: var(--red);
}

.triangle {
  background: var(--blue);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

.level-card:hover .shape {
  transform: rotate(12deg) scale(1.06);
}

.level-code {
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin: 0 0 10px;
}

.level-card h3 {
  font-family: "Jost", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0 0 12px;
}

.level-desc {
  line-height: 1.65;
  margin: 0 0 24px;
  flex: 1;
}

/* the "take this exam" button */
.level-cta {
  font-family: "Jost", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  border-bottom: 2px solid var(--ink);
  align-self: flex-start;
  padding-bottom: 2px;
  transition: border-color 0.25s ease;
}

.arrow {
  display: inline-block;
  transition: transform 0.25s ease;
}

.level-card:hover .arrow {
  transform: translateX(6px);
}

/* hover: card fills with its level color, same as home.vue */

.a1:hover {
  background: var(--yellow);
}
.a1:hover .circle {
  background: var(--ink);
}

.a2:hover {
  background: var(--red);
  color: #fff;
}
.a2:hover .square {
  background: #fff;
}
.a2:hover .level-cta {
  border-color: #fff;
}

.b1:hover {
  background: var(--blue);
  color: #fff;
}
.b1:hover .triangle {
  background: #fff;
}
.b1:hover .level-cta {
  border-color: #fff;
}

/* ==========================================
   FOOTER / BACK LINK
========================================== */

.foot {
  border-top: 3px solid var(--ink);
  padding: 28px 0 48px;
}

.back-link {
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  color: var(--ink);
  text-decoration: none;
  border-bottom: 2px solid var(--ink);
  padding-bottom: 2px;
}

.back-link:hover {
  color: var(--blue);
  border-color: var(--blue);
}

/* ==========================================
   RESPONSIVE
========================================== */

@media (max-width: 1000px) {
  .level-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .topbar {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
  .topic-title {
    font-size: clamp(2.2rem, 12vw, 3.2rem);
  }
  .level-card {
    padding: 22px 22px 26px;
  }
}
</style>