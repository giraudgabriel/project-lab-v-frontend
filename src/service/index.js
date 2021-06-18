import axios from "axios";
import store from "~/store/index";

let baseAPI = axios.create();

baseAPI.interceptors.request.use(
  function handleRequest(config) {
    const { token } = store.getState().user;
    config.baseURL = "https://8080-gray-angelfish-r7tgf9j7.ws-us09.gitpod.io/";
    if (token) config.headers["Authorization"] = "Bearer " + token;
    return config;
  },
  function handleError(error) {
    return Promise.reject(error);
  }
);

baseAPI.interceptors.response.use(
  function handleResponse(response) {
    return response;
  },
  function handleError(error) {
    if (error && error?.response?.data?.detail) {
      alert("❌ " + error.response.data.detail);
    }
    if (error && error.response) {
      switch (error.response.status) {
        case 401:
          alert("❌ Você não possui permissão para acessar.");
          break;
        case 403:
          alert("❌ Usuário ou senha incorretos!");
          break;
        default:
          alert("Um erro inesperado aconteceu!");
          break;
      }
    } else {
      alert(error);
    }

    return Promise.reject(error);
  }
);

export default baseAPI;
