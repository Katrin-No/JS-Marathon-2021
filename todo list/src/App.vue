<template>
  <div>
    <h1>ToDo App</h1>
    <AddTask @add-task="addTask" />
    <hr />
    <Loader v-if="loading" />
    <ToDoList v-model:paramTasks="tasks" @remove-task="removeTask" />
  </div>
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
    };
  },
  mounted() {
    // when the hole component prepared html and placed it in DOM tree
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3") // gets data from server (first 3)
      .then((response) => response.json())
      .then((json) => {
        this.tasks = json;
        this.loading = false; // after becoming data
      });
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
