const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        {id: 1, message: 'how are you', likesCount: 100},
        {id: 2, message: 'its me im fine', likesCount: 3400}
    ]
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return {...state,
                newPostText: action.newText
            };
        }

        default:
            return state;
    }


}

export let addPostActionCreator = () => {
    return {type: ADD_POST}
}

export let updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export default profileReducer;