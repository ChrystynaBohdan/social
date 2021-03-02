import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.post}>
                <img src='https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'/>
                <div>
                    <span> likes {props.count} </span>
                </div>
            </div>
            <div>
                {props.message}
            </div>
        </div>
    )
}

export default Post;