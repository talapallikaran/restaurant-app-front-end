import axios from "axios";
import history from "../utils/history"

//create axios for server call and headers
const instance = axios.create({
  baseURL: "http://localhost:8080",
});

// Interceptor for GET
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Interceptor for POST
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let response = error.response;
    if (response.status === 403) {
      history.go("/restaurant");
      localStorage.removeItem("user");
      alert("Your session is expired please Login");

      // auto logout 403 Forbidden response returned from api
    }
    // if (!(response && response.data && response.data.data && response.data.data.isSocial)) {
    //   openNotificationWithIcon('error', ErrorMessages(response.data.message));
    // }

    return Promise.reject(error);
  }
);

export default instance;
