<template>
  <div class="grey darken-1 empty-layout">
    <router-view />
  </div>
</template>

<script>
import messages from "@/utils/messages";
export default {
  computed: {
    error() {
      // access to getter
      return this.$store.getters.error;
    },
  },
  watch: {
    error(fbError) {
      console.log("show me", fbError);
      this.$error(messages[fbError.code] || "Something went wrong :C");
    },
  },
};
</script>