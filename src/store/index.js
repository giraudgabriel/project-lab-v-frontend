import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import userReducer from "~/store/reducers/userReducer";
import reduxThunk from "redux-thunk";

const reducer = combineReducers({
  user: userReducer,
});

const middlewares = [reduxThunk];

function create(reducers, middlewares) {
  const composeEnhancers =
    typeof window === "object" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
      ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
      : compose;
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  return createStore(reducers, enhancer);
}

const store = create(reducer, middlewares);

export default store;
