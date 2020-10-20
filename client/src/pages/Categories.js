import React, { useState, useEffect, Link } from "react";
import API from "../utils/API";
import './Home.js'
import { BusinessList, BusinessListItem } from "../components/BusinessList/index";
import axios from "axios"

function Categories() {
    const [categories, setCategories] = useState([]);
    const [business, setBusiness] = useState([]);
    const [currentCat, setCurrentCat] = useState();
    const [currentBus, setCurrentbus] = useState("");

    useEffect(() => {
        loadCategories();
    });

    function loadCategories() {
        API.getCategories(categories)
            .then(res => {
                setCategories(res.data)
            });
    };
    function handleClickBus(businessclicked, location) {
      //  event.preventDefault();
        console.log("search clicked:", businessclicked )
       // setCurrentCat(event.target.innerHTML)
       setCurrentbus(businessclicked)
        yelpBusiness(businessclicked,location)

        // API.getCategory(event.target.innerHTML)
        //     .then(res => {
        //         setBusiness(res.data)
        //     }); 
    };
    function handleClick(event) {
        event.preventDefault();
        console.log("search clicked:", event.target.innerHTML)
       // setCurrentCat(event.target.innerHTML)
       setCurrentCat(event.target.innerHTML)
       // yelpBusiness()

        API.getCategory(event.target.innerHTML)
            .then(res => {
                setBusiness(res.data)
            }); 
    };
////https://api.yelp.com/v3/businesses/
function yelpBusiness(currentBus,location) {
    const queryUrl = 'https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/matches';
console.log ("current", currentBus,location);
///
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
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
  
    // yelpBusiness(latitude,longitude)

    // params: {
    //     name: currentBus,
    //     latitude: latitude,
    //     longitude: longitude,
    //     sort_by: "distance",
    //     limit: "3"
    //   }
///
    axios.get(queryUrl, {
      headers: {
        Authorization: `Bearer 9AvFmvbitzJpbSlJPaDKPmZbkrL3bKKfqklkwvjYCPZ1xXVwI76ygHd3MJeM9Lglb9kKYbcgfBYFyfN-YFpn6OfsxYKkAe-AP1do3P4Z35iCUh9QflOthO_BaQuLX3Yx`
      },
      params: {
        id: business.id,       
        name: business.name,
        // address: business.location.address1,
        // city: business.location.city,
        // state: business.location.state,        
        // category: business.categories[0].title,       
        latitude: latitude,
        longitude: longitude,
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
  }


///

    return(
        <div className='card'>
            <h1>HELLO WORLD</h1>
            <ul>
                {categories.map(category => {
                    return (<li key={category._id}>
                        <a href={"/categories/" + category._id} onClick={handleClick}>
                            <strong>{category.categoryList}</strong>
                        </a>
                    </li>
                )})}
            </ul>
            <div>
                <h1>{currentCat} Businesses</h1>
                <BusinessList>
                    {
                        business.map((business, i) => {
                            return <BusinessListItem business={business.business} description={business.description} discount={business.discount} id={business._id} key={i} location={business.location} handleClick={handleClickBus}/>
                        })
                    }
                </BusinessList>
            </div>

        </div>
    )

}

export default Categories;