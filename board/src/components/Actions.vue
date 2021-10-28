<template>
  <div class="row form-control">
    <input
      type="text"
      v-model="title"
      placeholder="New Task"
      @keypress.enter="onSubmit"
    />
  </div>
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

        this.$emit("add-task", this.title); // tells app-component, that we added new task
        this.title = ""; // clears input field after submit
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
