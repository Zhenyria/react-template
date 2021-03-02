const SEND_MSG = 'SEND-MSG';
const UPDATE_NEW_MSG_TEXT = 'UPDATE-NEW-MSG-TEXT';

const messageReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MSG_TEXT:
            state.newMsgText = action.text;
            return state;
        case SEND_MSG:
            state.messagesData.push({id: 6, msg: state.newMsgText});
            state.newMsgText = '';
            return state;
        default:
            return state;
    }
}

export const editNewMsgActionCreate = (text) => {
    return {
        type: UPDATE_NEW_MSG_TEXT,
        text: text
    }
};

export const sendMsgActionCreate = () => ({type: SEND_MSG});

export default messageReducer;