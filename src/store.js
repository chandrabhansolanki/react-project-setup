import { createStore, combineReducers, compose, applyMiddleware } from "redux";
// import rootReducers from "./InvoiceRedux/Reducer";
import thunk from "redux-thunk";
import { AuthReducer } from "./Reducer/Reducer/AuthReducer";
// import InvoiceReducer from "./InvoiceRedux/Reducer/InvoiceReducer";

const middleware = applyMiddleware(thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  auth: AuthReducer,
});

const store = createStore(reducers, composeEnhancers(middleware));

export default store;
