const SEND_MSG = 'SEND-MSG';

let initState = {
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
        case SEND_MSG:
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, msg: action.newMsg}],
            };
        default:
            return state;
    }
}

export const sendMsgActionCreate = (newMsg) => ({type: SEND_MSG, newMsg});

export default messageReducer;