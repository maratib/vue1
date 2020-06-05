<template>
  <v-app>
    <AppBar />
    <v-content>
      <v-container>
        <Breadcrumb />
        <router-view />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from "@/components/menus/AppBar";
import Gdpr from "@/components/misc/Gdpr";
import Breadcrumb from "@/components/misc/Breadcrumb";
export default {
  name: "App",
  components: {
    AppBar,
    Gdpr,
    Breadcrumb
  },
  data: () => ({
    fixed: true
  })
};
</script>

<style lang="scss">
// .v-application {
//   font-family: "din-2014", sans-serif !important;
//   .title {
//     // To pin point specific classes of some components
//     font-family: "din-2014", sans-serif !important;
//   }
// }
</style>