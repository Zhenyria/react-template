import * as React from "react";
import {editNewMsgActionCreate, sendMsgActionCreate} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().messagePage;

    let editNewMsg = (text) => {
        props.store.dispatch(editNewMsgActionCreate(text))
    };

    let sendMsg = () => {
        props.store.dispatch(sendMsgActionCreate())
    };

    return <Dialogs editNewMsg={editNewMsg} sendMsg={sendMsg} dialogsData={state.dialogsData}
                    messagesData={state.messagesData} newMsgText={state.newMsgText}/>;
}

export default DialogsContainer;