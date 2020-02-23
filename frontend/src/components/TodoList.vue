<template>
  <div>
    <h1>Todo</h1>
    <div v-if="this.$store.state.todos">
      <ul>
        <li v-for="todo in this.$store.state.todos" :key="todo.id">
          {{ todo.id }}. {{ todo.name }}
          <app-todo-delete :id="todo.id"></app-todo-delete>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TodoDelete from "@/components/TodoDelete.vue";

export default {
  components: {
    appTodoDelete: TodoDelete
  },
  created() {
    this.$store.dispatch("fetchTodos");
  }
};
</script>
