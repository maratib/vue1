<template>
  <div style="min-height: 22px;" class="mb-5">
    <v-breadcrumbs class="pa-0 ma-0" :items="crumbs">
      <template v-slot:divider>
        <v-icon>mdi-chevron-right</v-icon>
      </template>
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :to="item.path" :disabled="item.disabled">{{ item.name.toUpperCase() }}</v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  computed: {
    crumbs() {
      const crumbs = [];
      let fullPath = this.$route.fullPath;
      if (fullPath !== "/") {
        fullPath = fullPath.split("/");
        // var index = fullPath.indexOf(this.$i18n.locale);
        // if (index !== -1) fullPath.splice(index, 1);

        let currentPath = "/";

        for (let i = 0; i < fullPath.length; i++) {
          let path = fullPath[i];
          currentPath += path || "";
          let disabled = i === fullPath.length - 1 ? true : false;
          let item = {
            path: currentPath,
            name: path || "Home",
            disabled: disabled
          };
          if (path) {
            currentPath += "/";
          }
          crumbs.push(item);
        }
      }

      return crumbs;
    }
  }
};
</script>

<style>
</style>