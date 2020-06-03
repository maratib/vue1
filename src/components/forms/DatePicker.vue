<template>
  <v-menu
    v-model="fromDateMenu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field :label="label" prepend-icon="event" readonly :value="fromDateDisp" v-on="on"></v-text-field>
    </template>
    <v-date-picker
      locale="en-in"
      v-model="fromDateVal"
      no-title
      @input="fromDateMenu = false"
      :min="minDate"
    ></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: ["label"],
  data: () => ({
    fromDateMenu: false,
    fromDateVal: null,
    minDate: "2020-01-05",
    maxDate: "2019-08-30"
  }),
  computed: {
    fromDateDisp() {
      return this.fromDateVal;
    }
  }
};
</script>

<style>
</style>