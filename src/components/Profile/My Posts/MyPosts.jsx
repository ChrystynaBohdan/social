import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) => {

    const postsElement =
        props.postsList.map( p => <Post message={p.message} count={p.likesCount}/> );

    const newPostElement =
        React.createRef();

    const onaddPost = () => {
        props.addPost();

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                New post
            </div>
            <div className={s.newPost}>
                <textarea  onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button onClick={onaddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;