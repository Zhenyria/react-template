const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MSG = 'SEND-MSG';
const UPDATE_NEW_MSG_TEXT = 'UPDATE-NEW-MSG-TEXT';

let store = {
    _state: {
        profilePage: {
            newText: 'Hi, my friend!',
            postsData: [
                {id: 1, msg: 'It s good', likeCount: 12},
                {id: 2, msg: 'Super!', likeCount: 9},
                {id: 3, msg: 'I was die', likeCount: 0},
                {id: 4, msg: 'I kill all!', likeCount: 2}
            ]
        },
        messagePage: {
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
    },
    _callSubscriber() {
        console.log('Subscriber is not found');
    },
    subscribe(observer) {
        store._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    _editNewMsgText(text) {
        this._state.messagePage.newMsgText = text;
        this._callSubscriber(this);
    },
    _addPost() {
        let newPost = {
            id: 5,
            msg: this._state.profilePage.newText,
            likeCount: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newText = '';
        this._callSubscriber(this);
    },
    _editText(text) {
        this._state.profilePage.newText = text;
        this._callSubscriber(this);
    },
    _sendMsg() {
        this._state.messagePage.messagesData.push({id: 6, msg: this._state.messagePage.newMsgText});
        this._state.messagePage.newMsgText = '';
        this._callSubscriber(this);
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._editText(action.text)
        } else if (action.type === UPDATE_NEW_MSG_TEXT) {
            this._editNewMsgText(action.text);
        } else if (action.type === SEND_MSG) {
            this._sendMsg();
        }
    }
};

export const addPostActionCreate = () => ({type: ADD_POST});

export const postAreaChangeActionCreate = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});

export const editNewMsgActionCreate = (text) => {
    return {
        type: UPDATE_NEW_MSG_TEXT,
        text: text
    }
};

export const sendMsgActionCreate = () => ({type: SEND_MSG});


window.store = store;

export default store;