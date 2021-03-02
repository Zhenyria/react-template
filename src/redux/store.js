import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";

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
    dispatch(action) {
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._callSubscriber(this);
    }
};

window.store = store;

export default store;