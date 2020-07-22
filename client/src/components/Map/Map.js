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
const center = {
  lat: 35.7848397,
  lng: -78.69311739999999,
};

export default function Map(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAxlhuwWiqy25G-TrZ9DnTwFmyJt-5_yD8", //.env not working
    libraries,
  })

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps...";
  
  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
      ></GoogleMap>
    </div>
  );
}

