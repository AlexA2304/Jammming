import React, { useCallback } from "react";

import "./TrackCompact.css";

const TrackCompact = (props) => {
    const handleSelect = useCallback(() => {
        if (props.onSelect) {
            props.onSelect(props.track);
        }
    }, [props]);

    return (
        <div className="Track" onClick={handleSelect}>
            <div className="Track-information">
                <h3>{props.track.name}</h3>
            </div>
        </div>
    );
};

export default TrackCompact;