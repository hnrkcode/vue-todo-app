import axios from "axios";

const customAxios = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API
});

export default customAxios;
