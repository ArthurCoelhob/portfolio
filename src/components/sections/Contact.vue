<template>
  <section id="contact" class="contact-section py-16">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10">
          <div class="text-center mb-12">
            <h2 class="text-h3 font-weight-bold mb-3">Contato</h2>
            <div class="divider mx-auto"></div>
          </div>

          <v-row justify="center">
            <v-col cols="12" md="8">
              <v-card class="contact-card pa-6" elevation="3">
                <v-form ref="form" v-model="isFormValid" @submit.prevent="handleSubmit">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="formData.name"
                        :rules="nameRules"
                        label="Nome"
                        required
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="formData.email"
                        :rules="emailRules"
                        label="Email"
                        required
                        outlined
                        dense
                        type="email"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        v-model="formData.subject"
                        :rules="subjectRules"
                        label="Assunto"
                        required
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-textarea
                        v-model="formData.message"
                        :rules="messageRules"
                        label="Mensagem"
                        required
                        outlined
                        dense
                        auto-grow
                        rows="4"
                      ></v-textarea>
                    </v-col>

                    <v-col cols="12" class="text-center">
                      <v-btn
                        type="submit"
                        color="primary"
                        x-large
                        :loading="isLoading"
                        :disabled="!isFormValid || isLoading"
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

    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="6000"
      top
    >
      {{ snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="snackbar.show = false"
        >
          Fechar
        </v-btn>
      </template>
    </v-snackbar>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '@/config/emailjs';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Snackbar {
  show: boolean;
  text: string;
  color: string;
}

@Component
export default class ContactSection extends Vue {
  private formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  private isFormValid = false;
  private isLoading = false;

  private snackbar: Snackbar = {
    show: false,
    text: '',
    color: 'success'
  };

  private nameRules = [
    (v: string) => !!v || 'Nome é obrigatório',
    (v: string) => v.length >= 3 || 'Nome deve ter pelo menos 3 caracteres'
  ];

  private emailRules = [
    (v: string) => !!v || 'Email é obrigatório',
    (v: string) => /.+@.+\..+/.test(v) || 'Email deve ser válido'
  ];

  private subjectRules = [
    (v: string) => !!v || 'Assunto é obrigatório',
    (v: string) => v.length >= 5 || 'Assunto deve ter pelo menos 5 caracteres'
  ];

  private messageRules = [
    (v: string) => !!v || 'Mensagem é obrigatória',
    (v: string) => v.length >= 10 || 'Mensagem deve ter pelo menos 10 caracteres'
  ];

  created() {
    if (emailjsConfig.publicKey) {
      emailjs.init(emailjsConfig.publicKey);
    }
  }

  private showSnackbar(text: string, color: string = 'success'): void {
    this.snackbar = {
      show: true,
      text,
      color
    };
  }

  private async handleSubmit(): Promise<void> {
    if (!(this.$refs.form as any).validate()) return;

    this.isLoading = true;

    try {
      const templateParams = {
        from_name: this.formData.name,
        from_email: this.formData.email,
        subject: this.formData.subject,
        message: this.formData.message,
        to_name: 'Arthur',
      };

      if (!emailjsConfig.serviceId || !emailjsConfig.templateId) {
        throw new Error('EmailJS configuration is missing');
      }

      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams
      );

      this.showSnackbar('Mensagem enviada com sucesso!');
      (this.$refs.form as any).reset();
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      this.showSnackbar('Erro ao enviar mensagem. Tente novamente.', 'error');
    } finally {
      this.isLoading = false;
    }
  }
}
</script>

<style scoped>
.contact-section {
  background-color: var(--v-background-base);
}

.divider {
  width: 80px;
  height: 4px;
  background-color: var(--v-primary-base);
  margin-top: 16px;
}

.contact-card {
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
}
</style> 