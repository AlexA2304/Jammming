import React from "react";

import "./TrackListCompact.css";

import TrackCompact from "../TrackCompact/TrackCompact";

const TrackListCompact = (props) => {

    // Filter the array to only include tracks with unique titles.
    const uniqueTracks = props.tracks.slice(0, 5).reduce((acc, current) => {
        const x = acc.find(item => item.title === current.title);
        if (!x) {
            return acc.concat([current]);
        } else {
            return acc;
        }
    }, []);

    return (
        <div className="TrackList">
            {uniqueTracks.map((track) => {
                return (
                    <TrackCompact track={track} key={track.id} onSelect={props.onSelect} />
                );
            })}
        </div>
    );
};

export default TrackListCompact;