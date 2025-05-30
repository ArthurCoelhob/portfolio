<template>
  <section id="home" class="hero-section">
    <div class="background-pattern"></div>
    <div class="geometric-elements">
      <div class="geometric-circle"></div>
      <div class="geometric-square"></div>
      <div class="geometric-dots"></div>
    </div>
    
    <v-container class="fill-height pa-0">
      <v-row align="start" justify="center" class="fill-height mx-0">
        <v-col cols="12" md="10" lg="8" class="text-center pa-4" style="margin-top: 15vh;">
          <div class="hero-content">
            <div class="animate-slide-down">
              <h1 class="text-h2 font-weight-black mb-4">
                Olá, eu sou <span class="primary--text name-highlight">Arthur Coelho</span>
              </h1>
            </div>
            
            <div class="animate-slide-up">
              <p class="text-h5 font-weight-regular grey--text text--darken-1 mb-8">
                Transformando ideias em código. Desenvolvedor Full Stack apaixonado por criar experiências web.
              </p>
              
              <v-btn
                color="primary"
                x-large
                elevation="2"
                href="#contact"
                class="text-capitalize px-8 pulse-button"
              >
                Vamos Conversar
              </v-btn>

              <div class="social-links mt-8">
                <v-btn
                  v-for="(social, index) in socialLinks"
                  :key="index"
                  :href="social.link"
                  target="_blank"
                  icon
                  class="mx-2 social-icon"
                  :title="social.name"
                >
                  <v-icon>{{ social.icon }}</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <div class="scroll-indicator" @click="scrollToNextSection" role="button" tabindex="0">
      <v-icon class="scroll-icon">mdi-chevron-down</v-icon>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface SocialLink {
  name: string;
  icon: string;
  link: string;
}

@Component
export default class HeroSection extends Vue {
  private socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      icon: 'mdi-github',
      link: 'https://github.com/ArthurCoelhob'
    },
    {
      name: 'LinkedIn',
      icon: 'mdi-linkedin',
      link: 'https://www.linkedin.com/in/arthur-coelho-5351441b4/'
    },
  ];

  private scrollToNextSection(): void {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
</script>

<style scoped>
.hero-section {
  min-height: calc(100vh - 70px);
  padding-top: 40px; /* Reduzido ainda mais para compensar o novo posicionamento */
  background: linear-gradient(135deg, var(--v-background-base) 0%, var(--v-surface-base) 100%);
  position: relative;
  overflow: hidden;
}

.background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 1px 1px, var(--v-primary-base) 1px, transparent 0),
    linear-gradient(135deg, rgba(30, 136, 229, 0.1) 0%, rgba(30, 136, 229, 0.05) 100%);
  background-size: 40px 40px, 100% 100%;
  opacity: 0.2;
  animation: patternMove 60s linear infinite;
}

.geometric-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
}

.geometric-circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--v-primary-base) 0%, transparent 70%);
  opacity: 0.1;
  top: -250px;
  right: -250px;
  animation: float 6s ease-in-out infinite;
}

.geometric-square {
  position: absolute;
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, var(--v-secondary-base) 0%, transparent 70%);
  opacity: 0.1;
  bottom: -150px;
  left: -150px;
  transform: rotate(45deg);
  animation: float 8s ease-in-out infinite reverse;
}

.geometric-dots {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(var(--v-primary-base) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.1;
  animation: patternMove 60s linear infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes patternMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 40px 40px;
  }
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.animate-slide-down {
  animation: slideDown 1s ease-out;
}

.animate-slide-up {
  animation: slideUp 1s ease-out 0.5s;
  opacity: 0;
  animation-fill-mode: forwards;
}

@keyframes slideDown {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.name-highlight {
  position: relative;
  display: inline-block;
  transition: transform 0.3s ease;
}

.name-highlight::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--v-primary-base);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.name-highlight:hover {
  transform: translateY(-2px);
}

.name-highlight:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.pulse-button {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(30, 136, 229, 0.4);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(30, 136, 229, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(30, 136, 229, 0);
  }
}

.social-links {
  animation: fadeIn 1s ease-out 1s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.social-icon {
  transition: transform 0.3s ease;
}

.social-icon:hover {
  transform: translateY(-5px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: bounce 2s infinite;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.scroll-indicator:hover {
  opacity: 0.8;
}

.scroll-indicator:focus {
  outline: none;
  opacity: 0.8;
}

.scroll-indicator:focus .scroll-icon {
  text-shadow: 0 0 8px var(--v-primary-base);
}

.scroll-icon {
  color: var(--v-primary-base);
  font-size: 36px;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translate(-50%, 0);
  }
  40% {
    transform: translate(-50%, -20px);
  }
  60% {
    transform: translate(-50%, -10px);
  }
}

.pulse-button:hover {
  background: linear-gradient(135deg, var(--v-primary-base) 0%, var(--v-primary-lighten1) 100%);
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

/* Ajustes responsivos */
@media (max-width: 600px) {
  .hero-section {
    padding-top: 20px;
  }
  
  v-col {
    margin-top: 10vh !important; /* Ajuste para mobile */
  }

  .text-h2 {
    font-size: 2.25rem !important; /* Reduzido um pouco */
  }

  .text-h5 {
    font-size: 1.1rem !important;
    line-height: 1.5;
  }
}
</style> 