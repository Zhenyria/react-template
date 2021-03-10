import c from './MyPosts.module.css';
import Post from './Post/Post';
import * as React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControls/FormsControls";

let maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' placeholder='Tell us what`s new' component={Textarea}
                       onChange={props.postAreaChange} validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'postAddForm'})(AddPostForm);

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

export default MyPosts;