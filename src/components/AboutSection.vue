<template>
  <section id="about" class="py-24 bg-light">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <h2
        class="text-3xl md:text-4xl font-bold text-center text-primary mb-16 animate-item"
        data-delay="0"
      >
        About Me
      </h2>
      <div class="max-w-5xl mx-auto">
        <div
          class="text-lg text-secondary space-y-8 mb-16 animate-item leading-relaxed"
          data-delay="200"
        >
          <p v-for="(paragraph, index) in description" :key="index">
            {{ paragraph }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-16">
          <!-- Skills -->
          <div
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-item"
            data-delay="400"
          >
            <h3 class="text-2xl font-semibold text-primary mb-6">スキル</h3>
            <div class="flex flex-wrap gap-3">
              <span
                v-for="skill in skills"
                :key="skill"
                class="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary transition-colors"
              >
                {{ skill }}
              </span>
            </div>
          </div>

          <!-- Achievements -->
          <div
            class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow animate-item"
            data-delay="600"
          >
            <h3 class="text-2xl font-semibold text-primary mb-6">資格・成果</h3>
            <ul class="space-y-4 text-secondary">
              <li
                v-for="achievement in achievements"
                :key="achievement.title"
                class="flex items-center text-base"
              >
                <span class="text-green-500 mr-3 text-lg">{{ achievement.icon }}</span>
                {{ achievement.title }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  props: {
    description: {
      type: Array,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
    achievements: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.setupItemAnimations()
  },
  methods: {
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
  },
}
</script>

<style scoped>
.animate-item {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}
</style>
