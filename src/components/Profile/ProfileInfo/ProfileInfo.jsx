import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.container}>
                <img className={s.avatar} src="logo.svg"/>
                <div className={s.descriptionBlock}>
                    about me
                </div>
            </div>
        </div>)
}

export default ProfileInfo;
