<template lang="pug">
  .container
    FlipGame
    GameHeader
    .container
      img.field(src="@/assets/wetter.jpg")
      .squares
        .row(v-for="row in rows" :key="row")
          .square(v-for="square in squares" :key="square")
            .placeholder(v-for="placeholder in placeholders" :key="placeholder"
              @dragover="dragOver" 
              @dragenter="dragEnter"
              @dragleave="dragLeave"
              @drop="dragDrop")
</template>

<script>
import FlipGame from "@/components/FlipGame.vue";
import GameHeader from "@/components/GameHeader.vue";

export default {
  name: "Chatbox",
  components: {
    FlipGame,
    GameHeader,
  },
  data: () => ({
    rows: [1, 2, 3, 4, 5, 6, 7, 8],
    squares: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    placeholders: [1, 2],
  }),
  methods: {
    // drag&drop: placeholder
    dragOver(event) {
      event.preventDefault(); // el-t doesn't come back in to-do
    },
    dragEnter(event) {
      event.target.classList.add("hovered");
    },
    dragLeave(event) {
      event.target.classList.remove("hovered");
    },
    dragDrop(event) {
      event.target.classList.remove("hovered");
      event.target.append(document.querySelector(".hold"));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  position: relative;
}

.field {
  width: 100%;
}

.squares {
  position: absolute;
  top: 19px;
  left: 73px;
  width: 101%;
  height: 12%;
}

.row {
  /* background-color: rgba(127, 255, 212, 0.507);
  border: 1px solid black; */
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 99%;
}
.square {
  /* background-color: rgba(182, 127, 255, 0.507);
  border: 1px solid black; */
  width: 9%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.placeholder {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 228, 196, 0);
}
.hovered {
  background-color: #604ed3;
  border-radius: 20px;
}
</style>
