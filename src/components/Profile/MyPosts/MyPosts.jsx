import c from './MyPosts.module.css';
import Post from './Post/Post';
import * as React from 'react';
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let posts = props.postsData.map(p => <Post msg={p.msg} key={p.id} likeCount={p.likeCount}/>);

    let addNewPost = (formData) => {
        props.addPost(formData.newPostText);
    }

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={addNewPost}/>
            </div>
            <div className={c.posts}>
                {posts}
            </div>
        </div>
    );
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' placeholder='Tell us what`s new' component='textarea'
                       onChange={props.postAreaChange}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'postAddForm'})(AddPostForm);

export default MyPosts;