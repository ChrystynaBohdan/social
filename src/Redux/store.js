// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";

// let store = {
//     _state: {
//
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'how are you', likesCount: 100},
//                 {id: 2, message: 'its me im fine', likesCount: 3400}
//             ]
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Coco', img: 'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'},
//                 {id: 2, name: 'Koshka', img: 'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'},
//                 {id: 3, name: 'Kotik', img: 'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'},
//                 {
//                     id: 4,
//                     name: 'TyShoRobysh',
//                     img: 'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'
//                 },
//                 {
//                     id: 5,
//                     name: 'Txir',
//                     img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'
//                 }
//             ],
//             messages: [
//                 {id: 1, message: 'HI'},
//                 {id: 2, message: 'Hello'},
//                 {id: 3, message: 'yoo'},
//                 {id: 4, message: 'mee'},
//                 {id: 5, message: 'yoooaaa'},
//                 {id: 6, message: 'Good day'}
//             ],
//             newMessageBody: ''
//
//         }, sidebar: {
//             friends: [
//                 {
//                     avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg',
//                     name: 'Anna'
//                 },
//                 {
//                     avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg',
//                     name: 'Ira'
//                 },
//                 {
//                     avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg',
//                     name: 'Olya'
//                 },
//                 {
//                     avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg',
//                     name: 'Oksanas'
//                 },
//             ]
//         },
//         newPostText: 'it-kamasutra'
//     },
//     _callSubscriber(){
//         console.log ('state changed')
//     },
//
//     getState(){
//         return this._state;
//     },
//
//     subscribe (observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
//         this._state.usersPage = UsersReducer(this._state.usersPage, action);
//
//             this._callSubscriber(this._state);
//
//         }
//     }




/*let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'how are you', likesCount: 100},
            {id: 2, message: 'its me im fine', likesCount: 3400}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Coco', img: 'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'},
            {id: 2, name: 'Koshka', img: 'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'},
            {id: 3, name: 'Kotik', img: 'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'},
            {id: 4, name: 'TyShoRobysh', img: 'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg'},
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


    }, sidebar: {
        friends: [
            {
                avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg',
                name: 'Anna'
            },
            {
                avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg',
                name: 'Ira'
            },
            {
                avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg',
                name: 'Olya'
            },
            {
                avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg',
                name: 'Oksanas'
            },
        ]
    },
    newPostText: 'it-kamasutra'
}*/


/*export const addPost = () => {
    const newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}*/

/*export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}*/

/*export const subscribe = (observer) => {
rerenderEntireTree = observer;
}*/

// export default store;
// window.store = store;