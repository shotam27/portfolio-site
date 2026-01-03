<template>
  <section id="contact" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <h2
        class="text-3xl md:text-4xl font-bold text-center text-primary mb-16 animate-item"
        data-delay="0"
      >
        Contact & Future Goals
      </h2>
      
      <!-- Contact Information -->
      <div class="max-w-4xl mx-auto mb-12">
        <div class="flex flex-col md:flex-row justify-center items-center gap-8 animate-item" data-delay="100">
          <a
            :href="`mailto:${contact.email}`"
            class="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg"
          >
            <i class="fas fa-envelope text-xl"></i>
            {{ contact.email }}
          </a>
          <a
            :href="contact.github"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-3 bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <i class="fab fa-github text-xl"></i>
            GitHub
          </a>
        </div>
      </div>
      
      <!-- Future Goals -->
      <div class="max-w-4xl mx-auto text-center">
        <h3 class="text-2xl font-bold text-primary mb-6 animate-item" data-delay="200">Future Goals</h3>
        <p
          class="text-lg text-secondary leading-relaxed animate-item bg-gray-50 p-8 rounded-2xl shadow-lg"
          data-delay="300"
          v-html="formattedGoals"
        ></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  props: {
    futureGoals: {
      type: String,
      required: true,
    },
    contact: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.setupItemAnimations()
  },
  computed: {
    formattedGoals() {
      return this.futureGoals.replace(/\n/g, '<br>')
    },
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
