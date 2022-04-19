import instance from "./axios";

// Fetching data from API
export async function fetchUserData(parameters) {
  // You can manage manipulation of the parameters here to make the API call specific
  // e.g. you can give condition based on which type of user you want, here

  // When parameter is needed
  // If there is sorting, pagination and search kind of thing, the parameter will be there.
  // const parameters = {
  //  userId      : 2,
  //  sort        : 'asc',
  //  per_page    : 100
  // }
  // return axios.post("/userdata/fetch/", parameters);

  // When parameter is not needed
  // If you are calling all data you may not need the parameter

  try {
    const response = await instance.get("/users", {});
    return response;
  } catch (error) {
    return false;
  }
  // return axios.get("/users");
  // return axios.get(`/users/${parameters}`);
}

// Creating data using API
export async function fetchUser(parameters) {
  // Parameters may look like below
  // parameters = 10
  try {
    const response = await instance.post(`/users`, parameters);
    return response;
  } catch (error) {
    return error.response;
  }
  // return axios.post(`/users/add`);
}

export async function fetchOTP(parameters) {
  try {
    const response = await instance.post(`/otp`, parameters);
    return response;
  } catch (error) {
    return error.response;
  }
}
// Updating data using API
export async function updateUserData(parameters) {
  // Parameters may look like below
  // const parameters = {
  //  password      : 'newPassword'
  // }
  try {
    const response = await instance.put("", parameters, {});
    return response;
  } catch (error) {
    return false;
  }
  // return axios.put("/userdata/update", parameters);
}

// Updating data using API
export async function deleteUserData(parameters) {
  // Parameters may look like below
  // const parameters = {
  //  userId      : 2,
  // }
  try {
    const response = await instance.delete("", parameters, {});
    return response;
  } catch (error) {
    return false;
  }
  // return axios.delete("/userdata/delete", parameters);
}
