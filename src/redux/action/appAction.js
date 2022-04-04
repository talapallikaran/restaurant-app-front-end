import * as actions from "../constants/actionsConstants";

// actions
export const alert = (value) => {
  return {
    type: actions.appAction.SHOW_ALERT,
    payload: value,
  };
};