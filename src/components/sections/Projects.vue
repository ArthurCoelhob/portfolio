<template>
  <section id="projects" class="projects-section py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <div class="text-center mb-12">
            <h2 class="text-h3 font-weight-bold mb-3">Projetos</h2>
            <div class="divider mx-auto"></div>
          </div>

          <div class="text-center mb-8">
            <v-chip-group
              v-model="selectedCategory"
              active-class="primary--text"
              mandatory
            >
              <v-chip
                v-for="category in categories"
                :key="category"
                :value="category"
                outlined
                class="ma-2"
              >
                {{ category }}
              </v-chip>
            </v-chip-group>
          </div>

          <v-row>
            <v-col
              v-for="(project, index) in filteredProjects"
              :key="index"
              cols="12"
              md="6"
            >
              <v-card class="project-card fill-height">
                <v-img
                  :src="project.image"
                  height="200"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  class="project-image"
                >
                  <v-card-title class="white--text project-title">
                    {{ project.name }}
                  </v-card-title>
                </v-img>

                <v-card-text>
                  <p class="grey--text text--darken-1 mb-4">{{ project.description }}</p>
                  <v-chip-group>
                    <v-chip
                      v-for="(tech, techIndex) in project.technologies"
                      :key="techIndex"
                      small
                      class="mr-2"
                      :color="project.color"
                      outlined
                    >
                      {{ tech }}
                    </v-chip>
                  </v-chip-group>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    v-if="project.demo"
                    :href="project.demo"
                    target="_blank"
                    text
                    color="primary"
                    class="text-none"
                  >
                    <v-icon left>mdi-eye</v-icon>
                    Demo
                  </v-btn>
                  <v-btn
                    v-if="project.github"
                    :href="project.github"
                    target="_blank"
                    text
                    color="secondary"
                    class="text-none"
                  >
                    <v-icon left>mdi-github</v-icon>
                    GitHub
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

<script>
export default {
  name: 'ProjectsSection',
  data: () => ({
    selectedCategory: 'Todos',
    categories: ['Todos', 'Front-end', 'Back-end', 'Full Stack'],
    projects: [
      {
        name: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        image: 'https://via.placeholder.com/600x300',
        category: 'Front-end',
        color: 'primary',
        technologies: ['Vue.js', 'TypeScript', 'Vuetify'],
        demo: '#',
        github: ''
      },
      {
        name: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        image: 'https://via.placeholder.com/600x300',
        category: 'Full Stack',
        color: 'secondary',
        technologies: ['Vue.js', 'PHP', 'MySQL', 'Docker'],
        demo: '#',
        github: '',
      },
      {
        name: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        image: 'https://via.placeholder.com/600x300',
        category: 'Back-end',
        color: 'success',
        technologies: ['PHP', 'MySQL', 'REST', 'Docker'],
        github: '',
      },
      {
        name: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        image: 'https://via.placeholder.com/600x300',
        category: 'Front-end',
        color: 'info',
        technologies: ['Vue.js', 'TypeScript', 'D3.js'],
        demo: '#',
        github: '',
      }
    ]
  }),
  computed: {
    filteredProjects() {
      if (this.selectedCategory === 'Todos') {
        return this.projects;
      }
      return this.projects.filter(project => project.category === this.selectedCategory);
    }
  }
}
</script>

<style scoped>
.projects-section {
  background-color: #ffffff;
}

.divider {
  width: 80px;
  height: 4px;
  background-color: var(--v-primary-base);
  margin-top: 16px;
}

.project-card {
  border-radius: 12px;
  transition: all 0.3s ease;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12) !important;
}

.project-image {
  position: relative;
}

.project-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
  padding: 20px;
}

.v-chip {
  font-weight: 500;
}

@media (max-width: 600px) {
  .project-card {
    margin-bottom: 20px;
  }
}
</style> 