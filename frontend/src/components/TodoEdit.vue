<template>
  <div>
    <span class="icon" @click="activateModal()">
      <font-awesome-icon icon="edit" />
    </span>
    <div class="modal" :class="{ 'is-active': isActive }">
      <div class="modal-background" @click="deactivateModal()"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Edit</p>
        </header>
        <section class="modal-card-body">
          <div class="field">
            <div class="control">
              <input
                class="input"
                :class="{ 'is-danger': emptyText }"
                ref="text"
                type="text"
                :placeholder="name"
                v-model="todoHeader"
              />
            </div>
            <p class="help is-danger" v-if="emptyText">Required field</p>
          </div>
          <div class="field">
            <div class="control">
              <textarea
                class="textarea"
                :class="{ 'is-danger': emptyTextarea }"
                ref="textarea"
                :placeholder="text"
                v-model="todoBody"
              ></textarea>
              <p class="help is-danger" v-if="emptyTextarea">Required field</p>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-primary" @click="editTodo()">
            Save changes
          </button>
          <button class="button" @click="deactivateModal()">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "text"],
  data() {
    return {
      todoHeader: "",
      todoBody: "",
      isActive: false,
      emptyText: false,
      emptyTextarea: false
    };
  },
  methods: {
    deactivateModal() {
      this.todoHeader = "";
      this.todoBody = "";
      this.isActive = false;
      this.emptyText = false;
      this.emptyTextarea = false;
    },
    activateModal() {
      this.isActive = true;
    },
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
    editTodo() {
      const payload = {
        id: this.id,
        header: this.todoHeader,
        body: this.todoBody
      };

      if (this.validInput()) {
        this.$store.dispatch("editTodo", payload);
        this.deactivateModal();
      }
    }
  }
};
</script>

<style scoped>
.modal-card-body {
  background-color: #282828;
}

.modal-card-head,
.modal-card-foot {
  background-color: #282828;
  border: none;
}
</style>
