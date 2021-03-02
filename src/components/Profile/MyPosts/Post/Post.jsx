import c from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={c.item}>
            <img src="https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png"/>
            {props.msg}
            <div><span>{props.likeCount} like's</span></div>
        </div>
    );
}

export default Post;