import { SET_USER } from "./types";
import history from "~/history";

export const setUser = (payload) => async (dispatch, _getState) => {
  dispatch({ type: SET_USER, payload });
  setTimeout(() => {
    history.push(payload?.username != null ? "/user" : "/");
  }, 1000);
};
