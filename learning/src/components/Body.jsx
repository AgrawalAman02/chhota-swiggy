import RestaurantCards from "./RestaurantCards";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
const Body=()=>{

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5547375&lng=88.3502031&collection=80479&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

        const json = await data.json();

        const restaurants = json?.data?.cards?.slice(2);

        setAllRestaurants(restaurants);
        setListOfRestaurants(restaurants);
    }

    // showing a shimmer ui while loading
    if(listOfRestaurants.length === 0){
        return <Shimmer/>
    }

    return (
        <div className="body">
            <div  className ="filter"> 
                <button 
                className="filter-btn"
                onClick={()=>{
                    const filteredList = allRestaurants.filter(
                        (res)=> res.card.card.info.avgRating>4
                    );
                    setListOfRestaurants(filteredList);
                }}
                >Top Rated Restaurants</button>

                <button
                className="clear-filter"
                onClick={()=>{
                    setListOfRestaurants(allRestaurants);
                }}
                >&#10060;</button>

            </div>
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