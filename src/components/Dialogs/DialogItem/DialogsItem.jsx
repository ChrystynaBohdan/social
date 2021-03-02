import React from 'react';
import s from '../Dialogs.module.css';
import k from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active + ' ' + k.dialogItem}>
        <img className={k.imga} alt="image" src={props.img}/>
        <NavLink to={path}>{props.name}
        </NavLink>

    </div>
}


export default DialogItem;