import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "500px",
  height: "500px",
};

const options = {
  disableDefaultUI: true,
  zoomControl:true
}

export default function Map(props) {
  console.log("Map -> props", props.center)
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY, //.env not working
    libraries,
  })

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps...";
  
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={props.center}
        options={options}
      >
        <Marker position={props.center}/>
      </GoogleMap>
    </div>
  );
}

