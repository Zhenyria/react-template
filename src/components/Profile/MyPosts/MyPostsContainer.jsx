import * as React from 'react';
import {addPostActionCreate, postAreaChangeActionCreate} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage;

    let addPost = () => {
        props.store.dispatch(addPostActionCreate());
    };

    let postAreaChange = (text) => {
        props.store.dispatch(postAreaChangeActionCreate(text));
    };

    return <MyPosts postAreaChange={postAreaChange} addPost={addPost} posts={state.postsData}
                    newText={state.newText}/>;
}

export default MyPostsContainer;