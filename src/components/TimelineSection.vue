<template>
  <section id="timeline" class="py-24 bg-light">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <h2
        class="text-3xl md:text-4xl font-bold text-center text-primary mb-16 animate-item"
        data-delay="0"
      >
        Timeline
      </h2>
      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <!-- Timeline line -->
          <div
            class="absolute left-4 top-0 bottom-0 w-0.5 bg-accent animate-item"
            data-delay="200"
          ></div>

          <!-- Timeline items -->
          <div class="space-y-8">
            <div
              v-for="(item, index) in timeline"
              :key="index"
              class="relative flex items-start animate-item"
              :data-delay="(index + 2) * 200"
            >
              <div
                class="absolute left-2 w-4 h-4 bg-primary rounded-full border-4 border-light"
              ></div>
              <div
                class="ml-12 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 class="text-lg font-semibold text-primary mb-2">{{ item.year }}</h3>
                <p class="text-secondary" :class="{ 'mb-3': item.details }">{{ item.title }}</p>
                <ul v-if="item.details" class="text-sm text-secondary space-y-1 pl-4">
                  <li v-for="detail in item.details" :key="detail" class="relative">
                    <span class="absolute left-[-1rem] text-primary">•</span>
                    {{ detail }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TimelineSection',
  props: {
    timeline: {
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
  transform: translateX(-50px);
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.animate-item.animate-in {
  opacity: 1;
  transform: translateX(0);
}

/* タイムラインラインのアニメーション */
.animate-item:nth-child(2) {
  transform: scaleY(0);
  transform-origin: top;
}

.animate-item:nth-child(2).animate-in {
  transform: scaleY(1);
}
</style>
