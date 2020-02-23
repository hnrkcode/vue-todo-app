<template>
  <div class="home">
    <h1>Home</h1>
    <app-todo-create></app-todo-create>
    <app-todo-list></app-todo-list>
  </div>
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
