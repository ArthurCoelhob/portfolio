<template>
  <section id="about" class="about-section py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <div class="text-center mb-12">
            <h2 class="text-h3 font-weight-bold mb-3">Sobre Mim</h2>
            <div class="divider mx-auto"></div>
          </div>
          
          <v-card elevation="0" color="transparent">
            <v-row align="center">
              <v-col cols="12" md="5" class="text-center">
                <div class="profile-image-wrapper">
                  <v-avatar size="320" class="profile-image">
                    <v-img
                      src="@/assets/images/arthurProfile.jpeg"
                      alt="Arthur"
                      :aspect-ratio="1"
                      class="profile-img"
                      cover
                    ></v-img>
                  </v-avatar>
                  <div class="experience-badge">
                    <span class="text-h5 font-weight-bold">{{ experienceYears }}+</span>
                    <span class="caption">Anos de<br>Experiência</span>
                  </div>
                </div>
              </v-col>
              
              <v-col cols="12" md="7">
                <div class="about-content">
                  <h3 class="text-h5 font-weight-bold mb-4">
                    {{ role }}
                  </h3>
                  <p class="text-body-1 text--secondary mb-6" v-html="description"></p>
                  <p class="text-body-1 text--secondary mb-8" v-html="additionalInfo"></p>
                  
                  <v-btn
                    color="primary"
                    x-large
                    outlined
                    @click="handleCVDownload"
                    class="mt-6 mb-6 mr-6 text-capitalize px-8"
                  >
                    <v-icon left>mdi-download</v-icon>
                    Download CV
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AboutSection extends Vue {
  private role = 'Desenvolvedor Full Stack';
  private experienceYears = 4;
  private handleCVDownload() {
    const link = document.createElement('a');
    link.href = '/assets/cv-arthur-coelho.pdf';
    link.download = 'Arthur-Coelho-CV.pdf';
    link.click();
  }

  private description = `
    Sou um Desenvolvedor Full Stack apaixonado por desenvolvimento web, com mais de 4 anos de experiência 
    na criação de soluções robustas e escaláveis. Minha especialidade está no desenvolvimento de APIs REST 
    e sistemas completos, combinando tecnologias back-end como PHP e Node.js com front-end moderno 
    utilizando TypeScript e Vue.js.
  `;

  private additionalInfo = `
    Tenho forte experiência em banco de dados SQL (especialmente Oracle) e práticas de DevOps/CI/CD. 
    Um dos meus maiores reconhecimentos foi vencer o hackathon interno da Teknisa, desenvolvendo uma 
    API de reconhecimento facial utilizando Docker, Python e FastAPI. Esta conquista demonstra minha 
    capacidade de inovar e me adaptar rapidamente a novos desafios e tecnologias.
  `;
}
</script>

<style scoped>
.about-section {
  background-color: var(--v-background-base);
  position: relative;
}

.divider {
  width: 80px;
  height: 4px;
  background-color: var(--v-primary-base);
  margin-top: 16px;
}

.profile-image-wrapper {
  position: relative;
  display: inline-block;
  margin: 20px auto;
  padding-right: 30px;
  padding-bottom: 30px;
}

.profile-image {
  border: 8px solid var(--v-surface-base);
  box-shadow: 0 0 25px rgba(0,0,0,0.12);
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.02);
}

.profile-img {
  object-fit: cover;
  object-position: center 20%;
}

.experience-badge {
  position: absolute;
  bottom: 0;
  right: 0;
  background: var(--v-primary-base);
  padding: 15px 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
  color: white;
  z-index: 1;
}

.experience-badge .text-h5 {
  font-size: 1.8rem !important;
  line-height: 1.2;
}

.experience-badge .caption {
  font-size: 0.9rem;
  opacity: 0.9;
}

.stat-item {
  padding: 20px;
  background: var(--v-surface-base);
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.04);
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.about-content {
  padding: 20px;
}

@media (max-width: 960px) {
  .profile-image-wrapper {
    margin-bottom: 40px;
  }
}
</style> 
