<template>
  <div class="home-page">
    <section class="hero-card">
      <div class="hero-glow hero-glow-left"></div>
      <div class="hero-glow hero-glow-right"></div>

      <p class="hero-kicker">German Practice Studio</p>
      <h2 class="hero-title">Choose Your Level</h2>
      <p class="hero-subtitle">
        Train vocabulary, listening, and writing with short focused quizzes. Start from A1 and work your way up.
      </p>

      <div class="level-grid">
        <router-link to="/level/A1" class="level-card level-a1">
          <span class="level-chip">Starter</span>
          <strong>A1</strong>
          <small>Core basics and daily phrases</small>
        </router-link>

        <router-link to="/level/A2" class="level-card level-a2">
          <span class="level-chip">Builder</span>
          <strong>A2</strong>
          <small>Everyday conversation and context</small>
        </router-link>

        <router-link to="/level/B1" class="level-card level-b1">
          <span class="level-chip">Independent</span>
          <strong>B1</strong>
          <small>Opinion, narrative, and fluency drills</small>
        </router-link>
      </div>
    </section>

    <section class="guide-card">
      <h3>Quick start</h3>
      <ol>
        <li>Pick a level card</li>
        <li>Answer the quiz items loaded from local JSON</li>
        <li>Review instant scoring for objective questions</li>
      </ol>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Manrope:wght@500;700&display=swap');

.home-page {
  --bg: #f8f5ee;
  --text: #1c2733;
  --muted: #4f6377;
  --panel: #fffdfa;
  --border: #e6e0d2;
  display: grid;
  gap: 1.25rem;
  font-family: Manrope, 'Segoe UI', Tahoma, sans-serif;
}

.hero-card {
  position: relative;
  overflow: hidden;
  border-radius: 1.25rem;
  border: 1px solid var(--border);
  background:
    radial-gradient(130% 120% at 8% 0%, #ffe8bb 0%, #fff7e8 45%, #fffdfa 100%),
    linear-gradient(135deg, #fffaf0 0%, #ffffff 100%);
  padding: 1.4rem;
  isolation: isolate;
}

.hero-kicker {
  margin: 0;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #8e6842;
  font-weight: 700;
}

.hero-title {
  margin: 0.35rem 0 0;
  color: var(--text);
  font-family: 'Space Grotesk', Manrope, sans-serif;
  font-size: clamp(1.8rem, 2.5vw, 2.3rem);
  line-height: 1.05;
}

.hero-subtitle {
  margin: 0.6rem 0 0;
  max-width: 60ch;
  color: var(--muted);
  font-size: 0.98rem;
}

.level-grid {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;
}

.level-card {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 0.35rem;
  align-content: start;
  min-height: 8.3rem;
  padding: 0.95rem;
  border-radius: 0.95rem;
  text-decoration: none;
  color: #15202d;
  border: 1px solid rgba(16, 24, 39, 0.08);
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 10px 20px rgba(18, 31, 44, 0.08);
  transform: translateY(16px);
  opacity: 0;
  animation: rise-in 620ms ease forwards;
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.level-card strong {
  font-size: 1.6rem;
  line-height: 1;
  letter-spacing: 0.02em;
}

.level-card small {
  color: #45596b;
  font-size: 0.84rem;
}

.level-card:hover {
  transform: translateY(-3px);
  border-color: rgba(16, 24, 39, 0.2);
  box-shadow: 0 14px 26px rgba(18, 31, 44, 0.13);
}

.level-card:focus-visible {
  outline: 3px solid #1d74d8;
  outline-offset: 2px;
}

.level-chip {
  display: inline-block;
  width: fit-content;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: 999px;
  padding: 0.15rem 0.5rem;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(16, 24, 39, 0.1);
}

.level-a1 {
  animation-delay: 60ms;
  background: linear-gradient(135deg, #dff2ff 0%, #f4fbff 100%);
}

.level-a2 {
  animation-delay: 140ms;
  background: linear-gradient(135deg, #efe6ff 0%, #faf6ff 100%);
}

.level-b1 {
  animation-delay: 220ms;
  background: linear-gradient(135deg, #dcf7e8 0%, #f3fff8 100%);
}

.guide-card {
  border-radius: 1rem;
  border: 1px solid var(--border);
  background: var(--panel);
  padding: 1rem 1.15rem;
}

.guide-card h3 {
  margin: 0;
  font-family: 'Space Grotesk', Manrope, sans-serif;
  color: var(--text);
}

.guide-card ol {
  margin: 0.6rem 0 0;
  padding-left: 1.1rem;
  color: #4b5f72;
}

.guide-card li + li {
  margin-top: 0.3rem;
}

.hero-glow {
  position: absolute;
  width: 12rem;
  height: 12rem;
  border-radius: 999px;
  filter: blur(30px);
  opacity: 0.38;
  z-index: 0;
  pointer-events: none;
}

.hero-glow-left {
  top: -4rem;
  left: -3rem;
  background: #ffd27a;
}

.hero-glow-right {
  right: -2rem;
  bottom: -5rem;
  background: #9ad8ff;
}

@keyframes rise-in {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 860px) {
  .level-grid {
    grid-template-columns: 1fr;
  }

  .level-card {
    min-height: auto;
  }
}
</style>
