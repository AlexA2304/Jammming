import React, { useCallback } from "react";

import "./TrackCompact.css";

const TrackCompact = (props) => {
    const handleSelect = useCallback(() => {
        if (props.onSelect) {
            props.onSelect(props.track);
        }
    }, [props]);

    const truncateTitle = (title) => {
        if (title.length > 20) {
            return title.substring(0, 20) + "...";
        } else {
            return title;
        }
    };

    return (
        <div className="Track" onClick={handleSelect}>
            <div className="Track-information">
                <h4>{truncateTitle(props.track.name)}</h4>
            </div>
        </div>
    );
};

export default TrackCompact;