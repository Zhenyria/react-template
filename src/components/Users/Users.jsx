import c from "./users.module.css";
import defaultPhoto from "../../assets/default-avatar.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

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
                                    ? <button disabled={props.isFollowingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  props.toggleIsFollowingInProgress(true, user.id);
                                                  usersAPI.unfollow(user.id)
                                                      .then(isComplete => {
                                                          if (isComplete) {
                                                              props.unfollow(user.id)
                                                          }
                                                          props.toggleIsFollowingInProgress(false, user.id);
                                                      })
                                              }}>Unfollow</button>
                                    : <button disabled={props.isFollowingInProgress.some(id => id === user.id)}
                                              onClick={() => {
                                                  props.toggleIsFollowingInProgress(true, user.id);
                                                  usersAPI.follow(user.id)
                                                      .then(isComplete => {
                                                          if (isComplete) {
                                                              props.follow(user.id)
                                                          }
                                                          props.toggleIsFollowingInProgress(false, user.id);
                                                      })
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
                    </div>)
            }
        </div>
    );
}

export default Users;