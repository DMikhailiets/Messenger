import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import authReducer from "./authReducer";
import { composeWithDevTools } from 'redux-devtools-extension';


let reducers = combineReducers({
    authorisationData: authReducer,
    form: formReducer,
});

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  ));

export default store;