<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <div class="field">
        <div class="control">
          <input class="input" type="text" v-model="todoHeader" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <textarea class="textarea" v-model="todoBody"></textarea>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="button" type="submit" @click="createTodo()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoHeader: "",
      todoBody: ""
    };
  },
  methods: {
    createTodo() {
      this.$store.dispatch("createTodo", {
        header: this.todoHeader,
        body: this.todoBody
      });
      this.todoHeader = "";
      this.todoBody = "";
    }
  }
};
</script>
