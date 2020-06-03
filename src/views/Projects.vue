<template>
  <div class="ma-5 pa-5">
    <v-row class="elevation-2">
      <v-col cols="12" class="myHeaderBg pa-2">
        <span class="headline white--text pl-2" style="letter-spacing:2px !important;">Projects</span>
        <div class="float-right">
          <v-btn dark class="primary" v-if="!newProject" @click="createNewProject">New Project</v-btn>
          <v-btn dark color="error" v-if="newProject" @click="cancelNewProject">Cancel Project</v-btn>
        </div>
      </v-col>
      <v-col cols="12">
        <ProjectList :is_new="newProject" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProjectList from "@/components/tables/ProjectList";
export default {
  components: {
    ProjectList
  },
  data: () => ({
    newProject: false
  }),
  methods: {
    createNewProject() {
      this.newProject = true;
    },
    cancelNewProject() {
      if (confirm("Are you sure you want to close incomplete project?")) {
        this.newProject = false;
      }
    }
  }
};
</script>

<style scoped>
</style>
