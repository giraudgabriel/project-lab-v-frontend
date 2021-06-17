import { SET_PERMISSION } from "./types";

export const setPermission = (payload) => (dispatch, _getState) => {
  dispatch({ type: SET_PERMISSION, payload });
};
