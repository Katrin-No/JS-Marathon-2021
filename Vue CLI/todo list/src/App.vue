<template lang="pug">
div
  h1 ToDo App
  AddTask(@add-task="addTask")
  select(v-model="filter")
    option(value="all") All
    option(value="completed") Completed
    option(value="not completed") Not completed
  hr
  Loader(v-if="loading")
  ToDoList(v-model:paramTasks="filteredTasks", @remove-task="removeTask")
  p(v-if="filteredTasks.length === 0") No tasks
</template>

<script>
import ToDoList from "@/components/ToDoList";
import AddTask from "@/components/AddTask";
import Loader from "@/components/Loader";

export default {
  name: "App",
  data() {
    return {
      tasks: [
        { id: 1, title: "Brot kaufen", completed: false },
        { id: 2, title: "Butter kaufen", completed: false },
      ],
      loading: true, // before becoming data
      filter: "all",
    };
  },
  mounted() {
    // when the hole component prepared html and placed it in DOM tree
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10") // gets data from server (first 10)
      .then((response) => response.json())
      .then((json) => {
        this.tasks = json;
        this.loading = false; // after becoming data
      });
  },
  computed: {
    filteredTasks() {
      if (this.filter === "completed") {
        return this.tasks.filter((t) => t.completed);
      }
      if (this.filter === "not completed") {
        return this.tasks.filter((t) => !t.completed);
      }
      return this.tasks;
    },
  },
  methods: {
    removeTask(id) {
      // this.tasks = this.tasks.splice(id, 1);
      this.tasks = this.tasks.filter((t) => t.id !== id);
    },
    addTask(task) {
      this.tasks.push(task);
    },
  },
  components: {
    ToDoList,
    AddTask,
    Loader,
  },
};
</script>

<style>
html {
  background: #8cc3a8;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
