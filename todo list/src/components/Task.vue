<template>
  <li>
    <span v-bind:class="{ done: paramTask.completed }">
      <input
        type="checkbox"
        v-on:change="$emit('mark-complete', paramTask.id)"
      />
      <strong>{{ index + 1 }}</strong>
      {{ paramTask.title }}
    </span>
    <button class="remove" v-on:click="$emit('remove-task', paramTask.id)">
      &times;
    </button>
  </li>
</template>

<script>
export default {
  props: {
    paramTask: {
      type: Object,
      required: true,
    },
    index: Number,
  },
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}

input {
  margin-right: 1rem;
}

.remove {
  background: #dbaf6e;
  color: rgb(87, 76, 76);
  border-radius: 50%;
  border: 1.5px solid;
  font-weight: bold;
  cursor: pointer;
}

.done {
  text-decoration: line-through;
}
</style>