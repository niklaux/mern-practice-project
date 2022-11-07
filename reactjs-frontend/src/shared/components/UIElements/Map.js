import React from "react";

import "./Map.css";

const Map = (props) => {
  return <div className="map-container">
    <iframe
            title="map"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling=""
            marginHeight="0"
            marginWidth="0"
            src={
              "https://maps.google.com/maps?q=" +
              props.coordinates.lat.toString() +
              "," +
              props.coordinates.lng.toString() +
              "&t=&z=15&ie=UTF8&iwloc=&output=embed"
            }
          ></iframe>
          {/* <script
            type="text/javascript"
            src="https://embedmaps.com/google-maps-authorization/script.js?id=5a33be79e53caf0a07dfec499abf84b7b481f165"
          ></script> */}
  </div>
};

export default Map;