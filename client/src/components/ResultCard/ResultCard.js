import React from "react";
import "./ResultCard.css";

export const ResultCard = (props) => (
  <div className="card-container">
    <div className="card d-flex flex-row">
      <img
        src={props.data.photos[0]}
        alt="Business Photo"
        className="card-media"
      />
      <div className="card-body">
<h2 className="card-title" data-lat={props.data.lat} data-lng={props.data.lng} onClick={props.onClick}>{props.data.businessName}</h2>
        <span className="card-author subtle">{props.data.tagline}</span>
        <span className="card-description subtle">{props.data.about}</span>
      </div>
    </div>
    <div className="card-shadow"></div>
  </div>
);
