import c from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHook from "../ProfileStatusWithHook";
import defaultPhoto from "../../../assets/default-avatar.png";
import {useState} from 'react';
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, saveMainPhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onSubmit = (formData) => {
        saveProfile(formData)
            .then(() => {
                setEditMode(false);
            });
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
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}
            </div>
        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}
            <div>
                <span className={c.fullName}>{profile.fullName}</span>
            </div>
            <div>
                <b>Looking for job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
            <div><b>My skills:</b> {profile.lookingForAJobDescription}</div>}
            <div><b>About me:</b> {profile.aboutMe}</div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    );
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={c.contact}><b>{contactTitle}:</b> {contactValue}</div>
}

export default ProfileInfo;