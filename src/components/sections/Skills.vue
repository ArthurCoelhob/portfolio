<template>
  <section id="skills" class="skills-section py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <div class="text-center mb-12">
            <h2 class="text-h3 font-weight-bold mb-3">Habilidades</h2>
            <div class="divider mx-auto"></div>
          </div>

          <!-- Categorias de Skills -->
          <v-row>
            <v-col cols="12" md="4" v-for="(category, index) in skillCategories" :key="index">
              <v-card class="skill-category-card fill-height">
                <v-card-title class="d-flex align-center justify-center">
                  <v-icon large :color="category.color" class="mr-3">{{ category.icon }}</v-icon>
                  <span class="text-h5">{{ category.name }}</span>
                </v-card-title>

                <v-card-text>
                  <v-row dense>
                    <v-col cols="6" v-for="(skill, skillIndex) in category.skills" :key="skillIndex">
                      <v-hover v-slot="{ hover }">
                        <v-card
                          class="skill-card ma-2"
                          :elevation="hover ? 8 : 2"
                          :class="{ 'on-hover': hover }"
                        >
                          <v-card-text class="text-center py-4">
                            <v-icon :color="category.color" size="36">{{ skill.icon }}</v-icon>
                            <div class="mt-2 subtitle-2 font-weight-medium">{{ skill.name }}</div>
                          </v-card-text>
                        </v-card>
                      </v-hover>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

          <!-- Outras Tecnologias -->
          <v-row class="mt-8">
            <v-col cols="12">
              <v-card class="tools-card">
                <v-card-text>
                  <h3 class="text-h6 text-center mb-6">Outras Tecnologias e Ferramentas</h3>
                  <v-row justify="center">
                    <v-col cols="auto" v-for="(tool, index) in otherTools" :key="index">
                      <v-hover v-slot="{ hover }">
                        <v-card
                          class="tool-chip ma-2"
                          :elevation="hover ? 4 : 1"
                          :class="{ 'on-hover': hover }"
                        >
                          <v-card-text class="pa-3 d-flex align-center">
                            <v-icon left size="20" :color="tool.color">{{ tool.icon }}</v-icon>
                            <span class="tool-text">{{ tool.name }}</span>
                          </v-card-text>
                        </v-card>
                      </v-hover>
                    </v-col>
                  </v-row>
                </v-card-text>
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

@Component
export default class SkillsSection extends Vue {
  private skillCategories = [
    {
      name: 'Front-end',
      color: 'success',
      icon: 'mdi-monitor-dashboard',
      skills: [
        { name: 'Vue.js', icon: 'mdi-vuejs' },
        { name: 'React', icon: 'mdi-react' },
        { name: 'TypeScript', icon: 'mdi-language-typescript' },
        { name: 'HTML5', icon: 'mdi-language-html5' },
        { name: 'CSS3', icon: 'mdi-language-css3' },
        { name: 'SASS', icon: 'mdi-sass' }
      ]
    },
    {
      name: 'Back-end',
      color: 'secondary',
      icon: 'mdi-code-braces',
      skills: [
        { name: 'PHP', icon: 'mdi-language-php' },
        { name: 'Laravel', icon: 'mdi-laravel' },
        { name: 'Node.js', icon: 'mdi-nodejs' },
        { name: 'Express', icon: 'mdi-application-brackets-outline' },
        { name: 'REST APIs', icon: 'mdi-api' },
        { name: 'SQL', icon: 'mdi-database' }
      ]
    },
    {
      name: 'DevOps & Infra',
      color: 'primary',
      icon: 'mdi-cloud-cog',
      skills: [
        { name: 'Git', icon: 'mdi-git' },
        { name: 'Docker', icon: 'mdi-docker' },
        { name: 'Linux', icon: 'mdi-linux' },
        { name: 'RabbitMQ', icon: 'mdi-rabbit' },
        { name: 'GitHub', icon: 'mdi-github' },
        { name: 'VS Code', icon: 'mdi-microsoft-visual-studio-code' }
      ]
    }
  ];

  private otherTools = [
    { name: 'Postman', icon: 'mdi-application-brackets', color: 'orange' },
    { name: 'Insomnia', icon: 'mdi-cloud-sync', color: 'purple' },
    { name: 'Composer', icon: 'mdi-package-variant', color: 'blue-grey' },
    { name: 'NPM', icon: 'mdi-npm', color: 'red' },
    { name: 'Terminal', icon: 'mdi-console', color: 'grey darken-3' },
    { name: 'Gitlab', icon: 'mdi-gitlab', color: 'blue' }
  ];
}
</script>

<style scoped>
.skills-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

.divider {
  width: 80px;
  height: 4px;
  background-color: var(--v-primary-base);
  margin-top: 16px;
}

.skill-category-card {
  border-radius: 16px;
  transition: all 0.3s ease;
  border: 1px solid #eee;
}

.skill-card {
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.skill-card.on-hover {
  transform: translateY(-4px);
}

.tools-card {
  border-radius: 16px;
  background: linear-gradient(to right, var(--v-primary-lighten-5) 0%, var(--v-secondary-lighten-5) 100%);
  border: none;
}

.tool-chip {
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  background: white !important;
}

.tool-chip.on-hover {
  transform: translateY(-2px);
}

.tool-text {
  font-weight: 500;
  font-size: 0.9rem;
}

@media (max-width: 600px) {
  .skill-category-card {
    margin-bottom: 20px;
  }
}
</style> 