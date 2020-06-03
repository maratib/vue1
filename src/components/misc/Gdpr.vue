<template>
  <div v-if="isOpen" class="cookie" style="width: 100%;">
    <v-alert prominent type="info" color="primary" tile elevation="15">
      <v-row align="center">
        <v-col class="grow pl-12">
          <slot name="message" class="caption">
            {{ $t('cookie.cookieMessage') }}
            <nuxt-link
              :to="localePath('/privacy')"
              class="cookie-link"
            >{{ $t('cookie.cookieMessageLink') }}</nuxt-link>
          </slot>
        </v-col>
        <v-col class="shrink d-flex justify-end" cols="12" md="3">
          <v-btn class="ma-2" @click="accept">{{ buttonTextAccept }}</v-btn>
        </v-col>
      </v-row>
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "Gdpr",
  props: {
    buttonTextAccept: {
      type: String,
      default: "Accept"
    },
    message: {
      type: String,
      default:
        " We use cookies to provide our services and for analytics and marketing. To find out more about our cookies, please see our"
    },
    position: {
      type: String,
      default: "top"
    }
  },

  data() {
    return {
      isOpen: false
    };
  },

  computed: {
    containerPostion() {
      return `cookie--${this.position}`;
    }
  },

  created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true;
    }
  },

  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem("GDPR:accepted", true);
      }
    },
    accept() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem("GDPR:accepted", true);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cookie {
  z-index: 111111111;
  position: fixed;
  bottom: -17px;
  border-radius: 0 !important;
  opacity: 0.9;
  .cookie-link {
    color: #fff;
    text-decoration: underline;
    transition: all 0.25s;
    &:hover {
      text-decoration: none;
    }
  }
}
</style>