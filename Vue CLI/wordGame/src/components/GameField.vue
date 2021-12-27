<template lang="pug">
  .container
    FlipGame
    GameHeader
    GameBody
      img.field(src="@/assets/wetter.jpg")
</template>

<script>
import FlipGame from "@/components/FlipGame.vue";
import GameHeader from "@/components/GameHeader.vue";
import GameBody from "@/components/GameBody.vue";

export default {
  name: "Chatbox",
  components: {
    FlipGame,
    GameHeader,
    GameBody,
  },
};
</script>
