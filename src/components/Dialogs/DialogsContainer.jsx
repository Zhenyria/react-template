import {editNewMsgActionCreate, sendMsgActionCreate} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagePage.dialogsData,
        messagesData: state.messagePage.messagesData,
        newMsgText: state.messagePage.newMsgText,
        isAuth: state.auth.isAuth
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;