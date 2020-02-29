<template>
  <div class="columns">
    <div class="column is-one-third is-offset-one-third">
      <div class="field">
        <div class="control has-icons-right">
          <input
            class="input"
            :class="{ 'is-danger': emptyText }"
            ref="text"
            type="text"
            placeholder="Name"
            v-model="todoHeader"
          />
          <span class="icon is-small is-right" v-if="emptyText">
            <font-awesome-icon icon="exclamation-triangle" />
          </span>
        </div>
        <p class="help is-danger" v-if="emptyText">Required field</p>
      </div>
      <div class="field">
        <div class="control has-icons-right">
          <textarea
            class="textarea"
            :class="{ 'is-danger': emptyTextarea }"
            ref="textarea"
            placeholder="Description..."
            v-model="todoBody"
          ></textarea>
          <p class="help is-danger" v-if="emptyTextarea">Required field</p>
          <span class="icon is-small is-right" v-if="emptyTextarea">
            <font-awesome-icon icon="exclamation-triangle" />
          </span>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input
            class="button is-primary is-fullwidth"
            type="submit"
            value="Submit"
            @click="createTodo()"
          />
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
      todoBody: "",
      emptyText: false,
      emptyTextarea: false
    };
  },
  methods: {
    validInput() {
      if (!this.todoHeader || !this.todoBody) {
        if (!this.todoBody) {
          this.emptyTextarea = true;
          this.$refs.textarea.focus();
        } else {
          this.emptyTextarea = false;
        }

        if (!this.todoHeader) {
          this.emptyText = true;
          this.$refs.text.focus();
        } else {
          this.emptyText = false;
        }

        return false;
      }

      return true;
    },
    createTodo() {
      if (this.validInput()) {
        this.$store.dispatch("createTodo", {
          header: this.todoHeader,
          body: this.todoBody
        });

        // Reset values at success.
        this.todoHeader = "";
        this.todoBody = "";
        this.emptyText = false;
        this.emptyTextarea = false;
      }
    }
  }
};
</script>
