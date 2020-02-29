<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <h1 class="title has-text-centered">VUE TODO APP</h1>
      </div>
    </div>
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
