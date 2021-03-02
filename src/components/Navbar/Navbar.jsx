import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import Friends from "./Friends/Friends";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        friends: state.sidebar.friends
    };
}

const Navbar = (props) => {
    return (<nav className={classes.nav}>
        <div className={classes.item}>
            <NavLink to="/profile" activeClassName="s.active">Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/dialogs" activeClassName="s.active">Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/news" activeClassName="s.active">News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to="/test" activeClassName="s.active">MyList</NavLink>
        </div>
        <div className={classes.item}>
            <a>Music</a>
        </div>
        <div className={classes.item}>
            <a>Settings</a>
        </div>
            <Friends friendsList={props.friends}/>
    </nav>
    )
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;