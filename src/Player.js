import React from 'react';
import Body from './Body';
import './Player.css';
import Sidebar from './Sidebar';

function Player() {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body />
            </div>
            {/* body */}
            {/* footer */}
        </div>
    )
}

export default Player
