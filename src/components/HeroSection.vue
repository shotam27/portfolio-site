<template>
  <section id="home" class="hero-section">
    <div class="max-w-6xl mx-auto min-h-screen relative">
      <!-- 左側の縦書きスキルリスト -->
      <div class="skills-vertical">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          class="skill-wrapper animate-item"
          :data-delay="index * 100"
          @mouseenter="handleMouseEnter(skill)"
          @mouseleave="handleMouseLeave"
        >
          <div class="skill-item">
            {{ skill.title }}
          </div>
        </div>
      </div>

      <!-- 右側のdescription表示エリア -->
      <transition name="description-fade" mode="out-in">
        <div
          class="skill-description-area"
          v-if="hoveredSkill || !hasHovered || showWelcome"
          :key="hoveredSkill ? hoveredSkill.title : 'welcome'"
        >
          {{ hoveredSkill ? hoveredSkill.description : "Welcome to Shota's Portfolio Site" }}
        </div>
      </transition>

      <!-- スクロール用の縦線 -->
      <div class="scroll-line"></div>

      <!-- 下部の縦書きスクロールテキスト -->
      <div class="scroll-text">
        <span>SCROLL FOR MORE</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  props: {
    skills: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      hoveredSkill: null,
      hasHovered: false,
      showWelcome: true,
      welcomeTimer: null,
    }
  },
  mounted() {
    this.setupItemAnimations()
  },
  beforeUnmount() {
    if (this.welcomeTimer) {
      clearTimeout(this.welcomeTimer)
    }
  },
  methods: {
    handleMouseEnter(skill) {
      this.hoveredSkill = skill
      this.hasHovered = true
      this.showWelcome = false
      // タイマーがあればクリア
      if (this.welcomeTimer) {
        clearTimeout(this.welcomeTimer)
        this.welcomeTimer = null
      }
    },
    handleMouseLeave() {
      this.hoveredSkill = null
      // 3秒後にWelcomeメッセージを表示
      if (this.hasHovered) {
        this.welcomeTimer = setTimeout(() => {
          this.showWelcome = true
        }, 3000)
      }
    },
    setupItemAnimations() {
      // ヒーローセクションは最初から表示されているので、直接アニメーションを開始
      const items = document.querySelectorAll('.animate-item')
      items.forEach((item) => {
        const delay = parseInt(item.dataset.delay) || 0
        setTimeout(() => {
          item.classList.add('animate-in')
        }, delay + 100) // 少し遅延を追加してスムーズに表示
      })
    },
  },
}
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #2c4a6d 0%, #1e3a5f 100%);
  position: relative;
  overflow: hidden;
  padding: 0 30px;
  user-select: none;
}

/* 左側の縦書きスキルリスト */
.skills-vertical {
  position: absolute;
  left: 50px;
  top: 33.33%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 40px;
  z-index: 20;
}

.skill-wrapper {
  position: relative;
  cursor: default;
}

.skill-item {
  color: white;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.1em;
  opacity: 1;
  transition: all 0.3s ease;
  transform: rotate(-20deg);
  transform-origin: center;
}

.skill-wrapper:hover .skill-item {
  opacity: 1;
  transform: rotate(-20deg) scale(1.2);
}

/* 右側のdescription表示エリア */
.skill-description-area {
  position: absolute;
  right: 50px;
  top: 33.33%;
  transform: translateY(-50%);
  color: #d8c4b6;
  font-size: 16px;
  line-height: 1.8;
  max-width: 50%;
}

/* トランジション効果 */
.description-fade-enter-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.description-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.description-fade-enter-from {
  opacity: 0;
  transform: translateY(-50%) translateX(20px);
}

.description-fade-enter-to {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}

.description-fade-leave-from {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}

.description-fade-leave-to {
  opacity: 0;
  transform: translateY(-50%) translateX(-20px);
}

/* スクロール用の縦線 */
.scroll-line {
  position: absolute;
  left: 60px;
  top: 75%;
  bottom: 0;
  width: 1px;
  background-color: white;
  opacity: 0.5;
  z-index: 5;
}

/* 下部の縦書きスクロールテキスト */
.scroll-text {
  position: absolute;
  bottom: 60px;
  left: 75px;
  color: white;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.2em;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  opacity: 0.7;
  z-index: 10;
  animation: blink 2s ease-in-out infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.2;
  }
}

/* アニメーション */
.animate-item {
  opacity: 1;
  transform: translateX(-30px) rotate(-20deg);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-item.animate-in {
  opacity: 1;
  transform: translateX(0) rotate(-20deg);
}

/* レスポンシブデザイン */
@media (max-width: 768px) {
  .skills-vertical {
    left: 20px;
    gap: 30px;
  }

  .skill-item {
    font-size: 16px;
  }

  .skill-description-area {
    right: 20px;
    font-size: 14px;
  }

  .scroll-line {
    left: 30px;
  }

  .scroll-text {
    bottom: 40px;
    left: 45px;
    font-size: 10px;
  }
}

@media (max-width: 480px) {
  .skills-vertical {
    left: 15px;
    gap: 20px;
  }

  .skill-item {
    font-size: 14px;
  }

  .skill-description-area {
    right: 15px;
    font-size: 12px;
  }

  .scroll-line {
    left: 20px;
  }

  .scroll-text {
    bottom: 30px;
    left: 35px;
  }
}
</style>
