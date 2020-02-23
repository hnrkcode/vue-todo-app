<template>
  <div>
    <h1>Todo</h1>
    <div v-if="this.$store.state.todos">
      <ul>
        <li v-for="todo in this.$store.state.todos" :key="todo.id">
          {{ todo.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("fetchTodos");
  }
};
</script>
