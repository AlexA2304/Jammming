import React from "react";
import "./SearchDrop.css";
import TrackListCompact from "../TrackListCompact/TrackListCompact";

const SearchDrop = (props) => {
    return (
        <div className="SearchDrop">
            <TrackListCompact tracks={props.searchResults} onSelect={props.onSelect} />
        </div>
    );
};

export default SearchDrop;