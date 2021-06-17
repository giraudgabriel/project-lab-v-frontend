import { combineReducers } from "redux";
import userReducer from "~/store/reducers/userReducer";

export default combineReducers({
  user: userReducer,
});
