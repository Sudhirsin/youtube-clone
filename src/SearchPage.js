import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>

            <hr />

            <ChannelRow 
                image=""
                channel=""
                verified=""
                subs=""
                noOfVideos=""
                description=""
            />
        </div>
    )
}

export default SearchPage
