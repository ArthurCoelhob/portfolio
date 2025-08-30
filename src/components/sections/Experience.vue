<template>
  <section id="experience" class="experience-section py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <div class="text-center mb-12">
            <h2 class="text-h3 font-weight-bold mb-3">Experiência Profissional</h2>
            <div class="divider mx-auto"></div>
          </div>

          <v-timeline align-top dense>
            <v-timeline-item
              v-for="(experience, index) in experiences"
              :key="index"
              :color="experience.color"
              small
              class="mb-6"
            >
              <template v-slot:opposite>
                <div class="period-text">
                  {{ experience.period }}
                </div>
              </template>
              <v-card class="experience-card elevation-2">
                <v-card-title class="text-h6 mb-1">
                  {{ experience.role }}
                  <v-chip
                    small
                    :color="experience.color"
                    text-color="white"
                    class="ml-2"
                  >
                    {{ experience.company }}
                  </v-chip>
                </v-card-title>
                <v-card-subtitle class="pb-2">
                  <span class="period-text">{{ experience.period }}</span>
                </v-card-subtitle>
                <v-card-text>
                  <p class="mb-2 text--secondary">{{ experience.description }}</p>
                  <v-chip-group>
                    <v-chip
                      v-for="(tech, techIndex) in experience.technologies"
                      :key="techIndex"
                      small
                      outlined
                      class="mr-2"
                    >
                      {{ tech }}
                    </v-chip>
                  </v-chip-group>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection',
  data: () => ({
    experiences: [
      {
        role        : 'Desenvolvedor Full Stack',
        company     : 'Teknisa',
        period      : '2022 - Atual',
        color       : 'primary',
        description : 'Desenvolvimento e manutenção de funcionalidades nos sistemas Portal do Gestor, Portal do Funcionário e HCM (Human Capital Management) para clientes do setor DP/administrativo. Criação e implementação de APIs REST utilizando PHP com Doctrine ORM. Desenvolvimento e manutenção de consultas SQL em banco de dados Oracle. Desenvolvimento Front-End com TypeScript, JavaScript, Vue.js e Angular.js. Atuação ativa na condução de reuniões e cerimônias ágeis (Scrum e Kanban), garantindo organização e alinhamento entre equipes.',
        technologies: [
          'Vue.js',
          'TypeScript',
          'JavaScript',
          'PHP',
          'Doctrine ORM',
          'Oracle SQL',
          'REST APIs',
          'Git',
          'Docker',
          'Angular.js',
          'HTML5/CSS3',
          'Vuetify',
          'Metodologias Ágeis'
        ]
      },
      {
        role        : 'Estagiário de Desenvolvimento',
        company     : 'Teknisa',
        period      : '2021 - 2022',
        color       : 'secondary',
        description : 'Desenvolvimento de funcionalidades para o sistema de gestão de processos de uma empresa de tecnologia. Utilizando Vue.js, TypeScript e JavaScript.',
        technologies: [
          'Vue.js',
          'TypeScript',
          'JavaScript',
          'HTML5/CSS3',
          'Git',
          'SQL',
          'Vuetify',
          'Metodologias Ágeis',
          'PHP'
        ]
      }
    ]
  })
}
</script>

<style scoped>
.experience-section {
  background-color: var(--v-background-base);
}

.divider {
  width: 80px;
  height: 4px;
  background-color: var(--v-primary-base);
  margin-top: 16px;
}

.experience-card {
  margin-left: 20px;
  margin-bottom: 24px;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.v-application .experience-card {
  background-color: var(--v-surface-base);
}

.experience-card:hover {
  transform: translateX(8px);
}

.v-timeline::before {
  background: linear-gradient(to bottom, var(--v-primary-base), var(--v-secondary-base));
}

.period-text {
  color: var(--v-secondary-base);
  font-size: 0.875rem;
  font-weight: 500;
}

.v-card-subtitle {
  opacity: 1 !important;
}

@media (max-width: 600px) {
  .experience-card {
    margin-left: 0;
  }
  .period-text {
    font-size: 0.75rem;
  }
}
</style> 