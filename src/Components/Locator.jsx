import React, { useEffect, useRef, useState } from "react";
import css from "./Locator.css";
import GoogleMapReact from "google-map-react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
} from "react-country-state-city";

import "react-country-state-city/dist/react-country-state-city.css";
import { useFetcher } from "react-router-dom";

function Locator() {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);

  const [places, setplace] = useState([]);
  // const [coordinates, setcoordinates] = useState({ lat: 0, lng: 0 });
  const [location, setlocation] = useState({ lat: 0, lng: 0 });
  const [coordinates, setcoordinates] = useState({
    lat: 29.6386837,
    lng: 77.0794705,
  });
  const [bounds, setbounds] = useState(null);

  let key = process.env.REACT_APP_MAP_KEY;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setlocation({ lat: parseFloat(latitude), lng: parseFloat(longitude) });
      });
    }
  }, []);

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("Submited");
  };



  useEffect(()=>{
    console.log(location);
  } , [location]);

  return (
    <>
      <form action="/" className="locatorform" onSubmit={handlesubmit}>
        {/* <ul className="locatorformul"> */}
        {/* <h6>Country</h6>
      <CountrySelect
        onChange={(e) => {
          setCountryid(e.id);
          console.log(countryid);
        }}
        placeHolder="Select Country"
      /> */}

        <StateSelect
          countryid={101}
          onChange={(e) => {
            setstateid(e.id);
            console.log(countryid);
          }}
          placeHolder="Select State"
        />
        <CitySelect
          countryid={101}
          stateid={stateid}
          onChange={(e) => {
            console.log(e);
            console.log({ lat: e.latitude, lng: e.longitude });
            setlocation({ lat: parseFloat(e.latitude), lng: parseFloat(e.longitude) });
          }}
          placeHolder="Select City"
        />

        {/* <button className="btn" onClick={handlesubmit}>
          Search
        </button> */}
        {/* </ul>   */}
      </form>
      <div className="locator">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyC-hhcEfNl2gJ8RCxr-snSWqgAIHZEvDwE",
          }}
          // defaultCenter={coordinates}
          center={location}
          defaultZoom={0}
          zoom={10}
          margin={[20, 20, 20, 20]}
          options={{
            // For example, you can set the map type (roadmap, satellite, terrain, hybrid)
            mapTypeId: "roadmap",
            // Other options can be added here
          }}
          onChange={(e) => {
            setcoordinates({ lat: e.center.lat, lng: e.center.lng });
            setbounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          }}
          onChildClick={""}
        ></GoogleMapReact>
      </div>
    </>
  );
}

export default Locator;
