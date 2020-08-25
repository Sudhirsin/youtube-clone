import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
           <h2>Recommended</h2>  
           <div className="recommendedVideos__videos">
               <VideoCard 
                title=""
                views="2.3M"
                timestamp="3 days ago"
                channel="Sonny Sangha"
                image=""
                channelImage=""
               />
           </div>
        </div>
    )
}

export default RecommendedVideos;
