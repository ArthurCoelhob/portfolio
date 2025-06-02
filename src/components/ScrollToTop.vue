<template>
  <v-fade-transition>
    <v-btn
      v-show="showButton"
      @click="scrollToTop"
      fab
      fixed
      bottom
      right
      color="primary"
      class="mb-12 mr-6"
      elevation="2"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fade-transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ScrollToTop extends Vue {
  private showButton = false;

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  }

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  private handleScroll() {
    this.showButton = window.scrollY > 300;
  }

  private scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
</script>

<style scoped>
.v-btn.v-btn--fixed {
  z-index: 100;
}
</style> 