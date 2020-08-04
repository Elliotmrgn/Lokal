// code for business name, website and tags
import React from "react";

// Bootstrap

function headerPF(props) {
  return (
    <div>
      <span className="profileName">{props.name}</span>
      <br></br>
      <a href={props.website} className="largeLink">
        {props.website}
      </a>
    </div>
  );
}

export default headerPF;
