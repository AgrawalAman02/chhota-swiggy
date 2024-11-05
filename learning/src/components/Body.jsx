import React, { useState, useEffect } from "react";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";
import SubHeader from "./SubHeader";
import { S_API } from "../utils/constants";
const Body=()=>{
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
        const data = await fetch(S_API);
        const json = await data.json();
        const restaurants = json?.data?.cards?.slice(2) || [];
        setAllRestaurants(restaurants);
        setListOfRestaurants(restaurants);
        } catch (error) {
        console.error("Error fetching data:", error);
        }
    };
        
    // showing a shimmer ui while loading  -- conditional rendering
    return listOfRestaurants.length === 0 ? (
        <Shimmer/> 
    ):
    (
        <div className="body">
            <SubHeader
                allRestaurants = {allRestaurants}
                setListOfRestaurants = {setListOfRestaurants}
                
            />

            <div className="res-container">

                {
                    listOfRestaurants.map((restaurant) => {

                        return (
                          <RestaurantCards key={restaurant?.card?.card?.info.id} resData={restaurant} />
                        );
                    })
                    

                }

            </div>
        </div>
    )
    
}
export default Body;