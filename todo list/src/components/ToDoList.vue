<template>
  <div>
    <ul>
      <!-- {{
        tasks
      }}
      <Task /> -->
      <Task
        v-for="task in tasks"
        :key="task.id"
        :id="task.id"
        :title="task.title"
        :completed="task.completed"
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