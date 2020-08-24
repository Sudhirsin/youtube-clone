import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <img 
                    className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                    alt="YouTube Logo"
                />
            </div>

            <div className="header__input">
                <input 
                    placeholder="Search.."
                    type="text" 
                />
                <SearchIcon className="header__inputButton" />
            </div>
            
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar 
                    src="https://avatars2.githubusercontent.com/u/56826370?s=60&v=4"
                    alt="Sudhir"
                />
            </div>
            
        </div>
    )
}

export default Header
