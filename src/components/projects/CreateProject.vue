<template>
  <div>
    <ValidationObserver v-slot="{ handleSubmit }" ref="form">
      <form @submit.prevent="handleSubmit(post(form))" autocomplete="off">
        <v-stepper v-model="e1" class="mb-5">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">Create Project</v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">Order Details</v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 3" step="3">Order Line</v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 4" step="4">Location</v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 5" step="5">Suggested Routes</v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 6" step="6">Selected Routes</v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="mb-12 pa-3" outlined min-height="200px">
                <v-row>
                  <v-col cols="12">
                    <ValidationProvider
                      name="Name"
                      rules="required|min:10"
                      v-slot="{ errors, valid }"
                    >
                      <v-text-field
                        name="name"
                        v-model="form.name"
                        label="Schedule Name"
                        :counter="255"
                        :error-messages="errors"
                        :success="valid"
                        required
                      ></v-text-field>
                    </ValidationProvider>
                  </v-col>
                  <v-col cols="6">
                    <!-- <v-text-field label="From" readonly prepend-icon="event" :value="form.from"></v-text-field> -->
                    <DatePicker label="From" :form="form" />
                  </v-col>
                  <v-col cols="6">
                    <DatePicker label="To" :form="form" />
                  </v-col>
                </v-row>
              </v-card>

              <v-btn color="primary" @click="setup">Continue</v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card class="mb-12" color="grey lighten-1" height="200px">Step 2</v-card>

              <v-btn color="primary" @click="e1 = 3">Continue</v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card class="mb-12" color="grey lighten-1" height="200px">Step 3</v-card>

              <v-btn color="primary" @click="e1 = 4">Continue</v-btn>
            </v-stepper-content>

            <v-stepper-content step="4">
              <v-card class="mb-12" color="grey lighten-1" height="200px">Step 4</v-card>

              <v-btn color="primary" @click="e1 = 5">Continue</v-btn>
            </v-stepper-content>

            <v-stepper-content step="5">
              <v-card class="mb-12" color="grey lighten-1" height="200px">Step 5</v-card>

              <v-btn color="primary" @click="e1 = 6">Continue</v-btn>
            </v-stepper-content>

            <v-stepper-content step="6">
              <v-card class="mb-12" color="grey lighten-1" height="200px">Step 6</v-card>

              <v-btn color="primary" @click="e1 = 1">Finish</v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import DatePicker from "@/components/forms/DatePicker";
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    DatePicker
  },
  data: () => ({
    e1: 1,
    form: {
      name: "",
      from: "",
      to: ""
    }
  }),
  methods: {
    setup() {
      alert(JSON.stringify(this.form));
      // this.e1 = 2;
    }
  }
};
</script>

<style>
</style>