<template>
  <v-card style="background: #f8f8f8">
    <v-tabs background-color="blue-grey darken-1" height="4em" center-active dark>
      <v-tab :to="localePath('/projects')">
        <v-row>
          <v-col cols="12" class="mb-n5">
            <span class="tab-title font-weight-bold">Overview</span>
          </v-col>
          <v-col cols="12">
            <span class="overline">Complete</span>
          </v-col>
        </v-row>
      </v-tab>
      <v-tab :to="localePath('/projects/requirements')">
        <v-row>
          <v-col cols="12" class="mb-n5">
            <span class="tab-title font-weight-bold">Requirements</span>
          </v-col>
          <v-col cols="12">
            <span class="overline">Complete</span>
          </v-col>
        </v-row>
      </v-tab>
      <v-tab :to="localePath('/projects/intelligence')">
        <v-row>
          <v-col cols="12" class="mb-n5">
            <span class="tab-title font-weight-bold">Intelligence</span>
          </v-col>
          <v-col cols="12">
            <span class="overline">In Progress</span>
          </v-col>
        </v-row>
      </v-tab>
      <v-tab :to="localePath('/projects/rfq')">
        <v-row>
          <v-col cols="12" class="mb-n5">
            <span class="tab-title font-weight-bold">RFQ</span>
          </v-col>
          <v-col cols="12">
            <span class="overline">To do</span>
          </v-col>
        </v-row>
      </v-tab>
      <v-tab :to="localePath('/projects/evaluate')">
        <v-row>
          <v-col cols="12" class="mb-n5">
            <span class="tab-title font-weight-bold">Evaluate</span>
          </v-col>
          <v-col cols="12">
            <span class="overline">To do</span>
          </v-col>
        </v-row>
      </v-tab>
      <v-tab :to="localePath('/projects/negotiate')">
        <v-row>
          <v-col cols="12" class="mb-n5">
            <span class="tab-title font-weight-bold">Negotiate</span>
          </v-col>
          <v-col cols="12">
            <span class="overline">To do</span>
          </v-col>
        </v-row>
      </v-tab>
      <v-tab :to="localePath('/projects/award')">
        <v-row>
          <v-col cols="12" class="mb-n5">
            <span class="tab-title font-weight-bold">Award</span>
          </v-col>
          <v-col cols="12">
            <span class="overline">To do</span>
          </v-col>
        </v-row>
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
</style>