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
      <v-text-field v-model="innerDate" v-bind="$attrs" prepend-icon="event" readonly v-on="on"></v-text-field>
    </template>
    <v-date-picker v-model="innerDate" no-title scrollable>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
      <v-btn text color="primary" @click="$refs.menu.save(innerDate)">OK</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
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
  watch: {
    innerDate(newValue) {
      this.$emit("input", newValue);
    }
  },
  data: () => ({
    innerDate: new Date().toISOString().substr(0, 10),
    menu: false
  }),
  created() {
    alert("im created");
  }
};
</script>

<style>
</style>