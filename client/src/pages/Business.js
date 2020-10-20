import React, { useState, useEffect, Children } from "react";
import API from "../utils/API";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../pages/Home.js'

let latitude;
let longitude;

function Businesses() {
  const [currentBus, setCurrentbus] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getPosition();
    loadBusiness(id);

  });

  function loadBusiness(id) {
    API.getBusiness(id)
      .then(res => {
        console.log(res.data.business)
        setCurrentbus(res.data.business)
      })
  };

  function getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      //console.log(showPosition);
    }
    function showPosition(position) {
      console.log(
        "Latitude: " +
        position.coords.latitude +
        " " +
        "Longitude: " +
        position.coords.longitude
      );
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
    }
  }

  function yelpBusiness(latitude, longitude) {
    const queryUrl = 'https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search';
console.log ("current", currentBus);
    axios.get(queryUrl, {
      headers: {
        Authorization: `Bearer 9AvFmvbitzJpbSlJPaDKPmZbkrL3bKKfqklkwvjYCPZ1xXVwI76ygHd3MJeM9Lglb9kKYbcgfBYFyfN-YFpn6OfsxYKkAe-AP1do3P4Z35iCUh9QflOthO_BaQuLX3Yx`
      },
      params: {
        term: currentBus,
        latitude: latitude,
        longitude: longitude,
        sort_by: "distance",
        limit: "3"
      }
    })
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  function clickBus(event){

  }
  yelpBusiness(latitude, longitude)

  return (
    <div className='card'>
      <h2>BUSINESS PAGE</h2>
      <h2>BUSINESS NAME</h2>
      <h2>Map goes here</h2>
      <button>Generate QR Code</button>

    </div>
  )

}

export default Businesses;
