import * as React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, saveMainPhoto, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.currentUserid;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} updateStatus={this.props.updateStatus}
                        isOwner={!this.props.match.params.userId} saveMainPhoto={this.props.saveMainPhoto}/>;
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    currentUserid: state.auth.userId
})

export default compose(
    connect(mapStateToProps, {getUserProfile, updateStatus, getStatus, saveMainPhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)