import {editNewMsgActionCreate, sendMsgActionCreate} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import * as React from "react";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagePage.dialogsData,
        messagesData: state.messagePage.messagesData,
        newMsgText: state.messagePage.newMsgText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        editNewMsg: (text) => {
            dispatch(editNewMsgActionCreate(text));
        },
        sendMsg: () => {
            dispatch(sendMsgActionCreate());
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)