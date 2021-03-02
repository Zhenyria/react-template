import c from './MyPosts.module.css';
import Post from './Post/Post';
import * as React from 'react';

const MyPosts = (props) => {
    let posts = props.posts.map(p => <Post msg={p.msg} likeCount={p.likeCount}/>);

    let addPost = () => {
        props.addPost();
    };

    let postAreaChange = (e) => {
        props.postAreaChange(e.target.value);
    };

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder='Tell us what`s new' value={props.newText} onChange={postAreaChange}/>
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