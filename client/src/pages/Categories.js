import React, { useState, useEffect } from "react";
import API from "../utils/API";
import './Home.js'
import { BusinessList, BusinessListItem } from "../components/BusinessList/index";

function Categories() {
    const [categories, setCategories] = useState([]);
    const [business, setBusiness] = useState([]);
    const [currentCat, setCurrentCat] = useState();

    useEffect(() => {
        loadCategories();
    });

    function loadCategories() {
        API.getCategories(categories)
            .then(res => {
                setCategories(res.data)
            });
    };

    function handleClick(event) {
        event.preventDefault();
        setCurrentCat(event.target.innerHTML)
        API.getCategory(event.target.innerHTML)
            .then(res => {
                setBusiness(res.data)
            }); 
    };


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
                            return <BusinessListItem business={business.business} description={business.description} discount={business.discount} id={business._id} key={i}/>
                        })
                    }
                </BusinessList>
            </div>

        </div>
    )

}

export default Categories;