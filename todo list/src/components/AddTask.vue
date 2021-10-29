<template lang="pug">
form(@submit.prevent="onSubmit") 
  // to not reload the page
  input(type="text", v-model="title")
  button(type="submit") Add
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      console.log("submit", this.title);
      if (this.title.trim()) {
        // if not empty
        const newTask = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };
        this.$emit("add-task", newTask); // tells app-component, that we added new task
        this.title = ""; // clears input field after submit
      }
    },
  },
};
</script>


<style scoped>
form {
  display: flex;
}

input {
  width: 400px;
}
</style>