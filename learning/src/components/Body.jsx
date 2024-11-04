import RestaurantCards from "./RestaurantCards";
import { useState } from "react";
import resList from "../utils/mockData";

const Body=()=>{

    const [listOfRestaurants , setListOfRetaurants] = useState(resList);

    return (
        <div className="body">
            <div  className ="filter"> 
                <button 
                className="filter-btn"
                onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res)=> res.card.card.info.avgRating>=4.5
                    );
                    setListOfRetaurants(filteredList);
                }}
                >Top Rated Restaurants</button>

            </div>
            <div className="res-container">

                {
                    listOfRestaurants.map((restaurant) => {
                        return (
                          <RestaurantCards key={restaurant.card.card.info.id} resData={restaurant} />
                        );
                      })
                }

            </div>
        </div>
    )
}

export default Body;