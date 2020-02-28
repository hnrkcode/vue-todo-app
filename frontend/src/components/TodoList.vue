<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter" v-if="todoCount > 0">
      <article
        class="message"
        v-for="todo in this.$store.state.todos"
        :key="todo.id"
      >
        <div class="message-header">
          <p>{{ todo.name }}</p>
          <app-todo-delete :id="todo.id"></app-todo-delete>
        </div>
        <div class="message-body">
          <p>{{ todo.text }}</p>
        </div>
      </article>
    </div>
    <div class="column is-half is-offset-one-quarter" v-else>
      <p>Empty {{ todoCount }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoDelete from "@/components/TodoDelete.vue";

export default {
  computed: {
    ...mapGetters(["todoCount"])
  },
  components: {
    appTodoDelete: TodoDelete
  },
  created() {
    this.$store.dispatch("fetchTodos");
  }
};
</script>
