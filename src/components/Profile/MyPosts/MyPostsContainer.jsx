import {addPostActionCreate} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newText: state.profilePage.newText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreate(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;