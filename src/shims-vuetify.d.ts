declare module 'vuetify/lib' {
  import 'vuetify/types'
  export * from 'vuetify/types'
}

declare module 'vuetify/lib/framework' {
  import 'vuetify/types'
  export * from 'vuetify/types'
}

// Augmentando o tipo Vue para incluir $vuetify
import Vue from 'vue'
import { Framework } from 'vuetify'

declare module 'vue/types/vue' {
  interface Vue {
    $vuetify: Framework
  }
} 