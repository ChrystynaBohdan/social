import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    const state = props.dialogsPage;

    let dialogsElement = state.dialogs
        .map(d => <DialogItem name={d.name} key= {d.id} id={d.id} img={d.img}/>);

    const messagesElement = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>);

    const addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    };
    const newMessageElement = React.createRef();

    const onSendMessageClick = () => {
        props.sendMessage();
    }

    const newMessageBody = state.newMessageBody;
    const onNewMessageChange = (e) => {
        const body = e.target.value;
        props.updateNewMessageBody(body);

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div className={s.newMessage}><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='enter message'>
                    </textarea>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;