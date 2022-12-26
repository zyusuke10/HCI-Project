import React from "react";
import { MapContainer, TileLayer, Popup, Marker, useMap } from "react-leaflet";
import { UseAppContext } from "../context/appContext.js";
import "../css/map.css";
import UseGeolocation from "../hooks/useGeolocation";
import * as L from "leaflet";
const map = () => {
  const zoom = 11;
  const location = UseGeolocation();
  const currentPosition = [location.coordinates.lat, location.coordinates.lng];
  const { events } = UseAppContext();

  const LeafIcon = L.Icon.extend({
    options: {},
  });
  const greenIcon = new LeafIcon({
    iconUrl:
      "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF",
  });
  return (
    <div className="mapContainer">
      <MapContainer center={[53.958332, -1.080278]} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={currentPosition}>
          <Popup>You are here</Popup>
        </Marker>

        <Marker position={[53.95582, -1.07994]} icon={greenIcon}>
          <Popup maxWidth="150" maxHeight="150">
            <img src={events[0].image} alt="hero" className="picture" />
            <br></br>
            One Team Scavenger York
            <br></br>
            16th Dec 11:00am - 5:00pm
          </Popup>
        </Marker>

        <Marker position={[53.95140132, -1.01862929]} icon={greenIcon}>
          <Popup maxWidth="150" maxHeight="150">
            <img src={events[1].image} alt="hero" className="picture" />
            <br></br>
            York Winter 10km
            <br></br>
            25th Feb 9:00am - 5:00pm
          </Popup>
        </Marker>

        <Marker position={[53.9821812119, -1.09885811806]} icon={greenIcon}>
          <Popup maxWidth="150" maxHeight="150">
            <img src={events[2].image} alt="hero" className="picture" />
            <br></br>
            York's Strongest Man & Woman 2023
            <br></br>
            11th Dec 10:00am
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default map;
