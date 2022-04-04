import * as actions from "../constants/actionsConstants";

// actions
export const getUsers = (value) => {
  return {
    type: actions.userAction.FETCH_USER,
    payload: value,
  };
};
