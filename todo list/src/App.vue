<template>
  <h1>ToDo App</h1>
  <hr />
  <ToDoList v-bind:tasks="tasks" />
</template>

<script>
import ToDoList from "@/components/ToDoList";
export default {
  name: "App",
  data() {
    return {
      tasks: [
        { id: 1, title: "Brot kaufen", completed: true },
        { id: 2, title: "Butter kaufen", completed: false },
      ],
    };
  },
  components: {
    ToDoList,
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
