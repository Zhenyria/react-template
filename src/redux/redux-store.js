import {applyMiddleware, combineReducers, createStore} from 'redux';
import messageReducer from './messageReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import {reducer as formReducer} from 'redux-form';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    messagePage: messageReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;