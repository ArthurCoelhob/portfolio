<template>
  <section id="about" class="about-section py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <div class="text-center mb-12">
            <h2 class="text-h3 font-weight-bold mb-3">Sobre Mim</h2>
            <div class="divider mx-auto"></div>
          </div>
          
          <v-card elevation="0" color="transparent">
            <v-row align="center">
              <v-col cols="12" md="5" class="text-center">
                <div class="profile-image-wrapper">
                  <v-avatar size="280" class="profile-image">
                    <v-img
                      src="@/assets/images/Frieren.jpeg"
                      alt="Frieren"
                    ></v-img>
                  </v-avatar>
                  <div class="experience-badge">
                    <span class="text-h5 font-weight-bold white--text">{{ experienceYears }}+</span>
                    <span class="caption white--text">Anos de<br>Experiência</span>
                  </div>
                </div>
              </v-col>
              
              <v-col cols="12" md="7">
                <div class="about-content">
                  <h3 class="text-h5 font-weight-bold mb-4">
                    {{ role }}
                  </h3>
                  <p class="text-body-1 grey--text text--darken-1 mb-6" v-html="description"></p>
                  <p class="text-body-1 grey--text text--darken-1 mb-8" v-html="additionalInfo"></p>
                  
                  <v-btn
                    color="primary"
                    x-large
                    outlined
                    :href="cvLink"
                    target="_blank"
                    class="mt-6 mb-6 mr-6 text-capitalize px-8"
                  >
                    Download CV
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class AboutSection extends Vue {
  private role = 'Desenvolvedor Full Stack';
  private experienceYears = 4;
  private cvLink = '#';

  private description = `
    Lorem ipsum dolor sit amet consectetur adipisicing  
    Lorem ipsum dolor sit amet consectetur adipisicing
    Lorem ipsum dolor sit amet consectetur adipisicing
    Lorem ipsum dolor sit amet consectetur adipisicing
    Lorem ipsum dolor sit amet consectetur adipisicing
  `;

  private additionalInfo = `
    Lorem ipsum dolor sit amet consectetur adipisicing  
    Lorem ipsum dolor sit amet consectetur adipisicing
    Lorem ipsum dolor sit amet consectetur adipisicing
    Lorem ipsum dolor sit amet consectetur adipisicing
    Lorem ipsum dolor sit amet consectetur adipisicing
  `;
}
</script>

<style scoped>
.about-section {
  background-color: #f8f9fa;
  position: relative;
}

.divider {
  width: 80px;
  height: 4px;
  background-color: var(--v-primary-base);
  margin-top: 16px;
}

.profile-image-wrapper {
  position: relative;
  display: inline-block;
}

.profile-image {
  border: 8px solid white;
  box-shadow: 0 0 25px rgba(0,0,0,0.08);
}

.experience-badge {
  position: absolute;
  bottom: 0;
  right: 0;
  background: var(--v-primary-base);
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.stat-item {
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.04);
  transition: transform 0.3s ease;
}

.stat-item:hover {
  transform: translateY(-5px);
}

.about-content {
  padding: 20px;
}

@media (max-width: 960px) {
  .profile-image-wrapper {
    margin-bottom: 40px;
  }
}
</style> 
