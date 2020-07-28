import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
<<<<<<< HEAD
import mapStyle from "./mapStyle";
=======
>>>>>>> parent of 4adf5f1... added search bar to homepage and fixed image sizes

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "500px",
};
<<<<<<< HEAD

const options = {
  styles: mapStyle,
  disableDefaultUI: true,
  zoomControl: true,
=======
const center = {
  lat: 35.7854203,
  lng: -78.6590437,
>>>>>>> parent of 4adf5f1... added search bar to homepage and fixed image sizes
};

export default function Map(props) {
  console.log("Map -> props", props.center);
  console.log(center);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY, //.env not working
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps...";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
<<<<<<< HEAD
        zoom={13}
=======
        zoom={15}
>>>>>>> parent of 4adf5f1... added search bar to homepage and fixed image sizes
        center={props.center}
      ></GoogleMap>
    </div>
  );
}
