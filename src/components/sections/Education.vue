<template>
  <section id="education" class="education-section py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <div class="text-center mb-12">
            <h2 class="text-h3 font-weight-bold mb-3">Formação Acadêmica</h2>
            <div class="divider mx-auto"></div>
          </div>

          <v-row>
            <v-col
              v-for="(education, index) in educations"
              :key="index"
              cols="12"
              md="6"
            >
              <v-card class="education-card fill-height">
                <v-card-text>
                  <div class="d-flex align-center mb-4">
                    <v-avatar
                      size="50"
                      :color="education.color"
                      class="white--text font-weight-bold"
                    >
                      {{ education.institution.charAt(0) }}
                    </v-avatar>
                    <div class="ml-4">
                      <div class="text-h6 font-weight-bold">{{ education.institution }}</div>
                      <div class="subtitle-1 text--secondary">{{ education.period }}</div>
                    </div>
                  </div>

                  <h3 class="text-h6 mb-3">{{ education.degree }}</h3>
                  <p class="text--secondary">{{ education.description }}</p>

                  <v-chip-group class="mt-4">
                    <v-chip
                      v-for="(status, statusIndex) in education.status"
                      :key="statusIndex"
                      small
                      :color="education.color"
                      text-color="white"
                      class="mr-2"
                    >
                      {{ status }}
                    </v-chip>
                  </v-chip-group>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'EducationSection',
  data: () => ({
    educations: [
      {
        institution: 'PUC Minas',
        degree: 'Pós-graduação em Engenharia de Software',
        period: 'abril de 2023 - Atual',
        color: 'primary',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        status: ['Incompleto']
      },
      {
        institution: 'Anhanguera Educacional',
        degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
        period: 'dezembro de 2021',
        color: 'secondary',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        status: ['Completo']
      }
    ]
  })
}
</script>

<style scoped>
.education-section {
  background-color: var(--v-background-base);
}

.divider {
  width: 80px;
  height: 4px;
  background-color: var(--v-primary-base);
  margin-top: 16px;
}

.education-card {
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid var(--v-border-base);
}

.v-application .education-card {
  background-color: var(--v-surface-base);
}

.education-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12) !important;
}

.v-chip {
  font-weight: 500;
}

@media (max-width: 600px) {
  .education-card {
    margin-bottom: 20px;
  }
}
</style> 