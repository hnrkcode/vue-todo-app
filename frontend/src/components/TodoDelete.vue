<template>
  <button class="delete" aria-label="delete" @click="deleteTodo(id)">
    Delete
  </button>
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
