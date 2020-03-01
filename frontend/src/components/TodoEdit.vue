<template>
  <div>
    <span class="icon" @click="activateModal()">
      <font-awesome-icon icon="edit" />
    </span>
    <transition name="modal">
      <div class="modal" :class="{ 'is-active': isActive }" v-if="isActive">
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
                  ref="text"
                  type="text"
                  :placeholder="name"
                  v-model="todoHeader"
                />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <textarea
                  class="textarea"
                  ref="textarea"
                  :placeholder="text"
                  v-model="todoBody"
                ></textarea>
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
    </transition>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "text"],
  data() {
    return {
      todoHeader: this.text,
      todoBody: this.name,
      isActive: false
    };
  },
  methods: {
    deactivateModal() {
      this.isActive = false;
    },
    activateModal() {
      this.isActive = true;
    },
    editTodo() {
      const payload = {
        id: this.id,
        header: this.todoHeader,
        body: this.todoBody
      };

      this.$store.dispatch("editTodo", payload);
      this.deactivateModal();
    }
  }
};
</script>

<style scoped>
/* Fade in and out the modal */
.modal-enter {
  opacity: 0;
}

.modal-enter-active {
  transition: opacity 0.3s;
}

.modal-leave-active {
  transition: opacity 0.3s;
  opacity: 0;
}

.modal-card-body {
  background-color: #282828;
}

.modal-card-head,
.modal-card-foot {
  background-color: #282828;
  border: none;
}
</style>
