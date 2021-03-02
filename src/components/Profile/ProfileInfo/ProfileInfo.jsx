import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://cdn.shazoo.ru/284693_L7nXIl32kO_dkd7_mvvyaazvxr.jpg' alt='img'/>
            </div>
            <div className={c.descriptionBlock}>
                ava + desc
            </div>
        </div>
    );
}

export default ProfileInfo;