import c from './MyPosts.module.css';
import Post from './Post/Post';
import * as React from 'react';

const MyPosts = (props) => {
    let posts = props.state.postsData.map(p => <Post msg={p.msg} likeCount={p.likeCount}/>);

    let postArea = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    };

    let postAreaChange = () => {
        props.dispatch(
            {
                type: 'UPDATE-NEW-POST-TEXT',
                text: postArea.current.value
            }
        );
    };

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={postArea} value={props.state.newText} onChange={postAreaChange}/>
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