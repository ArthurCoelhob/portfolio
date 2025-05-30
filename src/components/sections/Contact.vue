<template>
  <section id="contact" class="contact-section py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <div class="text-center mb-12">
            <h2 class="text-h3 font-weight-bold mb-3">Contato</h2>
            <div class="divider mx-auto"></div>
          </div>

          <v-row>
            <v-col cols="12" md="5">
              <v-card class="contact-info-card pa-6" flat>
                <h3 class="text-h5 font-weight-bold mb-6">Informações de Contato</h3>
                
                <div class="contact-item d-flex align-center mb-6">
                  <v-avatar color="primary" size="36" class="mr-4">
                    <v-icon dark>mdi-email</v-icon>
                  </v-avatar>
                  <div>
                    <div class="subtitle-1 font-weight-medium">Email</div>
                    <a href="mailto:arthurcoelhoob@gmail.com" class="text-decoration-none grey--text">
                      arthurcoelhoob@gmail.com
                    </a>
                  </div>
                </div>

                <div class="contact-item d-flex align-center mb-6">
                  <v-avatar color="primary" size="36" class="mr-4">
                    <v-icon dark>mdi-map-marker</v-icon>
                  </v-avatar>
                  <div>
                    <div class="subtitle-1 font-weight-medium">Localização</div>
                    <span class="grey--text">Belo Horizonte, Minas Gerais</span>
                  </div>
                </div>

                <div class="social-links mt-8">
                  <h4 class="subtitle-1 font-weight-bold mb-4">Redes Sociais</h4>
                  <v-btn
                    v-for="social in socialLinks"
                    :key="social.name"
                    :href="social.link"
                    target="_blank"
                    icon
                    large
                    :color="social.color"
                    class="mr-4"
                  >
                    <v-icon>{{ social.icon }}</v-icon>
                  </v-btn>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" md="7">
              <v-card class="contact-form-card pa-6">
                <h3 class="text-h5 font-weight-bold mb-6">Envie uma Mensagem</h3>
                
                <v-form ref="form" v-model="valid" @submit.prevent="handleSubmit">
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="form.name"
                        :rules="nameRules"
                        label="Nome"
                        required
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="form.email"
                        :rules="emailRules"
                        label="Email"
                        required
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        v-model="form.subject"
                        label="Assunto"
                        required
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-textarea
                        v-model="form.message"
                        label="Mensagem"
                        required
                        outlined
                        dense
                      ></v-textarea>
                    </v-col>

                    <v-col cols="12" class="text-right">
                      <v-btn
                        color="primary"
                        x-large
                        :loading="loading"
                        type="submit"
                        class="px-8"
                      >
                        Enviar Mensagem
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
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
  name: 'ContactSection',
  data: () => ({
    valid: false,
    loading: false,
    form: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    nameRules: [
      v => !!v || 'Nome é obrigatório',
      v => v.length <= 50 || 'Nome deve ter menos de 50 caracteres'
    ],
    emailRules: [
      v => !!v || 'E-mail é obrigatório',
      v => /.+@.+\..+/.test(v) || 'E-mail deve ser válido'
    ],
    socialLinks: [
      {
        name: 'LinkedIn',
        icon: 'mdi-linkedin',
        link: 'https://www.linkedin.com/in/arthur-coelho-5351441b4/',
        color: '#0077B5'  
      },
      {
        name: 'GitHub',
        icon: 'mdi-github',
        link: 'https://github.com/ArthurCoelhob',
        color: '#333'
      },
    ]
  }),
  methods: {
    async handleSubmit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        // Aqui você implementaria a lógica de envio do formulário
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulação de envio
        this.loading = false;
        // Reset do formulário
        this.$refs.form.reset();
      }
    }
  }
}
</script>

<style scoped>
.contact-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
}

.divider {
  width: 80px;
  height: 4px;
  background-color: var(--v-primary-base);
  margin-top: 16px;
}

.contact-info-card, .contact-form-card {
  border-radius: 12px;
  height: 100%;
  transition: all 0.3s ease;
  border: 1px solid #eee;
}

.contact-info-card:hover, .contact-form-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12) !important;
}

.contact-item {
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);
}

.social-links .v-btn {
  transition: transform 0.3s ease;
}

.social-links .v-btn:hover {
  transform: translateY(-3px);
}

@media (max-width: 960px) {
  .contact-info-card {
    margin-bottom: 30px;
  }
}
</style> 