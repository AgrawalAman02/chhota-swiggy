import React, { useState, useEffect } from "react";
import RestaurantCards ,{withPromotedLabel} from "./RestaurantCards";
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
            const data = await fetch(S_API,{
                headers :{
                    'x-cors-api-key' : 'temp_b432e363c3d0cdf878dacf15b4828767',
                }
            });
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
            
            <h1>&#128532;Looks like You are offline!</h1>
            <h2>Please check your Internet Connection </h2>
        </div>
    )

    const PromotedCard = withPromotedLabel(RestaurantCards);

    // showing a shimmer ui while loading  -- conditional rendering
    return listOfRestaurants.length === 0 ? (
        <Shimmer/> 
    ) :
    (
        <div className="p-6 flex-col justify-start   h-[70vh] gap-2.5">
            <SubHeader
                allRestaurants = {allRestaurants}
                setListOfRestaurants = {setListOfRestaurants}
                
            />

            <div className="grid grid-cols-[repeat(auto-fill,_minmax(330px,_1fr))] place-items-center gap-y-3 gap-x-3"> {
                    listOfRestaurants.map((restaurant) => {
                        const resId = restaurant?.card?.card?.info.id;

                        const resRoute = `/restaurants/${resId}`;
                        return (
                            <Link 
                                to={resRoute}
                                className = "resCardLink"
                                key={resId}
                            >
                                {restaurant?.card?.card?.info?.promoted  ? 
                                <PromotedCard resData={restaurant}/> 
                                : 
                                <RestaurantCards resData={restaurant} />}
                                
                            </Link>
                            
                        );
                    })
                }
            </div>
        </div>
    )
    
}
export default Body;