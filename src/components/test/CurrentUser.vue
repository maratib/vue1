<template>
  <div style="background:red">
    <h3>I'm from Slot</h3>
    <slot :user="user" :invalid="invalid">{{ user.lastName }}</slot>
    <br />
    <slot name="other" :color="color">{{ color.red }}</slot>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      firstName: "Maratib Ali1",
      lastName: "Khan"
    },
    invalid: true,
    color: {
      red: "Red",
      green: "Green"
    }
  })
};
</script>

<style>
</style>