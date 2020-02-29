<template>
  <span class="icon" @click="deleteTodo(id)">
    <font-awesome-icon icon="trash-alt" />
  </span>
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
