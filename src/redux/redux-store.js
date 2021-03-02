import {combineReducers, createStore} from 'redux';
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
    messagePage: messageReducer,
    profilePage: profileReducer
});

let store = createStore(reducers);

export default store;