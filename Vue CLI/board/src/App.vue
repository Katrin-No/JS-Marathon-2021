<template lang="pug">
#app
  h1
    | {{ title }}
  Board(v-model="board")
  Actions(@add-task="addTask")
</template>

<script>
import Board from "./components/Board.vue";
import Actions from "./components/Actions.vue";

export default {
  name: "App",
  data: () => ({
    title: "Manage your tasks",
    placeholder: "New task",
    inputValue: "",

    board: {
      "To Do": ["Task 1", "Vue"],
      "In Progress": ["Task 2"],
      "Done ": [],
    },
  }),
  components: {
    Board,
    Actions,
  },
  methods: {
    addTask(task) {
      console.log("wurst", task);
      this.board["To Do"].push(task); // py append
    },
    // this.setLocalBoard();
    // },
  },
  mounted() {
    // is used to load persisted data
    if (localStorage.getItem("board")) {
      // get JSON value and returns object
      this.board = JSON.parse(localStorage.getItem("board"));
    }
  },
  watch: {
    board(board) {
      console.log("vghfghfghfghfgh", board);
      const parsed = JSON.stringify(board);
      localStorage.setItem("board", parsed);
    },
  },
};
</script>

