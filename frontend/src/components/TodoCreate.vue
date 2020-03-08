<template>
  <div class="columns">
    <div
      class="column is-half-tablet is-offset-one-quarter-tablet is-one-third-desktop is-offset-one-third-desktop"
    >
      <div class="field">
        <div class="control has-icons-right">
          <input
            class="input"
            :class="{ 'is-danger': emptyText || tooLongHeader }"
            ref="text"
            type="text"
            placeholder="Name"
            v-model="todoHeader"
            :maxlength="characterLimit.header"
          />
          <span
            class="icon is-small is-right"
            v-if="emptyText || tooLongHeader"
          >
            <font-awesome-icon icon="exclamation-triangle" />
          </span>
        </div>
        <p class="help is-danger" v-if="emptyText">Required field</p>
        <p class="help is-danger" v-if="tooLongHeader || todoLimit.header">
          Too many characters
        </p>
      </div>
      <div class="field">
        <div class="control has-icons-right">
          <textarea
            class="textarea"
            :class="{ 'is-danger': emptyTextarea || tooLongBody }"
            ref="textarea"
            placeholder="Description..."
            v-model="todoBody"
            :maxlength="characterLimit.body"
          ></textarea>
          <p class="help is-danger" v-if="emptyTextarea">Required field</p>
          <p class="help is-danger" v-if="tooLongBody || todoLimit.body">
            Too many characters
          </p>
          <p>{{ characterCount }} / {{ characterLimit.body }}</p>
          <span
            class="icon is-small is-right"
            v-if="emptyTextarea || tooLongBody"
          >
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
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      characterLimit: {
        header: Number(process.env.VUE_APP_HEADER_CHARACTER_LIMIT),
        body: Number(process.env.VUE_APP_BODY_CHARACTER_LIMIT)
      },
      todoHeader: "",
      todoBody: "",
      emptyText: false,
      emptyTextarea: false
    };
  },
  computed: {
    ...mapGetters(["todoLimit"]),
    tooLongHeader() {
      if (this.todoHeader.length <= this.characterLimit.header) {
        return false;
      }
      return true;
    },
    tooLongBody() {
      if (this.todoBody.length <= this.characterLimit.body) {
        return false;
      }
      return true;
    },
    characterCount() {
      return this.todoBody.length;
    }
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
      if (this.validInput() && !this.tooLongHeader && !this.tooLongBody) {
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
