<template>
  <div>
    <ul>
      <!-- {{
        tasks
      }}
      <Task /> -->
      <Task
        v-for="task in tasks"
        v-bind:task="task"
        :key="task.id"
        v-on:mark-complete="markComplete"
        v-on:remove-task="removeTask"
      />
    </ul>
  </div>
</template>

<script>
import Task from "@/components/Task";

export default {
  props: ["tasks"], // property from data
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
        this.tasks.map((task) => {
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