<template>
  <div>
    <v-text-field v-model="innerValue" />
  </div>
</template>

<script>
export default {
  props: ["value"],
  watch: {
    innerValue(newValue) {
      this.$emit("input", newValue);
    }
  },
  data: () => ({
    innerValue: ""
  }),
  methods: {}
};
</script>

<style>
</style>