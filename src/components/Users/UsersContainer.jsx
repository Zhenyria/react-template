import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, toggleIsFollowingInProgress, unfollow} from "../../redux/usersReducer";
import Users from "./Users";
import * as React from "react";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    setCurrentPage = (pageNum) => {
        this.props.setCurrentPage(pageNum);
        this.props.getUsers(pageNum, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    setCurrentPage={this.setCurrentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    isFollowingInProgress={this.props.isFollowingInProgress}/>
            </>);
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }
}

let AuthRedirectComponent = withAuthRedirect(UsersContainer);
export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowingInProgress,
    getUsers
})(AuthRedirectComponent);