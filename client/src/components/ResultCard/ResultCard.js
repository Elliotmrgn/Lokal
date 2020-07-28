import React from "react";
import './ResultCard.css';

export const ResultCard = (props) => (
<<<<<<< HEAD
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
=======
  <div className="card d-flex flex-row"  >
    <img
      className="rounded"
      src="https://via.placeholder.com/150"
      alt="Buisness Image"
    />
    <div className="card-body">
      <h3 className="card-title" onClick={props.onClick} data-lat={props.data.lat} data-lng = {props.data.lng}>{props.data.businessName}</h3>
      <h5 className="card-title">{props.data.tagline}</h5>
      
      {props.data.email &&<p className="card-text">Email: {props.data.email}</p>}
      {props.data.about && <p className="card-text">{props.data.about}</p>}
    </div>
>>>>>>> parent of 4adf5f1... added search bar to homepage and fixed image sizes
  </div>
);
