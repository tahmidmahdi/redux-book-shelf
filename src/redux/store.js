import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import bookReducer from "./reducers/bookReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware(thunk)

const combinedReducer = combineReducers({
    books: bookReducer,
    // user: userReducer,
})

export const store = createStore(combinedReducer, composeWithDevTools(middleware))