const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
    dialogs: [
        {id: 1, name: 'Coco', img: 'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'},
        {id: 2, name: 'Koshka', img: 'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'},
        {id: 3, name: 'Kotik', img: 'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'},
        {
            id: 4,
            name: 'TyShoRobysh',
            img: 'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'
        },
        {
            id: 5,
            name: 'Txir',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
        }
    ],
    messages: [
        {id: 1, message: 'HI'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'yoo'},
        {id: 4, message: 'mee'},
        {id: 5, message: 'yoooaaa'},
        {id: 6, message: 'Good day'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return { ...state,
                newMessageBody: action.body
            }

        case SEND_MESSAGE: {
            const body = state.newMessageBody;
            return {...state,
                newMessageBody:'',
                messages: [...state.messages, {id: 6, message: body}]
            }
        }
            return state;
        default:
            return state;
    }

    return state;
}

export let sendMessageCreator = () => {
    return {type: SEND_MESSAGE}
}

export let updateNewMessageBodyCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: text}
}

export default dialogsReducer;