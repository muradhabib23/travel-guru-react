import React from 'react';
import GoogleMapReact from "google-map-react";

const distanceToMouse = (pt, mp) => {
    if (pt && mp) {
      return Math.sqrt(
        (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
      );
    }
  };
  
  const points = [
    { lat: 23.777176, lng: 90.399452 },
    { lat: 21.555999, lng: 88.505999 },
    { lat: 24.3065, lng: 91.7296 },  
  ];
  
  export default function Map() {
    return (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyB_R9dIhfmWPny18-H1OyZsO7Kq0gBLDzw",
            language: "en",
            region: "US"
          }}
          defaultCenter={{ lat: 23.777176, lng: 90.399452 }}
          defaultZoom={7}
          distanceToMouse={distanceToMouse}
        >
        </GoogleMapReact>

    );
  }