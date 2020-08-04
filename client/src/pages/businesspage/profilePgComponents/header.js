// code for business name, website and tags
import React from "react";
import { Link } from "react-router-dom";

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
