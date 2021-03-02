import c from './MyPosts.module.css';
import Post from './Post/Post';
import * as React from 'react';
import {addPostActionCreate, postAreaChangeActionCreate} from "../../../redux/profileReducer";

const MyPosts = (props) => {
    let posts = props.state.postsData.map(p => <Post msg={p.msg} likeCount={p.likeCount}/>);

    let addPost = () => {
        props.dispatch(addPostActionCreate());
    };

    let postAreaChange = (e) => {
        props.dispatch(postAreaChangeActionCreate(e.target.value));
    };

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder='Tell us what`s new' value={props.state.newText} onChange={postAreaChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post
                    </button>
                </div>
            </div>
            <div className={c.posts}>
                {posts}
            </div>
        </div>
    );
}

export default MyPosts;