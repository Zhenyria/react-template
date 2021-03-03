import * as React from "react";
import {editNewMsgActionCreate, sendMsgActionCreate} from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().messagePage;

                    let editNewMsg = (text) => {
                        store.dispatch(editNewMsgActionCreate(text))
                    };

                    let sendMsg = () => {
                        store.dispatch(sendMsgActionCreate())
                    };

                    return <Dialogs editNewMsg={editNewMsg}
                                    sendMsg={sendMsg}
                                    dialogsData={state.dialogsData}
                                    messagesData={state.messagesData}
                                    newMsgText={state.newMsgText}/>;
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;