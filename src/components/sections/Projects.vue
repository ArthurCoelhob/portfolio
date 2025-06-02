<template>
  <section id="projects" class="projects-section py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <div class="text-center mb-12">
            <h2 class="text-h3 font-weight-bold mb-3">Projetos</h2>
            <div class="divider mx-auto"></div>
          </div>

          <v-row>
            <v-col v-for="(project, index) in projects" 
                   :key="index" 
                   cols="12" 
                   md="6" 
                   lg="4">
              <v-card class="project-card h-100" elevation="3">
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
            </v-col>
          </v-row>
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
  private projects: Project[] = [
    {
      title: 'API de Reconhecimento Facial',
      technologies: ['Python', 'FastAPI', 'Docker', 'OpenCV'],
      description: `Vencedor do hackathon interno da Teknisa. Desenvolvimento de uma API robusta para reconhecimento facial 
        utilizando Python e FastAPI, com containerização em Docker. O projeto implementa detecção e comparação 
        de faces em tempo real, com alta performance e escalabilidade.`,
      isHackathonWinner: true
    },
    {
      title: 'MyProjectManager',
      technologies: ['Vue.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
      description: `Plataforma web completa para gerenciamento de projetos e tarefas. 
        Implementada com arquitetura em camadas, permite que usuários criem, 
        editem e removam projetos e suas tarefas associadas.`,
      githubUrl: 'https://github.com/ArthurCoelhob/myProjectManager-web'
    },
    {
      title: 'API de Autenticação JWT',
      technologies: ['Node.js', 'TypeScript', 'JWT', 'PostgreSQL'],
      description: `API de autenticação robusta implementada com JWT (JSON Web Token). 
        Oferece funcionalidades de registro de usuários, login seguro e 
        rotas protegidas com autenticação via token.`,
      githubUrl: 'https://github.com/ArthurCoelhob/api-auth-nodejs'
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

.project-card {
  transition: all 0.3s ease;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.05);
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