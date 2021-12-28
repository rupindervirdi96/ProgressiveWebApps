import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  app: appReducer,
});

const initialState = {};
const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
