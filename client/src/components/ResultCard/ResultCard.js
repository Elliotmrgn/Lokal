import React from "react";
import './ResultCard.css';

export const ResultCard = (props) => (
  <div className="card d-flex flex-row">
    <img
      className="rounded"
      src="https://via.placeholder.com/150"
      alt="Buisness Image"
    />
    <div className="card-body">
      <h3 className="card-title">{props.data.businessName}</h3>
      <h5 className="card-title">{props.data.tagline}</h5>
      
      {props.data.email &&<p className="card-text">Email: {props.data.email}</p>}
      {props.data.about && <p className="card-text">{props.data.about}</p>}
    </div>
  </div>
);
