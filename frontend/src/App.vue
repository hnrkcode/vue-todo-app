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

<style>
html {
  min-height: 100%;
  background-color: #1c1c1c !important;
}

p {
  color: #eeeeee !important;
}

.title {
  color: #eeeeee !important;
}

.control > .input,
.control > .textarea {
  color: #eeeeee !important;
  background-color: #333333 !important;
  border-color: #333333 !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5) !important;
}

.textarea {
  resize: none !important;
}

/* Chrome/Opera/Safari */
::-webkit-input-placeholder {
  color: #999 !important;
}
/* Firefox 19+ */
::-moz-placeholder {
  color: #999 !important;
}
/* IE 10+ */
:-ms-input-placeholder {
  color: #999 !important;
}
/* Firefox 18- */
:-moz-placeholder {
  color: #999 !important;
}

/* Remove dotted outline in buttons in Firefox */
:focus {
  outline: none;
}
::-moz-focus-inner {
  border: 0;
}
</style>
