<template>
  <v-tabs class="tabs" center-active show-arrows active-class="tb">
    <v-tab class="tab">
      <v-row>
        <v-col cols="12" class="mb-n5">
          <span class="subtitle-1 font-weight-bold black--text">Overview</span>
        </v-col>
        <v-col cols="12">
          <span class="caption">Complete</span>
        </v-col>
      </v-row>
    </v-tab>
    <v-tab class="tab">
      <v-row>
        <v-col cols="12" class="mb-n5">
          <span class="subtitle-1 font-weight-bold black--text">Overview</span>
        </v-col>
        <v-col cols="12">
          <span class="caption">Complete</span>
        </v-col>
      </v-row>
    </v-tab>
    <v-tab class="tab">
      <v-row>
        <v-col cols="12" class="mb-n5">
          <span class="subtitle-1 font-weight-bold black--text">Overview</span>
        </v-col>
        <v-col cols="12">
          <span class="caption">Complete</span>
        </v-col>
      </v-row>
    </v-tab>
  </v-tabs>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$thetransition: all 0.5s cubic-bezier(1, 0.25, 0, 0.75) 0s;

::v-deep .v-item-group {
  height: 200px !important;
}

.tabs {
  .tab {
    background: #eee;
    outline: 3px solid #000;
    clip-path: polygon(7% 49%, 0% 100%, 93% 100%, 100% 49%, 94% 0%, 0% 0%);
    z-index: 1000;
    width: 200px;
    height: 70px !important;
  }
}
::v-deep .v-tabs-slider-wrapper {
  width: 3% !important;
  height: 70px !important;
  top: 0;
  margin-left: 185px !important;
  clip-path: polygon(45% 52%, 0% 100%, 55% 100%, 100% 49%, 54% 0%, 0% 0%);
  transition: $thetransition !important;
}
::v-deep .v-tab {
  align-items: center;
  display: flex;
  flex: 0 1 auto;
  font-size: 0.875rem;
  font-weight: 500;
  justify-content: center;
  letter-spacing: 0.0892857143em;
  line-height: normal;
  min-width: 90px;
  max-width: 360px;
  outline: none;
  padding: 0 36px;
  position: relative;
  text-align: left !important;
  text-decoration: none;
  text-transform: uppercase;
  transition: $thetransition !important;
}
::v-deep .v-tab--active {
  background: rgba(25, 118, 210, 0.3) !important;
  z-index: 1000;
}
</style>