// let rerenderEntireTree = () => {
//     console.log('State changed')
// }

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
            dialogText: '',
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
    getState() {
        return this._state;
    },
    editDialog(text) {
        this._state.messagePage.dialogText = text;
        this._callSubscriber(this);
    },
    addPost() {
        let newPost = {
            id: 5,
            msg: this._state.profilePage.newText,
            likeCount: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newText = '';
        this._callSubscriber(this);
    },
    editText(text) {
        this._state.profilePage.newText = text;
        this._callSubscriber(this);
    },
    subscribe(observer) {
        store._callSubscriber = observer;
    }
}



// let state = {
//     profilePage: {
//         newText: 'Hi, my friend!',
//         postsData: [
//             {id: 1, msg: 'It s good', likeCount: 12},
//             {id: 2, msg: 'Super!', likeCount: 9},
//             {id: 3, msg: 'I was die', likeCount: 0},
//             {id: 4, msg: 'I kill all!', likeCount: 2}
//         ]
//     },
//     messagePage: {
//         dialogText: '',
//         messagesData: [
//             {id: 1, msg: 'Fuck u!!'},
//             {id: 2, msg: 'I like big dicks...'},
//             {id: 3, msg: 'What is this, man?!'},
//             {id: 4, msg: 'I kill you!'},
//             {id: 5, msg: 'I was eat ice cream'}
//         ],
//         dialogsData: [
//             {id: 1, name: 'Petro'},
//             {id: 2, name: 'Jhon Wick'},
//             {id: 3, name: 'Pidroid'},
//             {id: 4, name: 'CockSucker'},
//             {id: 5, name: 'AnusLiker'}
//         ]
//     }
// }

window.store = store;

// export const addPost = () => {
//     let newPost = {
//         id: 5,
//         msg: state.profilePage.newText,
//         likeCount: 0
//     };
//
//     state.profilePage.postsData.push(newPost);
//     state.profilePage.newText = '';
//     rerenderEntireTree(state);
// };

// export const editText = (text) => {
//     state.profilePage.newText = text;
//     rerenderEntireTree(state);
// };

// export const editDialog = (text) => {
//     state.messagePage.dialogText = text;
//     rerenderEntireTree(state);
// }

// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }

export default store;