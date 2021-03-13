import {NavLink} from "react-router-dom";
import c from "./Users.module.css";
import defaultPhoto from "../../assets/default-avatar.png";

const User = ({user, isFollowingInProgress, follow, unfollow}) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={c.userPhoto}
                             src={user.photos.small != null ? user.photos.small : defaultPhoto}
                             alt={'Avatar'}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={isFollowingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>Unfollow</button>
                        : <button disabled={isFollowingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>Follow</button>}
                </div>
            </span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
                </span>
            <span>
                <div>{'user.location.country'}</div>
                <div>{'user.location.city'}</div>
            </span>
        </div>
    )
};


export default User;