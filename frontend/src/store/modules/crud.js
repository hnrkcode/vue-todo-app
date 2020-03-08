import axios from "@/http/custom-axios";

const state = {
  todos: [],
  limit: {
    header: false,
    body: false
  }
};

const getters = {
  todoCount: state => {
    return state.todos.length;
  },
  todoList: state => {
    return state.todos;
  },
  todoLimit: state => {
    return state.limit;
  }
};

const mutations = {
  createTodo(state, payload) {
    // Add new data at the beginning of the array.
    state.todos.splice(0, 0, payload.data);
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
  },
  setLimitStatus(state, payload) {
    state.limit.header = payload.name;
    state.limit.body = payload.text;
  }
};

const actions = {
  createTodo(context, payload) {
    axios
      .post("/api/todos/", {
        name: payload.header,
        text: payload.body
      })
      .then(response => {
        context.commit("createTodo", response);
      })
      .then(() => {
        // Reset limit status.
        context.commit("setLimitStatus", {
          header: false,
          body: false
        });
      })
      .catch(({ response: { data } }) => {
        context.commit("setLimitStatus", {
          name: data.name ? true : false,
          text: data.text ? true : false
        });
      });
  },
  deleteTodo(context, payload) {
    axios
      .delete("/api/todos/" + payload + "/")
      .then(() => {
        context.commit("deleteTodo", payload);
      })
      .catch(error => {
        console.log(error);
      });
  },
  editTodo(context, payload) {
    axios
      .put("/api/todos/" + payload.id + "/", {
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
      .get("/api/todos/")
      .then(response => {
        context.commit("fetchTodos", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
