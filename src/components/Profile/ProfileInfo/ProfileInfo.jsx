import c from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

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
            <div>
                <img src='https://cdn.shazoo.ru/284693_L7nXIl32kO_dkd7_mvvyaazvxr.jpg' alt='img'/>
            </div>
            <div className={c.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large}/>
                </div>
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