import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, setCurrentPage, totalUsersCount, pageSize, ...props}) => {
    return (
        <div>
            <Paginator currentPage={currentPage} setCurrentPage={setCurrentPage} totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
            {props.users.map(u => <User user={u} isFollowingInProgress={props.isFollowingInProgress}
                                        follow={props.follow} unfollow={props.unfollow}/>)}
        </div>
    )
}

export default Users;