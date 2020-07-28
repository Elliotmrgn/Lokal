import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./Map.css";

const libraries = ["places"];
const mapContainerStyle = {
  width: "500px",
  height: "500px",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

export default function Map(props) {
  console.log("Map -> props", props);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps...";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={props.center}
        options={options}
      >
        {props.businesses.map((business) => (
          <Marker
            key={business._id}
            position={{
              lat: parseFloat(business.lat),
              lng: parseFloat(business.lng),
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
}
