import React from "react";

import "./TrackListCompact.css";

import TrackCompact from "../TrackCompact/TrackCompact";

const TrackListCompact = (props) => {

    // Filter the array to only include tracks with unique names.
    const uniqueTracks = [...new Set(props.tracks.map(track => track.name))]
        .slice(0, 5)
        .map(name => props.tracks.find(track => track.name === name));

    // Fill the array to always have 5 elements.
    while (uniqueTracks.length < 5) {
        uniqueTracks.push({ id: uniqueTracks.length, name: '' });
    }

    return (
        <div className="TrackList">
            {uniqueTracks.map((track, index) => {
                return (
                    <TrackCompact track={track} key={index} onSelect={props.onSelect} />
                );
            })}
        </div>
    );
};

export default TrackListCompact;