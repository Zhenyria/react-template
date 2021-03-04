import c from './users.module.css';
import axios from "axios";
import defaultPhoto from './../../assets/default-avatar.png';
import * as React from "react";

class Users extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items);
                });
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(user =>
                        <div key={user.id}>
                        <span>
                            <div>
                                <img className={c.userPhoto}
                                     src={user.photos.small != null ? user.photos.small : defaultPhoto} alt={'Avatar'}/>
                            </div>
                            <div>
                                {user.followed ?
                                    <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button> :
                                    <button onClick={() => this.props.follow(user.id)}>Follow</button>}
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
}

export default Users;