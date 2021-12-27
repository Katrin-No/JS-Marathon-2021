<template lang="pug">
  .field
    .row(v-for="row in flipper")
      .square(v-for="icon in row")
        img(:src="icon.src" @click="flip")
        .text.hide(@click="flap" v-html="icon.text")
    
</template>

<script>
import { weatherCards } from "./weatherCards.js";
export default {
  name: "FlipGame",
  data: () => ({
    flipper: weatherCards,
  }),
  methods: {
    flip() {
      console.log("flip", event.target);
      event.target.classList.add("hide");
      event.target.nextSibling.classList.add("show");
    },
    flap() {
      console.log("flap", event.target);
      event.target.classList.remove("show");
      event.target.previousElementSibling.classList.remove("hide");
    },
  },
};
</script>

<style scoped>
.field {
  flex-direction: column;
}

.field,
.row {
  display: flex;
  margin-bottom: 0.5rem;
}

img {
  padding: 0 15px;
}

img,
.text,
.square {
  width: 198px;
  height: 168px;
  margin: 0.5rem 0;
  cursor: pointer;
}

.hide {
  display: none;
}
.show {
  display: block;
}
</style>
