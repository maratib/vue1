<template>
  <v-snackbar v-model="snackbar" :multi-line="multiLine">
    {{ msg }}
    <v-btn color="red" text @click="snackbar = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  data: () => ({
    multiLine: true,
    snackbar: false,
    text: "I'm a multi-line snackbar."
  }),
  props: ["msg", "snakbar"]
};
</script>

<style>
</style>