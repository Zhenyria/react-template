import * as React from "react";
import {useEffect, useState} from "react";
import c from './Profile.module.css';

const ProfileStatusWithHook = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    let activateEditMode = () => {
        setEditMode(true);
    };

    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode} className={c.status}>{props.status || '-----'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onBlur={deactivateEditMode} onChange={onStatusChange} value={status} autoFocus={true}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHook;