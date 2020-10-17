import React, { useState, useEffect, Children } from "react";
import API from "../utils/API";
import {useParams} from "react-router-dom";
import axios from "axios";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import { BusinessList, BusinessListItem } from "../components/BusinessList/"

let latitude;
let longitude;

function Businesses() {
    const [currentBus, setCurrentbus] = useState({});
    const {id}= useParams();

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
        const queryUrl='https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search';
      
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

    yelpBusiness(latitude, longitude)

    return(
        <Container fluid>
        <Row>
          <Col size="md-6">
          <Jumbotron>
           <h3>Welcome to Veteran Discount App</h3>
         </Jumbotron>
         <form>
             <Input name="title" placeholder="Business Name (required)" />
             {/* <Input name="author" placeholder="Author (required)" />
             <TextArea name="synopsis" placeholder="Synopsis (Optional)" /> */}
              <FormBtn>Search</FormBtn>
           </form>
           </Col>
          <Col size="md-6 sm-12">
             <Jumbotron>
              <h3>Businesses On My List</h3>
             </Jumbotron>
        
        <div>
            <h1>BUSINESS PAGE</h1>
            <h1>BUSINESS NAME</h1>
            <h2>Map goes here</h2>
            <button>Generate QR Code</button>
            
        </div>

        </Col>
        </Row>
     </Container>
    )

}

export default Businesses;
