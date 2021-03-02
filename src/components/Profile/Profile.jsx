import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state} addPost={props.addPost} editText={props.editText}/>
        </div>
    );
}

export default Profile;