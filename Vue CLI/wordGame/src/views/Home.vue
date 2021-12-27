<template lang="pug">
  .container
    GameHeader
    GameBody
      img.field(src="@/assets/haus.jpg")
</template>

<script>
import GameHeader from "@/components/GameHeader.vue";
import GameBody from "@/components/GameBody.vue";

export default {
  name: "Chatbox",
  components: {
    GameHeader,
    GameBody,
  },
};
</script>
