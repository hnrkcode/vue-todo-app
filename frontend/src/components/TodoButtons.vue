<template>
  <div>
    <todo-edit :id="id" :name="name" :text="text"></todo-edit>
    <todo-delete :id="id"></todo-delete>
  </div>
</template>

<script>
import TodoDelete from "@/components/TodoDelete.vue";
import TodoEdit from "@/components/TodoEdit.vue";

export default {
  props: ["id", "name", "text"],
  components: {
    TodoDelete,
    TodoEdit
  }
};
</script>

<style scoped>
div {
  display: flex;
}
</style>
