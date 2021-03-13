import c from './FormsControls.module.css';
import {Field} from "redux-form";
import * as React from "react";

const FormControl = ({meta: {touched, error}, children}) => {
    let hasError = error && touched;
    return (
        <div className={c.formControl + ' ' + (hasError ? c.error : '')}>
            <div>
                {children}
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input}{...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input}{...restProps} /></FormControl>
}

export const createField = (placeholder, name, validators, component, additionalProps = {}, text = '') => {
    return (
        <div>
            <Field placeholder={placeholder} name={name} validate={validators}
                   component={component} {...additionalProps}/> {text}
        </div>
    )
}