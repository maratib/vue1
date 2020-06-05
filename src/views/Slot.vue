<template>
  <dir>
    <h1>Slots</h1>
    <current-user>
      <template #default="{user, invalid}">
        {{ user.firstName }}
        <br />
        {{invalid}}
      </template>
      <template #other="{ color }">{{ color.green }}</template>
    </current-user>
  </dir>
</template>

<script>
import CurrentUser from "@/components/test/CurrentUser";
export default {
  components: {
    CurrentUser
  },
  data: () => ({})
};
</script>

<style>
</style>