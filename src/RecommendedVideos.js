import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
           <h2>Recommended</h2>  
           <div className="recommendedVideos__videos">
               {[1,2,3,4,5,6,7,8,9,10,11,12].map(video => (
                    <VideoCard 
                        title="🔴 Let's Build a Airbnb Clone with REACT JS for Beginners!"
                        views="2.3M"
                        timestamp="3 days ago"
                        channel="Clever Programmer"
                        image="https://i.ytimg.com/vi/BtJeH_-XYaA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLACgwKptqvWUjAYo938Yjls0GVu0w"
                        channelImage="https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo"
                    />
               ))}
           </div>
        </div>
    )
}

export default RecommendedVideos;
