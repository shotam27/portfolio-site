<template>
  <div id="app" class="min-h-screen bg-light">
    <!-- Navigation -->
    <NavigationComponent 
      :site-name="portfolioData.personal.name"
      :navigation-items="portfolioData.navigation"
    />

    <!-- Hero Section -->
    <div class="fade-section" data-delay="0">
      <HeroSection 
        :title="portfolioData.personal.title"
      />
    </div>

    <!-- About Section -->
    <div class="fade-section" data-delay="200">
      <AboutSection 
        :description="portfolioData.personal.description"
        :skills="portfolioData.skills"
        :achievements="portfolioData.achievements"
      />
    </div>

    <!-- Projects Section -->
    <div class="fade-section" data-delay="400">
      <ProjectsSection :projects="portfolioData.projects" />
    </div>

    <!-- Timeline Section -->
    <div class="fade-section" data-delay="600">
      <TimelineSection :timeline="portfolioData.timeline" />
    </div>

    <!-- Contact Section -->
    <div class="fade-section" data-delay="800">
      <ContactSection 
        :future-goals="portfolioData.personal.futureGoals"
        :contact="portfolioData.contact"
      />
    </div>

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<script>
import NavigationComponent from './components/NavigationComponent.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterComponent from './components/FooterComponent.vue'
import portfolioData from './data/portfolio.json'

export default {
  name: 'App',
  components: {
    NavigationComponent,
    HeroSection,
    AboutSection,
    ProjectsSection,
    TimelineSection,
    ContactSection,
    FooterComponent
  },
  data() {
    return {
      portfolioData
    }
  },
  mounted() {
    // スクロールアニメーションの設定
    this.setupScrollAnimations()
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          })
        }
      })
    })
  },
  methods: {
    setupScrollAnimations() {
      // Intersection Observer の設定
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0
            setTimeout(() => {
              entry.target.classList.add('fade-in')
            }, delay)
          } else {
            entry.target.classList.remove('fade-in')
          }
        })
      }, observerOptions)

      // 全ての fade-section 要素を監視
      document.querySelectorAll('.fade-section').forEach((section) => {
        observer.observe(section)
      })
    }
  }
}
</script>

<style>
/* スクロールアニメーション */
.fade-section {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-section.fade-in {
  opacity: 1;
  transform: translateY(0);
}

/* スムーズなスクロール */
html {
  scroll-behavior: smooth;
}

/* より細かいアニメーション制御 */
.fade-section:nth-child(even) {
  transform: translateY(50px) translateX(-20px);
}

.fade-section:nth-child(even).fade-in {
  transform: translateY(0) translateX(0);
}

.fade-section:nth-child(odd) {
  transform: translateY(50px) translateX(20px);
}

.fade-section:nth-child(odd).fade-in {
  transform: translateY(0) translateX(0);
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .fade-section:nth-child(even),
  .fade-section:nth-child(odd) {
    transform: translateY(30px);
  }
  
  .fade-section:nth-child(even).fade-in,
  .fade-section:nth-child(odd).fade-in {
    transform: translateY(0);
  }
}
</style>
