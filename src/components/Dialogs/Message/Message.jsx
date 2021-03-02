import c from './Message.module.css';

const Message = (props) => {
    return (
        <div className={c.message}>{props.msg}</div>
    );
}

export default Message;