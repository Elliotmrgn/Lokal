import React from "react";
import "./ResultCard.css";
import {  RiArrowRightUpLine} from "react-icons/ri";
import { Link } from "react-router-dom";


export const ResultCard = (props) => (
      <div className="resultCard2" 
         
          data-lat={props.data.lat}
          data-lng={props.data.lng}
          onClick={props.onClick}
          > 
          < div className="idk2" > 
          <Link to={"/profilepage/" + props.data._id}  > < RiArrowRightUpLine />  </Link> </div>
          <div className="idk">
          <Link to={"/profilepage/" + props.data._id}  ><h1 className="listName">{props.data.businessName}</h1> </Link>
          </div>
          <h5 className="listTagline">{props.data.tagline}</h5>
          <h5 className="listTagline">{props.data.street}</h5>
       </div>

  // <div className="card-container">
  //   <div className="card d-flex flex-row">
  //     <img
  //       src={props.data.photos[0]}
  //       alt="Business Photo"
  //       className="card-media"
  //     />
  //     <div className="card-body">
  //       <h2
  //         className="card-title"
  //         data-lat={props.data.lat}
  //         data-lng={props.data.lng}
  //         onClick={props.onClick}
  //       >
  //         {props.data.businessName}
  //       </h2>
  //       <span className="card-author subtle">{props.data.tagline}</span>
  //       <span className="card-description subtle">{props.data.about}</span>
  //       <button>Visit Page</button>
  //     </div>
  //   </div>
  //   <div className="card-shadow"></div>
  // </div> 
);
