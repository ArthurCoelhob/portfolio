import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#1E88E5',
        secondary: '#5C6BC0',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        background: '#f5f5f5',
        surface: '#ffffff'
      },
      dark: {
        primary: '#90CAF9',
        secondary: '#7986CB',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        background: '#1a1a1a',
        surface: '#2d2d2d'
      }
    }
  }
});
