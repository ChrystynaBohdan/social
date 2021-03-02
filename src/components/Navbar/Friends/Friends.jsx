import React from 'react';
import classes from "./Friends.module.css";

const Friends = (props) => {
    console.log(props)

    const FriendsElement = props.friendsList.map((friend, i) => <div key={i}><img className={classes.avatar} alt="image" src={friend.avatar}/><div>{friend.name}</div> </div>)

    return <div>
        <h3>Friends</h3>
        <div className={classes.friends}>
            {FriendsElement}
        </div>
    </div>
}

export default Friends;