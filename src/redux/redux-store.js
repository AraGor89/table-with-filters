import { combineReducers, createStore } from "redux";
import tableReducer from "./../reducers/tableReducer";

let reducers = combineReducers({
  tableReducer,
});

let store = createStore(reducers);
export default store;
