import { combineReducers, createStore } from "redux";
import tableReducer from "./../reducers/tableReducer";

let reducers = combineReducers({
  tableReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
let store = createStore(reducers, composeEnhancers());
export default store;
