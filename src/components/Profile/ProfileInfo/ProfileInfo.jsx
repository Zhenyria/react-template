import c from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHook from "../ProfileStatusWithHook";
import defaultPhoto from "../../../assets/default-avatar.png";

const ProfileInfo = ({profile, status, updateStatus, isOwner, saveMainPhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            saveMainPhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={c.descriptionBlock}>
                <div>
                    <img className={c.mainPhoto} src={profile.photos.large || defaultPhoto}/>
                    {isOwner && <input type='file' onChange={onMainPhotoSelected}/>}
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