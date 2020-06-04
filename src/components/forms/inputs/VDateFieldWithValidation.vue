<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="innerDate"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <ValidationProvider :name="$attrs.label" :rules="rules">
        <v-text-field
          v-model="innerDate"
          v-bind="$attrs"
          prepend-icon="event"
          readonly
          v-on="on"
          slot-scope="{errors, valid}"
          :error-messages="errors"
          :success="valid"
        ></v-text-field>
      </ValidationProvider>
    </template>
    <v-date-picker v-model="innerDate" no-title scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(innerDate)">OK</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
  props: {
    rules: {
      type: [Object, String],
      default: ""
    },
    // must be included in props
    value: {
      type: null
    }
  },
  components: {
    ValidationProvider
  },

  watch: {
    innerDate(newValue) {
      this.$emit("input", newValue);
    },
    value(newVal) {
      this.innerDate = newVal;
    }
  },
  data: () => ({
    innerDate: "",
    menu: false
  })
  // created() {
  //   if (!this.value) {
  //     this.innerDate = new Date().toISOString().substr(0, 10);
  //   }
  // }
};
</script>

<style>
</style>