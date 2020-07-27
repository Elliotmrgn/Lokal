import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyle from "./mapStyle";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const options = {
  styles: mapStyle,
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
        zoom={13}
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
