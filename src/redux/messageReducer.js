const SEND_MSG = 'SEND-MSG';
const UPDATE_NEW_MSG_TEXT = 'UPDATE-NEW-MSG-TEXT';

let initState = {
    newMsgText: '',
    messagesData: [
        {id: 1, msg: 'Fuck u!!'},
        {id: 2, msg: 'I like big dicks...'},
        {id: 3, msg: 'What is this, man?!'},
        {id: 4, msg: 'I kill you!'},
        {id: 5, msg: 'I was eat ice cream'}
    ],
    dialogsData: [
        {id: 1, name: 'Petro'},
        {id: 2, name: 'Jhon Wick'},
        {id: 3, name: 'Pidroid'},
        {id: 4, name: 'CockSucker'},
        {id: 5, name: 'AnusLiker'}
    ]
}

const messageReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MSG_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMsgText = action.text;
            return stateCopy;
        }
        case SEND_MSG: {
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push({id: 6, msg: state.newMsgText});
            stateCopy.newMsgText = '';
            return stateCopy;
        }
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