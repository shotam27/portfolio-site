<template>
  <section id="projects" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <h2
        class="text-3xl md:text-4xl font-bold text-center text-primary mb-16 animate-item"
        data-delay="0"
      >
        Projects
      </h2>

      <!-- Carousel Container -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Carousel Wrapper -->
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <!-- Project Cards -->
            <div
              v-for="(project, index) in projects"
              :key="project.id"
              class="w-full flex-shrink-0 px-4"
            >
              <div
                class="bg-light rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div
                  v-if="project.hasCustomBackground"
                  class="h-56 relative overflow-hidden"
                  :class="getBackgroundClass(project)"
                  :style="getBackgroundImage(project)"
                >
                  <div class="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6">
                    <div class="text-white">
                      <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
                      <p class="text-sm opacity-90">{{ project.shortDescription }}</p>
                    </div>
                  </div>
                </div>
                <div
                  v-else
                  class="h-56 bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
                >
                  <div class="text-white text-center">
                    <h3 class="text-xl font-bold">{{ project.title }}</h3>
                    <p class="text-sm opacity-90">{{ project.shortDescription }}</p>
                  </div>
                </div>
                <div class="p-8">
                  <h3 class="text-xl font-semibold text-primary mb-4">{{ project.title }}</h3>

                  <!-- Short description -->
                  <p class="text-secondary mb-4 leading-relaxed font-medium">
                    {{ project.shortDescription || project.description }}
                  </p>

                  <!-- Full description -->
                  <p class="text-secondary text-sm mb-4 leading-relaxed">
                    {{ project.description }}
                  </p>

                  <!-- Features -->
                  <div v-if="project.features" class="mb-4">
                    <h4 class="text-sm font-semibold text-primary mb-2">主な機能</h4>
                    <ul class="text-xs text-secondary space-y-1">
                      <li
                        v-for="feature in project.features"
                        :key="feature"
                        class="flex items-start"
                      >
                        <span class="text-primary mr-2">•</span>
                        {{ feature }}
                      </li>
                    </ul>
                  </div>

                  <!-- Achievements -->
                  <div v-if="project.achievements" class="mb-4">
                    <h4 class="text-sm font-semibold text-primary mb-2">成果</h4>
                    <ul class="text-xs text-secondary space-y-1">
                      <li
                        v-for="achievement in project.achievements"
                        :key="achievement"
                        class="flex items-start"
                      >
                        <span class="text-green-500 mr-2">✓</span>
                        {{ achievement }}
                      </li>
                    </ul>
                  </div>

                  <!-- Technology tags -->
                  <div class="flex flex-wrap gap-2 mb-6">
                    <span
                      v-for="tech in project.technologies"
                      :key="tech"
                      class="bg-accent text-primary px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {{ tech }}
                    </span>
                  </div>

                  <!-- Notes -->
                  <div v-if="project.notes" class="mb-6">
                    <div
                      class="text-xs text-secondary space-y-1 bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400"
                    >
                      <p v-for="note in project.notes" :key="note" class="flex items-start">
                        <span class="text-yellow-600 mr-2">⚠</span>
                        {{ note }}
                      </p>
                    </div>
                  </div>

                  <!-- Link button -->
                  <a
                    v-if="project.link"
                    :href="project.link"
                    target="_blank"
                    class="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors font-medium"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="prevSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all z-10"
          :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
          :disabled="currentIndex === 0"
        >
          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all z-10"
          :class="{ 'opacity-50 cursor-not-allowed': currentIndex === projects.length - 1 }"
          :disabled="currentIndex === projects.length - 1"
        >
          <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <!-- Dots Indicator -->
        <div class="flex justify-center gap-2 mt-8">
          <button
            v-for="(project, index) in projects"
            :key="index"
            @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-all"
            :class="currentIndex === index ? 'bg-primary w-8' : 'bg-gray-300'"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  mounted() {
    this.setupItemAnimations()
  },
  methods: {
    nextSlide() {
      if (this.currentIndex < this.projects.length - 1) {
        this.currentIndex++
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    },
    goToSlide(index) {
      this.currentIndex = index
    },
    setupItemAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px',
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0
            setTimeout(() => {
              entry.target.classList.add('animate-in')
            }, delay)
          }
        })
      }, observerOptions)

      document.querySelectorAll('.animate-item').forEach((item) => {
        observer.observe(item)
      })
    },
    getBackgroundImage(project) {
      if (project.hasCustomBackground && project.backgroundImage) {
        try {
          // Viteでの画像インポート
          const imageUrl = new URL(`../assets/${project.backgroundImage}`, import.meta.url).href
          return {
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }
        } catch (error) {
          console.warn('Background image not found:', project.backgroundImage)
          return {}
        }
      }
      return {}
    },
    getBackgroundClass(project) {
      if (project.hasCustomBackground && project.backgroundImage) {
        // 実際の画像がある場合はデフォルトのクラスのみ
        return 'image-background'
      } else if (project.id === 'ICG') {
        return 'icg-game-background'
      } else if (project.id === 'automation-tools') {
        return 'winactor-automation-background'
      }
      return 'default-background'
    },
  },
}
</script>

