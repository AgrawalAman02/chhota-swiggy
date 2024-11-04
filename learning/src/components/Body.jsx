import RestaurantCards from "./RestaurantCards";
import resList from "../utils/mockData";

const Body=()=>{
    return (
        <div className="body">
            <div  className ="search"> Search </div>
            <div className="res-container">

                {
                    resList.map((restaurant) => {
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