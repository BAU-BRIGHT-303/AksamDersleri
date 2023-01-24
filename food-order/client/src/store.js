import { applyMiddleware, combineReducers, createStore } from "redux";
import { getAllBurgersReducer } from "./reducers/burgerReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";

const finalReducer = combineReducers({
  getAllBurgersReducer: getAllBurgersReducer,
  cartReducer: cartReducer,
});

const initialStore = {};

const compose = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialStore,
  compose(applyMiddleware(thunk))
);

export default store;