<style scoped>
/* アイテムアニメーション */
.animate-item {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-item.animate-in {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.image-background {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.icg-game-background {
  background: linear-gradient(
    135deg,
    #1e3a8a 0%,
    #3b82f6 25%,
    #60a5fa 50%,
    #93c5fd 75%,
    #dbeafe 100%
  );
  background-size: 400% 400%;
  animation: gameGradient 6s ease infinite;
  position: relative;
}

.icg-game-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(
      circle at 20% 30%,
      rgba(255, 255, 255, 0.1) 2px,
      transparent 2px
    ),
    radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.06) 1.5px, transparent 1.5px);
  background-size: 50px 50px, 30px 30px, 40px 40px;
  animation: float 4s ease-in-out infinite;
}

.winactor-automation-background {
  background: linear-gradient(
    135deg,
    #2563eb 0%,
    #3b82f6 25%,
    #60a5fa 50%,
    #93c5fd 75%,
    #dbeafe 100%
  );
  background-size: 400% 400%;
  animation: automationFlow 8s ease infinite;
  position: relative;
}

.winactor-automation-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
      90deg,
      transparent 48%,
      rgba(255, 255, 255, 0.1) 49%,
      rgba(255, 255, 255, 0.1) 51%,
      transparent 52%
    ),
    linear-gradient(
      0deg,
      transparent 48%,
      rgba(255, 255, 255, 0.08) 49%,
      rgba(255, 255, 255, 0.08) 51%,
      transparent 52%
    ),
    radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.15) 8px, transparent 8px),
    radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 6px, transparent 6px);
  background-size: 40px 40px, 40px 40px, 80px 80px, 60px 60px;
  animation: flowChart 5s linear infinite;
}

.winactor-automation-background::after {
  content: '';
  position: absolute;
  top: 20%;
  left: 15%;
  right: 15%;
  bottom: 20%;
  background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 200, 100, 0.1) 40%,
      rgba(255, 200, 100, 0.1) 60%,
      transparent 70%
    ),
    linear-gradient(
      -45deg,
      transparent 30%,
      rgba(100, 200, 255, 0.1) 40%,
      rgba(100, 200, 255, 0.1) 60%,
      transparent 70%
    );
  background-size: 60px 60px, 80px 80px;
  animation: processFlow 6s ease-in-out infinite;
  border-radius: 8px;
}

@keyframes gameGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes automationFlow {
  0% {
    background-position: 0% 0%;
  }
  25% {
    background-position: 100% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  75% {
    background-position: 0% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}

@keyframes flowChart {
  0% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(10px) translateY(0);
  }
  50% {
    transform: translateX(10px) translateY(10px);
  }
  75% {
    transform: translateX(0) translateY(10px);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}

@keyframes processFlow {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
