import React, { useEffect, useRef, useState } from 'react';
import css from "./Locator.css";
import {
    CitySelect,
    CountrySelect,
    StateSelect,
    LanguageSelect,
  } from "react-country-state-city";

  import "react-country-state-city/dist/react-country-state-city.css";


  import { MapContainer, TileLayer, useMap , Marker , Popup} from 'react-leaflet'



function Locator() {

    const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);

  const position = [51.505, -0.09]



  const handlesubmit = async(e)=>{
    e.preventDefault();
    console.log("Submited");
  }

  return (<>

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
        }}
        placeHolder="Select City"
      />


      <button className="btn" onClick={handlesubmit}>Search</button>
    {/* </ul>   */}
  </form>
    <div className="locator" style={{overflow:"hidden"}}>

    <MapContainer
    center={{ lat: 51.505, lng: -0.09 }}
    zoom={13}
    scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {/* <LocationMarker /> */}
  </MapContainer>,
        </div>
    </>
  )
}

export default Locator
