<template>
  <section id="projects" class="projects-section py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <div class="text-center mb-12">
            <h2 class="text-h3 font-weight-bold mb-3">Projetos</h2>
            <div class="divider mx-auto"></div>
          </div>

          <div class="projects-container">
            <v-btn 
              icon 
              class="nav-btn nav-btn-left" 
              @click="scrollLeft"
              :disabled="!canScrollLeft"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            
            <div class="projects-scroll" ref="projectsScroll" @scroll="updateScrollButtons">
              <v-card 
                v-for="(project, index) in projects" 
                :key="index" 
                class="project-card" 
                elevation="3"
              >
                <v-card-title class="text-h6 d-flex align-center">
                  {{ project.title }}
                </v-card-title>
                <v-card-subtitle class="pb-0 pt-6">
                  <v-chip 
                    v-for="tech in project.technologies"
                    :key="tech"
                    x-small 
                    outlined 
                    class="mr-1 mb-1"
                  >
                    {{ tech }}
                  </v-chip>
                </v-card-subtitle>
                <v-card-text class="pt-4">
                  <p>{{ project.description }}</p>
                  <v-alert
                    v-if="project.isHackathonWinner"
                    dense
                    text
                    type="success"
                    class="mb-0"
                  >
                    🏆 Projeto vencedor do hackathon
                  </v-alert>
                </v-card-text>
                <v-card-actions v-if="project.githubUrl || project.demoUrl">
                  <v-btn
                    v-if="project.githubUrl"
                    text
                    color="primary"
                    :href="project.githubUrl"
                    target="_blank"
                    class="text-none"
                  >
                    <v-icon left>fab fa-github</v-icon>
                    GitHub
                  </v-btn>
                  <v-btn
                    v-if="project.demoUrl"
                    text
                    color="primary"
                    :href="project.demoUrl"
                    target="_blank"
                    class="text-none"
                  >
                    <v-icon left small>mdi-open-in-new</v-icon>
                    Demo
                  </v-btn>
                </v-card-actions>
              </v-card>
            </div>
            
            <v-btn 
              icon 
              class="nav-btn nav-btn-right" 
              @click="scrollRight"
              :disabled="!canScrollRight"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface Project {
  title: string;
  technologies: string[];
  description: string;
  githubUrl?: string;
  demoUrl?: string;
  isHackathonWinner?: boolean;
}

@Component
export default class ProjectsSection extends Vue {
  private canScrollLeft = false;
  private canScrollRight = true;

  mounted() {
    this.updateScrollButtons();
  }

  private scrollLeft(): void {
    const container = this.$refs.projectsScroll as HTMLElement;
    const scrollAmount = (350 + 24) * 2;
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }

  private scrollRight(): void {
    const container = this.$refs.projectsScroll as HTMLElement;
    const scrollAmount = (350 + 24) * 2;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }

  private updateScrollButtons(): void {
    const container = this.$refs.projectsScroll as HTMLElement;
    if (!container) return;
    
    this.canScrollLeft = container.scrollLeft > 0;
    this.canScrollRight = container.scrollLeft < (container.scrollWidth - container.clientWidth);
  }
  private projects: Project[] = [
    {
      title: 'API de Reconhecimento Facial',
      technologies: ['Python', 'FastAPI', 'Docker', 'OpenCV'],
      description: `Vencedor do hackathon interno da Teknisa. Desenvolvimento de uma API robusta para reconhecimento facial utilizando Python e FastAPI, com containerização em Docker.`,
      isHackathonWinner: true
    },
    {
      title: 'MyProjectManager',
      technologies: ['Vue.js', 'TypeScript', 'Node.js', 'Nest.js', 'PostgreSQL'],
      description: `Plataforma web completa para gerenciamento de projetos e tarefas. Implementada com arquitetura em camadas.`,
      githubUrl: 'https://github.com/ArthurCoelhob/myProjectManager-web'
    },
    {
      title: 'API de Autenticação JWT',
      technologies: ['Node.js', 'Express.js', 'TypeScript', 'JWT', 'PostgreSQL'],
      description: `API de autenticação robusta implementada com JWT. Oferece funcionalidades de registro, login seguro e rotas protegidas.`,
      githubUrl: 'https://github.com/ArthurCoelhob/api-auth-nodejs'
    },
    {
      title: 'Laravel TDD',
      technologies: ['Laravel', 'PHP', 'PHPUnit', 'TDD'],
      description: `Projeto de estudo sobre desenvolvimento orientado a testes (TDD) com Laravel e PHPUnit. Implementação de práticas de teste automatizado.`,
      githubUrl: 'https://github.com/ArthurCoelhob/laravel-tdd'
    },
    {
      title: 'Agenda Fisioterapia/Pilates',
      technologies: ['Vue.js', 'Node.js', 'MySQL', 'Nest.js'],
      description: `Sistema de agendamento para estúdio de fisioterapia e pilates. Em desenvolvimento.`,
    },
    {
      title: 'Currículo Digital',
      technologies: ['Vue.js', 'TypeScript', 'Vuetify'],
      description: `Portfolio pessoal desenvolvido com Vue.js e Vuetify. Interface responsiva e moderna com download de CV integrado e formulário para envio de e-mails para contato.`,
      demoUrl: window.location.origin
    }
  ];
}
</script>

<style scoped>
.projects-section {
  background-color: var(--v-background-base);
}

.divider {
  width: 80px;
  height: 4px;
  background-color: var(--v-primary-base);
  margin-top: 16px;
}

.projects-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 0 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background: var(--v-surface-base) !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
  transition: all 0.3s ease;
}

.nav-btn:hover:not(.v-btn--disabled) {
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2) !important;
}

.nav-btn-left {
  left: 10px;
}

.nav-btn-right {
  right: 10px;
}

.nav-btn.v-btn--disabled {
  opacity: 0.3;
}

.theme--dark .nav-btn {
  background: var(--v-grey-darken3) !important;
}

.projects-scroll {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  padding: 8px 0 24px;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.projects-scroll::-webkit-scrollbar {
  display: none;
}

.project-card {
  min-width: 350px;
  max-width: 350px;
  transition: all 0.3s ease;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);
  flex-shrink: 0;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1) !important;
}

.project-card .v-card__title {
  background-color: rgba(0, 0, 0, 0.02);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: 20px;
}

.project-card .v-card__subtitle {
  padding: 24px 20px 0;
}

.project-card .v-card__text {
  padding: 16px 20px;
  height: 100%;
}

.theme--light .project-card .v-card__text {
  color: rgba(0, 0, 0, 0.7) !important;
}

.theme--dark .project-card .v-card__text {
  color: rgba(255, 255, 255, 0.8) !important;
}

.project-card .v-card__actions {
  padding: 8px 20px 16px;
  background: rgba(0, 0, 0, 0.02);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.h-100 {
  height: 100%;
}

.v-chip {
  font-weight: 500;
}

.v-chip.v-size--small {
  height: 24px;
}

.v-btn.text-none {
  text-transform: none;
  letter-spacing: normal;
}

.theme--dark .project-card {
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.theme--dark .project-card .v-card__title {
  background-color: rgba(255, 255, 255, 0.03);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.theme--dark .project-card .v-card__actions {
  background: rgba(255, 255, 255, 0.03);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
</style> 