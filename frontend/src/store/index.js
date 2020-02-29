import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    todoCount: state => {
      return state.todos.length;
    },
    todoList: state => {
      return state.todos;
    }
  },
  mutations: {
    createTodo(state, payload) {
      state.todos.push(payload.data);
    },
    deleteTodo(state, payload) {
      for (let i in state.todos) {
        if (state.todos[i].id === payload) {
          state.todos.splice(i, 1);
          break;
        }
      }
    },
    editTodo(state, payload) {
      for (let i in state.todos) {
        if (state.todos[i].id === payload.id) {
          state.todos[i].name = payload.header;
          state.todos[i].text = payload.body;
          break;
        }
      }
    },
    fetchTodos(state, payload) {
      state.todos = payload;
    }
  },
  actions: {
    createTodo(context, payload) {
      axios
        .post("http://127.0.0.1:8000/api/todos/", {
          name: payload.header,
          text: payload.body
        })
        .then(response => {
          context.commit("createTodo", response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteTodo(context, payload) {
      axios
        .delete("http://127.0.0.1:8000/api/todos/" + payload + "/")
        .then(() => {
          context.commit("deleteTodo", payload);
        })
        .catch(error => {
          console.log(error);
        });
    },
    editTodo(context, payload) {
      axios
        .put("http://127.0.0.1:8000/api/todos/" + payload.id + "/", {
          name: payload.header,
          text: payload.body
        })
        .then(() => {
          context.commit("editTodo", payload);
        })
        .catch(error => {
          console.log(error);
        });
    },
    fetchTodos(context) {
      axios
        .get("http://127.0.0.1:8000/api/todos/")
        .then(response => {
          context.commit("fetchTodos", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  modules: {}
});
