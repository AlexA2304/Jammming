import React from 'react';

import './TrackList.css';
import Track from '../Track/Track';

let TrackList = props => {
    return (
        <div className='Tracklist'>
            {props.tracks.map((track) => {
                return (
                    <Track
                        track={track}
                        key={track.id}
                        onAdd={props.onAdd}
                        isRemoval={props.isRemoval}
                        onRemove={props.onRemove}
                    />
                );
            })}
        </div>
    );
};