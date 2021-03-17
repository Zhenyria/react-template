import c from './ProfileInfo.module.css';
import {createField, Input, Textarea} from '../../common/FormsControls/FormsControls';
import c2 from '../../common/FormsControls/FormsControls.module.css';
import {reduxForm} from 'redux-form';
import * as React from 'react';

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <button>save</button>
                </div>
                {error && <div className={c2.formSummaryError}>{error}</div>}
                <div>
                    <span
                        className={c.fullName}>Name:</span> {createField('Full name', 'fullName', [], Input)}
                </div>
                <div>
                    <b>Looking for job:</b> {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
                </div>
                <div><b>My skills:</b> {createField('My skills', 'lookingForAJobDescription', [], Textarea)}</div>
                <div><b>About me:</b> {createField('About me', 'aboutMe', [], Textarea)}</div>
                <div>
                    <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                    return (
                        <div key={key} className={c.contact}>
                            <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
                        </div>
                    )
                })}
                </div>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;