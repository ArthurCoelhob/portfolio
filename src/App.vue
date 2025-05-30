<template>
  <v-app :dark="isDark">
    <v-app-bar app elevation="1" :color="isDark ? 'grey darken-4' : 'white'" height="70">
      <v-container class="py-0 fill-height">
        <v-toolbar-title class="font-weight-bold primary--text">AC.</v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
          <v-btn text v-for="item in menuItems" :key="item.title" :href="item.href" class="text-capitalize font-weight-regular">
            {{ item.title }}
          </v-btn>
        </div>
        <v-btn icon @click="toggleTheme" class="ml-2">
          <v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
        </v-btn>
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary right>
      <v-list nav>
        <v-list-item v-for="item in menuItems" :key="item.title" :href="item.href" link>
          <v-list-item-content>
            <v-list-item-title class="text-subtitle-1">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import HeroSection from './components/sections/Hero.vue';
import AboutSection from './components/sections/About.vue';
import ExperienceSection from './components/sections/Experience.vue';
import EducationSection from './components/sections/Education.vue';
import SkillsSection from './components/sections/Skills.vue';
import ProjectsSection from './components/sections/Projects.vue';
import ContactSection from './components/sections/Contact.vue';

interface MenuItem {
  title: string;
  href: string;
}

@Component({
  components: {
    HeroSection,
    AboutSection,
    ExperienceSection,
    EducationSection,
    SkillsSection,
    ProjectsSection,
    ContactSection,
  },
})
export default class App extends Vue {
  private drawer = false;
  private isDark = false;
  private menuItems: MenuItem[] = [
    { title: 'Home', href: '#home' },
    { title: 'Sobre', href: '#about' },
    { title: 'Experiência', href: '#experience' },
    { title: 'Formação', href: '#education' },
    { title: 'Habilidades', href: '#skills' },
    { title: 'Projetos', href: '#projects' },
    { title: 'Contato', href: '#contact' },
  ];

  created(): void {
    const savedTheme = localStorage.getItem('isDark');
    if (savedTheme) {
      this.isDark = JSON.parse(savedTheme);
    } else {
      this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    localStorage.setItem('isDark', JSON.stringify(this.isDark));
  }

  @Watch('isDark', { immediate: true })
  onThemeChange(val: boolean): void {
    this.$vuetify.theme.dark = val;
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

.hero-section {
  min-height: calc(100vh - 70px);
  background: linear-gradient(to bottom right, var(--v-background-base) 0%, var(--v-surface-base) 100%);
  position: relative;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 1px 1px, var(--v-secondary-lighten5) 1px, transparent 0);
  background-size: 40px 40px;
  opacity: 0.4;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.theme--dark .v-card {
  background-color: #1E1E1E !important;
}

.theme--dark .contact-section,
.theme--dark .skills-section,
.theme--dark .projects-section {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
}
</style>
