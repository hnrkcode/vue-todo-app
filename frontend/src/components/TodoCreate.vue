<template>
  <div>
    <h1>Create todo</h1>
    <form @submit.prevent="createTodo()">
      <input type="text" v-model="todo" />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: ""
    };
  },
  methods: {
    createTodo() {
      this.$store.dispatch("createTodo", this.todo);
      this.todo = "";
    }
  }
};
</script>
