import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import * as React from "react";
import {Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validator";

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

    return (
        <div>
            <h1>LOGIN HERE</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

let mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {login})(Login);