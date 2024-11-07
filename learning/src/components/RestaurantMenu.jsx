import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantsMenu = ()=>{  
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    if(resInfo.length===0) return <Shimmer/> ;
    const {
        name,
        cloudinaryImageId , 
        costForTwoMessage, 
        cuisines, 
        avgRating ,
        totalRatingsString,
        areaName,
        sla
    } = resInfo[2]?.card?.card?.info|| {};

    const cardArray = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(2);
    
    return (
        <div className="restaurant-menu">
            <h1>{name}</h1>
            <div className="menu-header">
                <h4 className="menu-header-heading">
                    <span>{avgRating}&#11088; ({totalRatingsString})</span>
                    <span>&#8226;</span>
                    <span>{costForTwoMessage}</span>
                </h4>
                <h5 className="cuisines">{cuisines.join(", ")}</h5>
                <p><span className="Outlet">&#8226;     Outlet :  </span><span>{areaName}</span></p>
                <p className="del-time">&#8226;     {sla?.slaString}</p>
            </div>
           
            
            <h4 className="menu">Menu</h4>
            {cardArray.map((cardItem) => {
                const title = cardItem?.card?.card?.title || `Menu`;
                const cardData = cardItem?.card?.card || cardItem?.card?.card || [];

                let items = [];
                if(cardData?.itemCards){
                    items = cardData.itemCards; 
                }
                else if(cardData?.categories){
                    cardData.categories.forEach((category)=>{
                        if(category.itemCards){
                            items = items.concat(category.itemCards);
                        }
                    });
                }

                if (!items.length) {
                    return null;
                }

                return (
                <details key={cardData?.title || `section-${index}`}>
                    <summary><h3>{title}</h3></summary>
                    {/* {console.log(itemCards)} */}
                    {items.map((itemCard) => (
                    <div className="dishCard" key={itemCard?.card?.info?.id || itemCard?.card?.info?.name}>
                        
                        <div className="dishCard-description">
                            <h4 className="dishName">{itemCard?.card?.info?.name}</h4>
                            <p>Rs. {itemCard?.card?.info?.price/100}</p>
                            <p className="dish-Description">{itemCard?.card?.info?.description}</p>
                        </div>
                    </div>
                    ))}
                </details>
                );
            })}
        </div>
    )
}

export default RestaurantsMenu;