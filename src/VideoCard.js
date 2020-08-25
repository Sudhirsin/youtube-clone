import React from 'react';
import './VideoCard.css'
import { Avatar } from '@material-ui/core';

function Videos({ image, title, channel, views, timestamp }) {
    return (
        <div className="videoCard">
            <img 
                className="videoCard__thumbnail"
                src={image}
                alt=""
            />
            <div className="videoCard__info">
                <Avatar  
                    className="videoCard__avatar"  
                    alt={channel}
                    src={channel}
                />
                <div className="videoCard__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views} * {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default Videos
