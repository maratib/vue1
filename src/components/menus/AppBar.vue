<template>
  <div>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app dark color="#242537">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-img
        class="mx-0"
        src="@/assets/img/haulier-logo.png"
        max-height="50"
        max-width="50"
        contain
      ></v-img>
      <router-link to="/" class="clear">
        <v-toolbar-title v-text="title" class="white--text" />
      </router-link>
      <v-tabs color="primary" :align-with-title="centered" slider-size="4">
        <v-tab to="/" class="white--text">Home</v-tab>
        <v-tab to="/test" class="white--text">Test</v-tab>
        <v-tab to="/slot" class="white--text">Slot</v-tab>
      </v-tabs>
      <v-spacer />
      <!-- <Langs /> -->
      <UserMenu v-if="true" class="mx-3" />
      <!-- <Gdpr /> -->
    </v-app-bar>
  </div>
</template>

<script>
import UserMenu from "@/components/menus/UserMenu";

export default {
  components: {
    UserMenu
  },
  data: () => ({
    clipped: false,
    drawer: false,
    fixed: false,
    items: [
      {
        icon: "mdi-apps",
        title: "Home",
        to: "/"
      },
      {
        icon: "mdi-apps",
        title: "Projects",
        to: "/projects"
      },
      {
        icon: "mdi-apps",
        title: "Suppliers",
        to: "/suppliers"
      },
      {
        icon: "mdi-chart-bubble",
        title: "About",
        to: "/about"
      }
    ],
    miniVariant: false,
    right: true,
    rightDrawer: false,
    title: "HaulierOne",
    centered: true
  })
};
</script>

<style lang="css" scoped>
.clear {
  text-decoration: none;
}
.v-tab-active {
  background: red;
}
</style>
