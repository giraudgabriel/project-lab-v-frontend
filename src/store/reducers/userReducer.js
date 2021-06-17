import { SET_PERMISSION } from "~/actions/types";

const INITIAL_STATE = {
  permissions: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PERMISSION:
      return { ...state, permissions: action.payload };
    default:
      return state;
  }
};
