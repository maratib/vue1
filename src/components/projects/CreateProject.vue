<template>
  <div>
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
          <ValidationObserver tag="form" ref="obs1" v-slot="{ invalid }">
            <v-card class="mb-12 pa-3" outlined min-height="200px">
              <v-row>
                <v-col cols="12">
                  <v-text-field-with-validation
                    rules="required|min:10|max:100"
                    v-model="form.name"
                    :counter="100"
                    label="Plan Name"
                  />
                </v-col>
                <v-col cols="6">
                  <!-- <v-text-field label="From" readonly prepend-icon="event" :value="form.from"></v-text-field> -->
                  <v-date-field-with-validation
                    rules="required|validDate"
                    v-model="form.from"
                    label="From"
                  />
                </v-col>
                <v-col cols="6">
                  <v-date-field-with-validation
                    rules="required|validDate"
                    v-model="form.to"
                    label="To"
                  />
                </v-col>
              </v-row>
            </v-card>

            <v-btn color="primary" @click="setup" :disabled="invalid">Continue</v-btn>
          </ValidationObserver>
        </v-stepper-content>

        <v-stepper-content step="2">
          <ValidationObserver tag="form" ref="obs2" v-slot="{ invalid }">
            <v-card class="mb-12 pa-3" outlined min-height="200px">
              <v-row>
                <v-col cols="12">
                  <v-text-field-with-validation
                    rules="required|min:10|max:100"
                    v-model="form.test1"
                    :counter="100"
                    label="Search Locations"
                  />
                </v-col>
                <v-col cols="4">
                  <!-- <v-text-field label="From" readonly prepend-icon="event" :value="form.from"></v-text-field> -->
                  <v-text-field-with-validation
                    rules="required|integer|min_value:1|max_value:100"
                    v-model="form.test2"
                    label="Number of Trucks"
                  />
                </v-col>
                <v-col cols="4">
                  <v-text-field-with-validation
                    rules="required|integer|min_value:10|max_value:30"
                    v-model="form.test3"
                    label="Truck Capacity "
                  />
                </v-col>
                <v-col cols="4">
                  <v-text-field-with-validation
                    rules="required|integer|min_value:1|max_value:100"
                    v-model="form.test4"
                    label="Number of Pallets"
                  />
                </v-col>
              </v-row>
            </v-card>

            <v-btn color="primary" @click="orderDetails" :disabled="invalid">Continue</v-btn>
          </ValidationObserver>
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
  </div>
</template>

<script>
import { ValidationObserver, validate } from "vee-validate";
import VTextFieldWithValidation from "@/components/forms/inputs/VTextFieldWithValidation";
import VDateFieldWithValidation from "@/components/forms/inputs/VDateFieldWithValidation";

export default {
  components: {
    ValidationObserver,
    VTextFieldWithValidation,
    VDateFieldWithValidation
  },
  computed: {},
  data: () => ({
    e1: 1,
    isMounted: false,
    form: {
      name: "",
      from: "",
      to: "",
      test1: "",
      test2: "",
      test3: "",
      test4: ""
    }
  }),
  methods: {
    async setup() {
      let isValid = await this.$refs.obs1.validate();
      // alert(isValid);
      if (isValid) {
        this.e1 = 2;
      }
    },
    async orderDetails() {
      let isValid = await this.$refs.obs2.validate();
      // alert(isValid);
      if (isValid) {
        this.e1 = 3;
      }
    }
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style>
</style>