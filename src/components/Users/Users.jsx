import c from './users.module.css';
import axios from "axios";
import defaultPhoto from './../../assets/default-avatar.png';
import * as React from "react";

class Users extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                });
        }
    }

    setCurrentPage = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 0; i < pagesCount; i++) {
            pages.push(i + 1);
        }

        return (
            <div>
                <div>
                    {
                        pages.map(pageNum => {
                            return <span onClick={() => this.setCurrentPage(pageNum)}
                                         className={(this.props.currentPage === pageNum && c.selected) + ' ' + c.paginationItem}>
                                {pageNum}</span>
                        })
                    }
                </div>
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