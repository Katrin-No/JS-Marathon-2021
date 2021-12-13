<template lang="pug">
  .header
    .chars
      div(v-for="(char, idx) in chars" :key="idx" :class="char.color"
        draggable="true"
        v-on:dragstart="(event) => dragStart(event)"
        v-on:dragend="dragEnd")
    .steps
      button.btn.btn-purple(@click="getNumber") ?
      .arrow ->
      button.btn.btn-primary {{ number }}
</template>

<script>
export default {
  name: "GameHeader",
  data: () => ({
    chars: [{ color: "blue" }, { color: "purple" }],
    number: "",
  }),
  methods: {
    getNumber() {
      this.number = Math.floor(Math.random() * 6 + 1);
      event.target.classList.toggle("btn-blue");
    },
    // drag&drop: character
    dragStart(event) {
      event.target.classList.add("hold"); // our el-t dissapears, thats why we need delay
      setTimeout(() => event.target.classList.add("hide"), 0); // callback func
      // el-t dissapears only in to-do col
    },
    dragEnd(event) {
      event.target.classList.remove("hold", "hide"); // or ->
      // event.target.className = "item"
    },
  },
};
</script>

<style scoped>
.header,
.steps {
  display: flex;
}

.steps,
.arrow {
  align-self: center;
}

.chars {
  display: flex;
  margin: 1rem;
}
.blue,
.purple {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.btn-purple,
.purple {
  background-color: #ae56ff;
}
.btn-blue,
.blue {
  background-color: #2196f3;
}

.hold {
  border: 5px solid #eee;
  color: #837c7c;
  padding-top: 0.9rem;
}
.hide {
  display: none;
}
</style>
