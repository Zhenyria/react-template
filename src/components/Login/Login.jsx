import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import * as React from "react";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validator";
import {Redirect} from "react-router";
import c from '../common/FormsControls/FormsControls.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} validate={[requiredField]} component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} validate={[requiredField]} component={Input}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember me
            </div>
            {props.error && <div className={c.formSummaryError}>{props.error}</div>}
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }
    return (
        <div>
            <h1>LOGIN HERE</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);