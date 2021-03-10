import c from './Dialogs.module.css';
import UserDialog from './UserDialog/UserDialog';
import Message from './Message/Message';
import * as React from 'react';
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let dialogs = props.dialogsData.map(dialog => <UserDialog name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messages = props.messagesData.map(message => <Message msg={message.msg} key={message.id}/>);

    let addNewMsg = (formData) => {
        props.sendMsg(formData.newMsg);
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {dialogs}
            </div>
            <div>
                <div>{messages}</div>
                <div>
                    <AddMsgFormRedux onSubmit={addNewMsg}/>
                </div>
            </div>
        </div>
    );
}

const AddMsgForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMsg' placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const AddMsgFormRedux = reduxForm({form: 'dialogsAddMsgForm'})(AddMsgForm);

export default Dialogs;