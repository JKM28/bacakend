<template>
  <div class="home-page">

    <!-- TOP BAR -->
    <header class="topbar">
      <div class="wordmark">
        <span class="mark-dot"></span>
        Deutschprüfung
      </div>
      <div class="topbar-meta">GER · CEFR&nbsp;&nbsp;A1 – B1</div>
    </header>

    <!-- HERO -->
    <section class="hero">
      <p class="eyebrow">German proficiency examination — CEFR aligned</p>

      <h1 class="hero-title" aria-label="Prüfung">
        <span aria-hidden="true">
          Pr<span class="u-umlaut">u<span class="dot dot-red"></span><span class="dot dot-blue"></span></span>fung
        </span>
      </h1>

      <p class="dict-entry">
        <strong>die Prüfung</strong>, -en&nbsp;&nbsp;/ˈpʁyːfʊŋ/&nbsp;&nbsp;<em>noun</em> — examination, test
      </p>

      <p class="hero-lede">
        Find your level and prove your German. Each examination follows the
        CEFR standard and covers vocabulary, grammar, reading, and listening.
      </p>

      <p class="hero-cue">↓&nbsp;&nbsp;Wähle dein Niveau — choose your level</p>

      <!-- Verb + Prepositions exam button (new) -->
      <router-link to="/topic/verb-prepositions" class="verb-btn" aria-label="Verb plus prepositions exam">
        Verb + Prepositions Exam
      </router-link>
    </section>

    <!-- WORD STRIP -->
    <div class="wordstrip" aria-hidden="true">
      <div class="wordstrip-track">
        <span v-for="n in 2" :key="n" class="wordstrip-run">
          Hallo&nbsp;&nbsp;·&nbsp;&nbsp;Danke&nbsp;&nbsp;·&nbsp;&nbsp;Bahnhof&nbsp;&nbsp;·&nbsp;&nbsp;Genau&nbsp;&nbsp;·&nbsp;&nbsp;Familie&nbsp;&nbsp;·&nbsp;&nbsp;Einkaufen&nbsp;&nbsp;·&nbsp;&nbsp;Meinung&nbsp;&nbsp;·&nbsp;&nbsp;Termin&nbsp;&nbsp;·&nbsp;&nbsp;Umwelt&nbsp;&nbsp;·&nbsp;&nbsp;Doch&nbsp;&nbsp;·&nbsp;&nbsp;Bewerbung&nbsp;&nbsp;·&nbsp;&nbsp;Gemütlichkeit&nbsp;&nbsp;·&nbsp;&nbsp;
        </span>
      </div>
    </div>

    <!-- LEVELS -->
    <section class="levels">
      <div class="section-head">
        <h2>Select your examination level</h2>
        <p>Every level has its own form. Start where you stand.</p>
      </div>

      <div class="level-grid">

        <router-link to="/level/A1" class="level-card a1">
          <div class="shape-box">
            <span class="shape circle"></span>
          </div>
          <p class="level-code">Niveau A1 — Anfänger</p>
          <h3>Basic User</h3>
          <p class="level-desc">
            Greetings, introductions, numbers, family, food, and simple
            everyday conversations.
          </p>
          <p class="level-words">Hallo · Danke · Familie · Essen</p>
          <span class="level-cta">Prüfung starten <span class="arrow">→</span></span>
        </router-link>

        <router-link to="/level/A2" class="level-card a2">
          <div class="shape-box">
            <span class="shape square"></span>
          </div>
          <p class="level-code">Niveau A2 — Grundstufe</p>
          <h3>Elementary User</h3>
          <p class="level-desc">
            Travel, shopping, work, directions, and routine communication in
            familiar situations.
          </p>
          <p class="level-words">Bahnhof · Einkaufen · Termin · Arbeit</p>
          <span class="level-cta">Prüfung starten <span class="arrow">→</span></span>
        </router-link>

        <router-link to="/level/B1" class="level-card b1">
          <div class="shape-box">
            <span class="shape triangle"></span>
          </div>
          <p class="level-code">Niveau B1 — Mittelstufe</p>
          <h3>Independent User</h3>
          <p class="level-desc">
            Opinions, reading comprehension, writing, and grammar at
            certificate-exam depth.
          </p>
          <p class="level-words">Meinung · Umwelt · Bewerbung · Zukunft</p>
          <span class="level-cta">Prüfung starten <span class="arrow">→</span></span>
        </router-link>

      </div>
    </section>

    <!-- FEATURES -->
    <section class="features">
      <div class="feature">
        <span class="bullet bullet-circle"></span>
        <h3>Instant results</h3>
        <p>Your score appears the moment you finish — no waiting, no grading queue.</p>
      </div>
      <div class="feature">
        <span class="bullet bullet-square"></span>
        <h3>CEFR-aligned questions</h3>
        <p>Every question is written to the A1, A2, or B1 descriptors of the framework.</p>
      </div>
      <div class="feature">
        <span class="bullet bullet-triangle"></span>
        <h3>Real exam preparation</h3>
        <p>The same question types you'll meet in Goethe- and telc-style certificate exams.</p>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="guide">
      <div class="section-head">
        <h2>How it works</h2>
        <p>Three steps from start to score.</p>
      </div>

      <ol class="guide-grid">
        <li class="guide-card">
          <span class="step-num">1</span>
          <h3>Choose a level</h3>
          <p>Pick A1, A2, or B1 based on where your German is today.</p>
        </li>
        <li class="guide-card">
          <span class="step-num">2</span>
          <h3>Take the examination</h3>
          <p>Work through vocabulary, grammar, reading, and listening questions.</p>
        </li>
        <li class="guide-card">
          <span class="step-num">3</span>
          <h3>See your results</h3>
          <p>Get your score instantly and see exactly where to improve.</p>
        </li>
      </ol>
    </section>

    <!-- FOOTER -->
    <footer class="foot">
      <p class="foot-big">Viel Erfolg!</p>
      <p class="foot-small">— good luck on your examination.</p>
    </footer>

  </div>
