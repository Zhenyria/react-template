import c from "./users.module.css";
import defaultPhoto from "../../assets/default-avatar.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1);
    }

    return (
        <div>
            <div>
                {
                    pages.map(pageNum => {
                        return <span onClick={() => props.setCurrentPage(pageNum)}
                                     className={(props.currentPage === pageNum && c.selected) + ' ' + c.paginationItem}>
                                {pageNum}</span>
                    })
                }
            </div>
            {
                props.users.map(user =>
                    <div key={user.id}>
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
                                    ? <button onClick={() =>
                                        axios.delete(
                                            `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': 'e482bcac-287b-4e87-a789-3f3b2fe4d12d'
                                                }
                                            })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(user.id)
                                                }
                                            })
                                    }>Unfollow</button>
                                    : <button onClick={() =>
                                        axios.post(
                                            `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                            {},
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': 'e482bcac-287b-4e87-a789-3f3b2fe4d12d'
                                                }
                                            })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(user.id)
                                                }
                                            })
                                    }>Follow</button>}
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
                    </div>)
            }
        </div>
    );
}

export default Users;