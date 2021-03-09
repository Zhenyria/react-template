import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

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
                postsData: [...state.postsData, {id: 5, msg: state.newText, likeCount: 0}],
                newText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newText: action.text
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
        default:
            return state;
    }
}

export const addPostActionCreate = () => ({type: ADD_POST});

export const postAreaChangeActionCreate = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}

export const setStatus = (status) => ({type: SET_STATUS, status});

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            })
    }
}

export default profileReducer;