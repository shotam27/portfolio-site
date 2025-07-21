<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">Portfolio</div>
        <div class="nav-menu">
          <a href="#home" class="nav-link">Home</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#projects" class="nav-link">Projects</a>
          <a href="#timeline" class="nav-link">Timeline</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <!-- Hero Section -->
      <section id="home" class="hero">
        <div class="hero-content">
          <h1 class="hero-title">フルスタックエンジニア</h1>
          <p class="hero-subtitle">ネットワークエンジニア × 業務自動化 × ウェブ開発</p>
          <div class="hero-buttons">
            <a href="#projects" class="btn primary">プロジェクトを見る</a>
            <a href="#contact" class="btn secondary">お問い合わせ</a>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="about">
        <div class="container">
          <h2 class="section-title">About Me</h2>
          <div class="about-content">
            <div class="about-text">
              <p>
                客先常駐型派遣でネットワークエンジニアとして働きながら、業務自動化と改善に取り組んでいます。
              </p>
              <p>
                VBA、WinActor、PHP、Vue.jsを使った業務ツールの開発や、不具合対処・ファイル更新の自動化を行っています。
              </p>

              <div class="skills">
                <h3>スキル</h3>
                <div class="skill-tags">
                  <span class="tag">Vue.js</span>
                  <span class="tag">PHP</span>
                  <span class="tag">VBA</span>
                  <span class="tag">WinActor</span>
                  <span class="tag">Linux</span>
                  <span class="tag">VMware</span>
                  <span class="tag">ネットワーク設計</span>
                </div>
              </div>

              <div class="achievements">
                <h3>資格・成果</h3>
                <ul>
                  <li>TOEIC 890点</li>
                  <li>関西大学外国語学部外国語学科卒業</li>
                  <li>オレゴン大学留学経験（1年間）</li>
                  <li>小学3〜6年アメリカ在住</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="projects">
        <div class="container">
          <h2 class="section-title">Projects</h2>
          <div class="project-grid">
            <!-- ICG Card Game -->
            <div class="project-card">
              <div class="project-image">
                <div class="placeholder-image">🎴</div>
              </div>
              <div class="project-content">
                <h3>ICG Card Game</h3>
                <p class="project-description">
                  オンライン対戦型カードゲーム。オークション形式でカードを獲得し、戦略的にバトルを行うリアルタイムゲーム。
                </p>
                <div class="project-tech">
                  <span class="tech-tag">Vue.js</span>
                  <span class="tech-tag">Node.js</span>
                  <span class="tech-tag">Socket.io</span>
                  <span class="tech-tag">Railway</span>
                </div>
                <div class="project-links">
                  <a href="https://icg-9qc1.onrender.com/" target="_blank" class="btn primary"
                    >Live Demo</a
                  >
                </div>
              </div>
            </div>

            <!-- Business Automation Tools -->
            <div class="project-card">
              <div class="project-image">
                <div class="placeholder-image">⚙️</div>
              </div>
              <div class="project-content">
                <h3>業務自動化ツール群</h3>
                <p class="project-description">
                  ネットワーク運用業務において、不具合対処とファイル更新プロセスを自動化。作業効率を大幅に向上。
                </p>
                <div class="project-tech">
                  <span class="tech-tag">VBA</span>
                  <span class="tech-tag">WinActor</span>
                  <span class="tech-tag">PHP</span>
                  <span class="tech-tag">Linux</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Timeline Section -->
      <section id="timeline" class="timeline-section">
        <div class="container">
          <h2 class="section-title">Timeline</h2>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h3>2018年</h3>
                <p>関西大学外国語学部外国語学科卒業</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h3>2016年</h3>
                <p>オレゴン大学に1年間留学</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h3>現在</h3>
                <p>ネットワークエンジニア・業務自動化エンジニア</p>
                <ul>
                  <li>NGN等のひかり電話系サーバ運用・保守（1年3ヶ月）</li>
                  <li>通信設備等の設計業務（2年5ヶ月）</li>
                  <li>外注臨床検査の営業経験</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="contact">
        <div class="container">
          <h2 class="section-title">Future Goals</h2>
          <div class="contact-content">
            <p class="contact-description">
              AIを使った新しい分野の開発に挑戦したいと考えています。<br />
              関西を中心に活動しており、新しい技術とプロジェクトに積極的に取り組んでいます。
            </p>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 Portfolio. Made with Vue.js</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
          })
        }
      })
    })
  },
}
</script>

<style>
/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:
    'Inter',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
  line-height: 1.6;
  color: #333;
  scroll-behavior: smooth;
}

#app {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2563eb;
}

.nav-menu {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #2563eb;
}

/* Hero Section */
.hero {
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero-content {
  max-width: 800px;
  padding: 0 2rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.btn.primary {
  background: #2563eb;
  color: white;
}

.btn.primary:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
}

.btn.secondary {
  background: transparent;
  color: white;
  border-color: white;
}

.btn.secondary:hover {
  background: white;
  color: #2563eb;
}

/* Sections */
section {
  padding: 5rem 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #1f2937;
}

/* About Section */
.about {
  background: #f8fafc;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.about-text p {
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  color: #4b5563;
}

.skills,
.achievements {
  margin-top: 2rem;
}

.skills h3,
.achievements h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #2563eb;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.achievements ul {
  list-style: none;
  padding-left: 0;
}

.achievements li {
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
}

.achievements li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: bold;
}

/* Projects Section */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.project-card {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.project-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-image {
  font-size: 4rem;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1f2937;
}

.project-description {
  color: #4b5563;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: #e5e7eb;
  color: #374151;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 0.5rem;
}

/* Timeline Section */
.timeline-section {
  background: #f8fafc;
}

.timeline {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 1rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e5e7eb;
}

.timeline-item {
  position: relative;
  padding-left: 3rem;
  margin-bottom: 2rem;
}

.timeline-dot {
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  width: 1rem;
  height: 1rem;
  background: #2563eb;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 3px #e5e7eb;
}

.timeline-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.timeline-content p {
  color: #4b5563;
  margin-bottom: 0.5rem;
}

.timeline-content ul {
  list-style: none;
  padding-left: 1rem;
}

.timeline-content li {
  color: #6b7280;
  margin-bottom: 0.25rem;
  position: relative;
}

.timeline-content li::before {
  content: '•';
  position: absolute;
  left: -1rem;
  color: #2563eb;
}

/* Contact Section */
.contact-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.contact-description {
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.8;
}

/* Footer */
.footer {
  background: #1f2937;
  color: white;
  text-align: center;
  padding: 2rem 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-menu {
    gap: 1rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

  .project-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }

  .timeline::before {
    left: 0.5rem;
  }

  .timeline-item {
    padding-left: 2rem;
  }

  .timeline-dot {
    left: 0;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .nav-container {
    padding: 1rem;
  }

  .nav-menu {
    gap: 0.5rem;
  }

  .nav-link {
    font-size: 0.875rem;
  }
}
</style>
