const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                msg: state.newText,
                likeCount: 0
            };
            state.postsData.push(newPost);
            state.newText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newText = action.text;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreate = () => ({type: ADD_POST});

export const postAreaChangeActionCreate = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});

export default profileReducer;