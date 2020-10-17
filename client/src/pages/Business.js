import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import API from "../utils/API";

function Businesses() {
    const [currentBus, setCurrentbus] = useState({});
    
    const {id}= useParams();
    useEffect(() => {
        loadBusiness(id);
    });

    function loadBusiness(id) {
        API.getBusiness(id)
            .then(res => {
                console.log(res.data)
                setCurrentbus(res.data)
            })
    }

    return(
        <div>
            <h1>BUSINESS PAGE</h1>
            
        </div>
    )

}

export default Businesses;
