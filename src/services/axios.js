import axios from "axios";

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
    // if (!(response && response.data && response.data.data && response.data.data.isSocial)) {
    //   openNotificationWithIcon('error', ErrorMessages(response.data.message));
    // }

    return Promise.reject(error);
  }
);

export default instance;
