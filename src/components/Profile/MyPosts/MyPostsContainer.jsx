import * as React from 'react';
import {addPostActionCreate, postAreaChangeActionCreate} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().profilePage;

                    let addPost = () => {
                        store.dispatch(addPostActionCreate());
                    };

                    let postAreaChange = (text) => {
                        store.dispatch(postAreaChangeActionCreate(text));
                    };

                    return (
                        <MyPosts postAreaChange={postAreaChange}
                                 addPost={addPost}
                                 posts={state.postsData}
                                 newText={state.newText}/>
                    )
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;