import React, { useCallback } from "react";

import "./Track.css";

const Track = (props) => {
  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.track);
    },
    [props.onAdd, props.track]
  );

  const removeTrack = useCallback(
    (event) => {
      props.onRemove(props.track);
    },
    [props.onRemove, props.track]
  );

  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="Track-action" onClick={removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="Track-action" onClick={addTrack}>
        +
      </button>
    );
  };

  const truncateTitle = (title) => {
    if (title.length > 42) {
      return title.substring(0, 42) + "...";
    } else {
      return title;
    }
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{truncateTitle(props.track.name)}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;
