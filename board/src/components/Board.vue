<template>
  <div>
    <div class="row">
      <div class="row">
        <div v-for="(value, key) in value" v-bind:key="key">
          <div
            class="col-header"
            :class="key.split(' ').join('').toLowerCase()"
          >
            {{ key }}
          </div>
        </div>
      </div>
    </div>

    <div class="row" v-for="rowNum in longestLane() + 1" v-bind:key="rowNum">
      <!-- 3 ph (1 for each colName) in each raw -->
      <div
        class="placeholder"
        v-for="colName in Object.keys(value)"
        v-bind:key="colName"
        @dragover="dragOver"
        @dragenter="dragEnter"
        @dragleave="dragLeave"
        @drop="(event) => dragDrop(event, colName, rowNum - 1)"
      >
        <div
          class="item"
          draggable="true"
          v-if="value[colName][rowNum - 1]"
          v-on:dragstart="(event) => dragStart(event, colName, rowNum - 1)"
          v-on:dragend="dragEnd"
        >
          {{ value[colName][rowNum - 1] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    longestLane() {
      let longest = 0;
      // for (let i = 0; i <= this.value.length; i++) {
      for (let i of Object.keys(this.value)) {
        longest =
          this.value[i].length > longest ? this.value[i].length : longest;
      }
      return longest;
    },

    // drag&drop: task
    dragStart(event, colName, rowIndex) {
      let j = JSON.stringify({ colName, rowIndex });
      event.dataTransfer.setData("text/plain", j); // saves task.id in API
      event.target.classList.add("hold"); // our el-t dissapears, thats why we need delay
      setTimeout(() => event.target.classList.add("hide"), 0); // callback func
      // el-t dissapears only in to-do col
    },
    dragEnd(event) {
      event.target.classList.remove("hold", "hide"); // or ->
      // event.target.className = "item"
    },

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
    dragDrop(event, colName, rowIndex) {
      event.target.classList.remove("hovered");

      // get the draggable element
      const j = JSON.parse(event.dataTransfer.getData("text/plain")); // holt task.id aus API raus
      console.log("salamipizza", j, colName, rowIndex);

      let task = this.value[j.colName][j.rowIndex];
      this.value[j.colName].splice(j.rowIndex, 1);
      this.value[colName].splice(rowIndex, 0, task);
      this.$emit("input", this.value);
    },

    deleteTask(event) {
      const j = JSON.parse(event.dataTransfer.getData("text/plain")); // holt task.id aus API raus
      event.target.classList.remove("hovered");
      this.value[j.colName].splice(j.rowIndex, 1);
    },
  },
};
</script>

