import axios from "axios";

export default axios.create({
  baseURL: "https://project-manager-todo.herokuapp.com/api/v1/",
  responseType: "json"
});