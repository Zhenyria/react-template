import {setAuth} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

let initState = {
    initialized: false
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(setAuth());
        promise.then(() => {
            dispatch(initializedSuccess());
        })
    }
}

export default appReducer;