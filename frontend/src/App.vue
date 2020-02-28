<template>
  <section class="section">
    <app-todo-create></app-todo-create>
    <app-todo-list></app-todo-list>
  </section>
</template>

<script>
import TodoCreate from "@/components/TodoCreate.vue";
import TodoList from "@/components/TodoList.vue";

export default {
  components: {
    appTodoCreate: TodoCreate,
    appTodoList: TodoList
  }
};
</script>
