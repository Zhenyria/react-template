import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {login} from '../../redux/authReducer';
import * as React from 'react';
import {createField, Input} from '../common/FormsControls/FormsControls';
import {requiredField} from '../../utils/validators/validator';
import {Redirect} from 'react-router';
import c from '../common/FormsControls/FormsControls.module.css';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Login', 'login', [requiredField], Input)}
            {createField('Password', 'password', [requiredField], Input, {type: 'password'})}
            {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'rememberMe')}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField('Enter symbols here', 'captcha', [requiredField], Input)}

            {error && <div className={c.formSummaryError}>{error}</div>}
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {
        login(formData.login, formData.password, formData.rememberMe, formData.captcha)
    }
    if (isAuth) {
        return <Redirect to='/profile'/>
    }
    return (
        <div>
            <h1>LOGIN HERE</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login);