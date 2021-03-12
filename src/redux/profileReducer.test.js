import profileReducer, {addPostActionCreate, deletePostActionCreate} from "./profileReducer";

let state = {
    postsData: [
        {id: 1, msg: 'It s good', likeCount: 12},
        {id: 2, msg: 'Super!', likeCount: 9},
        {id: 3, msg: 'I was die', likeCount: 0},
        {id: 4, msg: 'I kill all!', likeCount: 2}
    ]
}
let newMsg = 'test';

test('postsData length must be incremented', () => {
    let action = addPostActionCreate(newMsg);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(5);

});

test('postsData new msg must be \'test\'', () => {
    let action = addPostActionCreate(newMsg);
    let newState = profileReducer(state, action);
    expect(newState.postsData[4].msg).toBe(newMsg);
});

test('length of postsData after deleting must be decremented', () => {
    let action = deletePostActionCreate(1);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(3);
})

test('length of postsData must be not decremented after deleting with wrong id', () => {
    let action = deletePostActionCreate(-1);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(4);
})