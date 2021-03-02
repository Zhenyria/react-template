import c from './Dialogs.module.css';
import UserDialog from "./UserDialog/UserDialog";
import Message from "./Message/Message";
import * as React from "react";

const Dialogs = (props) => {

    let dialogs = props.state.dialogsData.map(dialog => <UserDialog name={dialog.name} id={dialog.id}/>);
    let messages = props.state.messagesData.map(message => <Message msg={message.msg}/>);

    let msg = React.createRef();

    let editMsg = () => {
        props.editDialog(msg.current.value);
    };

    let sendMsg = () => {
        alert(msg.current.value)
    };

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {dialogs}
            </div>
            <div>
                {messages}
                <div>
                    <div>
                        <textarea ref={msg} value={props.state.dialogText} onChange={editMsg}/>
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