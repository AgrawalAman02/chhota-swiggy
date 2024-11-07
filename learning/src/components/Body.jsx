import React, { useState, useEffect } from "react";
import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";
import SubHeader from "./SubHeader";
import { S_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
        
    // checking online Status
    const onlineStatus = useOnlineStatus();
    if(!onlineStatus) return (
        <div className="online-status">
            <span ></span>
            <h1>&#128532;Looks like You are offline!</h1>
            <h2>Please check your Internet Connection </h2>
        </div>
    )

    // showing a shimmer ui while loading  -- conditional rendering
    return listOfRestaurants.length === 0 ? (
        <Shimmer/> 
    ) :
    (
        <div className="p-2.5 flex-col h-[70vh] gap-2.5">
            <SubHeader
                allRestaurants = {allRestaurants}
                setListOfRestaurants = {setListOfRestaurants}
                
            />

            <div className="flex flex-wrap place-items-center items-center justify-center gap-x-8 gap-y-11 "> {
                    listOfRestaurants.map((restaurant) => {
                        const resId = restaurant?.card?.card?.info.id;

                        const resRoute = `/restaurants/${resId}`;
                        return (
                            <Link 
                                to={resRoute}
                                className = "resCardLink"
                                key={resId}
                            >
                                <RestaurantCards resData={restaurant} />
                            </Link>
                            
                        );
                    })
                }
            </div>
        </div>
    )
    
}
export default Body;