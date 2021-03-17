import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER-DATA';
const SET_CAPTCHA = 'auth/SET-CAPTCHA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        case SET_CAPTCHA:
            return {
                ...state,
                captchaUrl: action.url
            }
        default:
            return state;
    }
}

export const setAuthAC = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
})

export const setCaptchaUrlAC = (url) => ({type: SET_CAPTCHA, url})

export const setAuth = () => async (dispatch) => {
    let response = await authAPI.me();
    response = response.data;

    if (response.resultCode === 0) {
        let {id, login, email} = response.data;
        dispatch(setAuthAC(id, email, login, true));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    response = response.data;

    if (response.resultCode === 0) {
        dispatch(setAuth())
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }

        let msg = response.messages.length > 0 ? response.messages[0] : 'Unknown error';
        let action = stopSubmit('login', {_error: msg});
        dispatch(action);
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    let url = response.data.url;
    dispatch(setCaptchaUrlAC(url));
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    response = response.data;

    if (response.resultCode === 0) {
        dispatch(setAuthAC(null, null, null, false));
    }
}

export default authReducer;