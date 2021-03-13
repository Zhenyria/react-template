import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

export const setAuthAC = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
})

export const setAuth = () => async (dispatch) => {
    let response = await authAPI.me();
    response = response.data;

    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setAuthAC(id, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    response = response.data;

    if (response.resultCode === 0) {
        dispatch(setAuth())
    } else {
        let msg = response.messages.length > 0 ? response.messages[0] : 'Unknown error';
        let action = stopSubmit('login', {_error: msg});
        dispatch(action);
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    response = response.data;

    if (response.resultCode === 0) {
        dispatch(setAuthAC(null, null, null, false));
    }
}

export default authReducer;