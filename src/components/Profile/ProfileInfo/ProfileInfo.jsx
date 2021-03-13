import c from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHook from "../ProfileStatusWithHook";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={c.descriptionBlock}>
                <div>
                    <img src={profile.photos.large}/>
                </div>
                <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
                <div>
                    <span className={c.fullName}>{profile.fullName}</span>
                </div>
                <div>
                    <span>{profile.aboutMe}</span>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;