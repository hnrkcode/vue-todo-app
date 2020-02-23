import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: null
  },
  mutations: {
    createTodo(state, payload) {
      state.todos.push(payload.data);
    },
    fetchTodos(state, payload) {
      state.todos = payload;
    }
  },
  actions: {
    createTodo(context, payload) {
      axios
        .post("http://127.0.0.1:8000/api/todos/", {
          name: payload
        })
        .then(response => {
          context.commit("createTodo", response);
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
