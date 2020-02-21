import React from "react";

 export function ResultList(props) {
  return (
<div className="card-body ">

    {/* google search input data */}
    <a
      href={`https://www.google.com/search?q=${props.placeName}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.placeName}
    </a>

  {/* the lat and lon */}
    <a
      className="placelonglat"
      href={`https://www.google.com/maps/@${props.placeLatitude},${props.placeLongitude},12z`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.placeLatitude}, {props.placeLongitude}
    </a>
    {/* save button clicked on place to save */}
    {props.loginStatus ? (
      <button
        type="button"
        className="btn btn-success"
        onClick={() => props.handleSaveButton(props.placeKey)}
      >
        SAVE
      </button>
    ) : (
      <button
        type="button"
        className="btn btn-sm btn-secondary"
        onClick={props.handleDisabledSaveButton}
      >
        SAVE
      </button>
    )}
</div>
);
}

export default ResultList;