</template>

<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&family=Archivo:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap");

/* ==========================================
   TOKENS — Bauhaus paper & primaries
========================================== */

* {
  box-sizing: border-box;
}

.home-page {
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

.hero {
  padding: clamp(48px, 8vw, 96px) 0 clamp(36px, 5vw, 64px);
  position: relative;
}

.eyebrow {
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin: 0 0 18px;
}

.hero-title {
  font-family: "Jost", sans-serif;
  font-weight: 600;
  font-size: clamp(4rem, 15vw, 12.5rem);
  line-height: 0.95;
  letter-spacing: -0.02em;
  margin: 0;
}

/* custom umlaut: the two dots become Bauhaus red & blue */
.u-umlaut {
  position: relative;
  display: inline-block;
}

.dot {
  position: absolute;
  top: 0.03em;
  width: 0.13em;
  height: 0.13em;
  border-radius: 50%;
}

.dot-red {
  left: 0.1em;
  background: var(--red);
}

.dot-blue {
  right: 0.1em;
  background: var(--blue);
}

.dict-entry {
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.92rem;
  color: var(--muted);
  border-left: 3px solid var(--ink);
  padding-left: 14px;
  margin: 28px 0 0;
}

.dict-entry strong {
  color: var(--ink);
  font-weight: 500;
}

.hero-lede {
  max-width: 560px;
  font-size: 1.1rem;
  line-height: 1.7;
  margin: 24px 0 0;
}

.hero-cue {
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.85rem;
  letter-spacing: 0.06em;
  margin: 40px 0 0;
}

/* ==========================================
   Verb + Prepositions button (matches design)
   placed in hero, styled to fit Bauhaus tokens
========================================== */

.verb-btn {
  display: inline-block;
  margin-top: 18px;
  padding: 12px 18px;
  border-radius: 8px;
  background: var(--ink);
  color: var(--paper);
  font-family: "Jost", sans-serif;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid var(--ink);
  transition: transform 0.22s ease, box-shadow 0.22s ease, background-color 0.22s ease;
  box-shadow: 0 8px 18px rgba(22,19,14,0.06);
}
.verb-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 30px rgba(22,19,14,0.12);
  background: linear-gradient(180deg, var(--ink), #0f0d0b);
}
.verb-btn:active { transform: translateY(-1px) scale(0.998); }
.verb-btn:focus-visible {
  outline: 3px solid var(--blue);
  outline-offset: 4px;
}

/* small icon variant for the verb button (optional) */
.verb-btn::after {
  content: " →";
  display: inline-block;
  margin-left: 8px;
  transition: transform 0.22s ease;
}
.verb-btn:hover::after { transform: translateX(6px); }

/* ==========================================
   WORD STRIP
========================================== */

.wordstrip {
  border-top: var(--rule);
  border-bottom: var(--rule);
  overflow: hidden;
  padding: 12px 0;
  margin: 0 calc(-1 * clamp(20px, 5vw, 64px));
}

.wordstrip-track {
  display: flex;
  width: max-content;
  animation: slide 48s linear infinite;
}

.wordstrip-run {
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  white-space: nowrap;
}

@keyframes slide {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

/* ==========================================
   SECTION HEADS
========================================== */

.section-head {
  margin-bottom: 36px;
}

.section-head h2 {
  font-family: "Jost", sans-serif;
  font-weight: 600;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  margin: 0 0 8px;
  letter-spacing: -0.01em;
}

.section-head p {
  color: var(--muted);
  margin: 0;
}

/* ==========================================
   LEVELS — each level owns a form
========================================== */

.levels {
  padding: clamp(48px, 7vw, 88px) 0 0;
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
  height: 96px;
  display: flex;
  align-items: flex-start;
  margin-bottom: 24px;
}

.shape {
  display: block;
  width: 72px;
  height: 72px;
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
  font-size: 1.7rem;
  margin: 0 0 12px;
}

.level-desc {
  line-height: 1.65;
  margin: 0 0 18px;
  flex: 1;
}

.level-words {
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.78rem;
  color: var(--muted);
  margin: 0 0 22px;
  transition: color 0.25s ease;
}

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

/* hover: the card fills with its level color */

.a1:hover {
  background: var(--yellow);
}

.a1:hover .circle {
  background: var(--ink);
}

.a1:hover .level-words {
  color: var(--ink);
}

.a2:hover {
  background: var(--red);
  color: #fff;
}

.a2:hover .square {
  background: #fff;
}

.a2:hover .level-words {
  color: #ffd7d4;
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

.b1:hover .level-words {
  color: #cdd9ff;
}

.b1:hover .level-cta {
  border-color: #fff;
}

/* ==========================================
   FEATURES — one bordered row, shape bullets
========================================== */

.features {
  margin-top: clamp(56px, 8vw, 96px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: var(--rule);
}

.feature {
  padding: 28px;
}

.feature + .feature {
  border-left: var(--rule);
}

.bullet {
  display: block;
  width: 18px;
  height: 18px;
  margin-bottom: 16px;
}

.bullet-circle {
  border-radius: 50%;
  background: var(--yellow);
}

.bullet-square {
  background: var(--red);
}

.bullet-triangle {
  background: var(--blue);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

.feature h3 {
  font-family: "Jost", sans-serif;
  font-weight: 600;
  font-size: 1.15rem;
  margin: 0 0 8px;
}

.feature p {
  margin: 0;
  line-height: 1.65;
  color: var(--muted);
}

/* ==========================================
   GUIDE — a real sequence, so numbers earn their place
========================================== */

.guide {
  padding: clamp(56px, 8vw, 96px) 0 0;
}

.guide-grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 0;
  padding: 0;
}

.guide-card {
  border-top: 3px solid var(--ink);
  padding-top: 20px;
}

.step-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: var(--rule);
  border-radius: 50%;
  font-family: "Jost", sans-serif;
  font-weight: 600;
  font-size: 1.15rem;
  margin-bottom: 16px;
}

.guide-card h3 {
  font-family: "Jost", sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0 0 8px;
}

.guide-card p {
  margin: 0;
  line-height: 1.65;
  color: var(--muted);
}

/* ==========================================
   FOOTER
========================================== */

.foot {
  margin-top: clamp(64px, 9vw, 110px);
  border-top: 3px solid var(--ink);
  padding: 36px 0 48px;
  display: flex;
  align-items: baseline;
  gap: 14px;
  flex-wrap: wrap;
}

.foot-big {
  font-family: "Jost", sans-serif;
  font-weight: 600;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  margin: 0;
}

.foot-small {
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.85rem;
  color: var(--muted);
  margin: 0;
}

/* ==========================================
   MOTION PREFERENCES
========================================== */

@media (prefers-reduced-motion: reduce) {
  .wordstrip-track {
    animation: none;
  }
  .level-card,
  .shape,
  .arrow,
  .verb-btn {
    transition: none;
  }
}

/* ==========================================
   RESPONSIVE
========================================== */

@media (max-width: 1000px) {
  .level-grid {
    grid-template-columns: 1fr;
  }
  .features {
    grid-template-columns: 1fr;
  }
  .feature + .feature {
    border-left: none;
    border-top: var(--rule);
  }
  .guide-grid {
    grid-template-columns: 1fr;
  }
  .hero-title {
    font-size: clamp(3.2rem, 18vw, 6.5rem);
  }
}

@media (max-width: 560px) {
  .topbar {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
  .hero-title {
    font-size: clamp(3.2rem, 18vw, 5rem);
  }
  .level-card {
    padding: 22px 22px 26px;
  }
  .verb-btn { width: 100%; display: inline-flex; justify-content: center; }
}
</style>
