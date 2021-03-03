import c from './Dialogs.module.css';
import UserDialog from "./UserDialog/UserDialog";
import Message from "./Message/Message";
import * as React from "react";

const Dialogs = (props) => {

    let dialogs = props.dialogsData.map(dialog => <UserDialog name={dialog.name} id={dialog.id}/>);
    let messages = props.messagesData.map(message => <Message msg={message.msg}/>);

    let editNewMsg = (e) => {
        props.editNewMsg(e.target.value);
    };

    let sendMsg = () => {
        props.sendMsg();
    };

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {dialogs}
            </div>
            <div>
                <div>{messages}</div>
                <div>
                    <div>
                        <textarea placeholder='Enter your message' value={props.newMsgText}
                                  onChange={editNewMsg}/>
                    </div>
                    <div>
                        <button onClick={sendMsg}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;