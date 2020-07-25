import React from "react";
import "./ResultCard.css";

export const ResultCard = (props) => (
  <div class="card-container">
    <div class="card d-flex flex-row">
      <img
        src="https://s15.postimg.cc/temvv7u4r/recipe.jpg"
        alt=""
        class="card-media"
      />
      <div class="card-body">
        <h2 class="card-title">{props.data.businessName}</h2>
        <span class="card-author subtle">{props.data.tagline}</span>
<span class="card-description subtle">{props.data.about}</span>
      </div>
    </div>
    <div class="card-shadow"></div>
  </div>

  // <div className="card d-flex flex-row"  >
  //   <img
  //     className="rounded"
  //     src="https://via.placeholder.com/150"
  //     alt="Buisness Image"
  //   />
  //   <div className="card-body">
  //     <h3 className="card-title" onClick={props.onClick} data-lat={props.data.lat} data-lng = {props.data.lng}>{props.data.businessName}</h3>
  //     <h5 className="card-title">{props.data.tagline}</h5>

  //     {props.data.email &&<p className="card-text">Email: {props.data.email}</p>}
  //     {props.data.about && <p className="card-text">{props.data.about}</p>}
  //   </div>
  // </div>
);
