<template>
  <button @click="deleteTodo(id)">Delete {{ id }}</button>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    deleteTodo(id) {
      this.$store.dispatch("deleteTodo", id);
    }
  }
};
</script>
