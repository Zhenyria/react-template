import c from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={c.header}>
            <img
                src="https://png.pngtree.com/element_our/png/20181011/twitter-social-media-icon-design-template-vector-png_127095.jpg"
                alt="logo"/>
            <div className={c.loginBlock}>
                {
                    props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> :
                        <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;