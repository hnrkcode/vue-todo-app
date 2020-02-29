<template>
  <div class="columns">
    <div class="column is-one-third is-offset-one-third" v-if="todoCount > 0">
      <article
        class="message"
        v-for="todo in this.$store.state.todos"
        :key="todo.id"
      >
        <div class="message-header">
          <p>{{ todo.name }}</p>
          <todo-buttons
            :id="todo.id"
            :name="todo.name"
            :text="todo.text"
          ></todo-buttons>
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
import TodoButtons from "@/components/TodoButtons.vue";

export default {
  computed: {
    ...mapGetters(["todoCount"])
  },
  components: {
    TodoButtons
  },
  created() {
    this.$store.dispatch("fetchTodos");
  }
};
</script>

<style scoped>
.message {
  border-radius: 6px !important;
}

.message-body {
  background-color: #282828;
}
</style>
