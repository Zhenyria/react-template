import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const DELETE_POST = 'profile/DELETE-POST';
const SAVE_MAIN_PHOTO_SUCCESS = 'profile/SAVE-MAIN-PHOTO-SUCCESS';

let initState = {
    newText: 'Hi, my friend!',
    postsData: [
        {id: 1, msg: 'It s good', likeCount: 12},
        {id: 2, msg: 'Super!', likeCount: 9},
        {id: 3, msg: 'I was die', likeCount: 0},
        {id: 4, msg: 'I kill all!', likeCount: 2}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                postsData: [...state.postsData, {id: 5, msg: action.text, likeCount: 0}],
                newText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: {...action.profile}
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                postsData: [...state.postsData].filter(p => p.id !== action.id)
            }
        }
        case SAVE_MAIN_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    photos: action.photos
                }
            }
        }
        default:
            return state;
    }
}

export const deletePostActionCreate = (id) => ({type: DELETE_POST, id});

export const addPostActionCreate = (newPostText) => ({type: ADD_POST, text: newPostText});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status});

export const setMainPhotoSuccess = (photos) => ({type: SAVE_MAIN_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const saveMainPhoto = (file) => async (dispatch) => {
    let response = await profileAPI.saveMainPhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(setMainPhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    let response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(getState().auth.userId));
    } else {
        let msg = response.data.messages.length > 0 ? response.data.messages[0] : 'Unknown error';
        let action = stopSubmit('edit-profile', {_error: msg});
        dispatch(action);
        return Promise.reject();
    }
}

export default profileReducer;