import c from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from "../ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return (
            <div>
                <span>Profile's data is empty</span>
                <Preloader/>
            </div>
        )
    }

    return (
        <div>
            <div className={c.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large}/>
                </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>
                    <span className={c.fullName}>{props.profile.fullName}</span>
                </div>
                <div>
                    <span>{props.profile.aboutMe}</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;