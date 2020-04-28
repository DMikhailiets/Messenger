import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { dialogsReducer, messagesReducer } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    dialogs: dialogsReducer,
    messages: messagesReducer,
})

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  ));

export default store;