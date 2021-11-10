<template lang="pug">
div
  ul
    Task(
      v-for="(task, i) in paramTasks",
      :paramTask="task",
      :index="i",
      :key="task.id",
      @mark-complete="markComplete",
      @remove-task="removeTask"
    )
</template>

<script>
import Task from "@/components/Task";

export default {
  props: ["paramTasks"], // parameter for components
  components: {
    Task,
  },
  methods: {
    removeTask(id) {
      console.log("hi", id);
      this.$emit("remove-task", id);
    },
    markComplete(id) {
      this.$emit(
        "input",
        this.paramTasks.map((task) => {
          if (task.id == id) {
            task.completed = !task.completed;
          }
          return task;
        })
      );
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>