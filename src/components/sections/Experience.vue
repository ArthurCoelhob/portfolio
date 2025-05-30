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
            >
              <template v-slot:opposite>
                <span class="text-caption grey--text">{{ experience.period }}</span>
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
                <v-card-text>
                  <p class="mb-2 grey--text text--darken-1">{{ experience.description }}</p>
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
        role: 'Desenvolvedor Full Stack',
        company: 'Teknisa',
        period: '2022 - Atual',
        color: 'primary',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        technologies: ['Vue.js', 'TypeScript', 'JavaScript', 'PHP', 'Oracle SQL', 'REST APIs']
      },
      {
        role: 'Estagiário de Programação',
        company: 'Teknisa',
        period: '2021 - 2022',
        color: 'secondary',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        technologies: ['SQL', 'Vue.js', 'TypeScript', 'CSS']
      }
    ]
  })
}
</script>

<style scoped>
.experience-section {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
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

.experience-card:hover {
  transform: translateX(8px);
}

.v-timeline::before {
  background: linear-gradient(to bottom, var(--v-primary-base), var(--v-secondary-base));
}

@media (max-width: 600px) {
  .experience-card {
    margin-left: 0;
  }
}
</style> 