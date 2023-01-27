import { createStore } from "redux";
import gameReducer from "./gameReducer";

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(gameReducer, devtools);

export default store;
