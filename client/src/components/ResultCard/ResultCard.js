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
);
