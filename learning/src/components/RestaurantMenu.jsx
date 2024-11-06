import { useEffect , useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurantsMenu = ()=>{

    const [resInfo, setResInfo] = useState([]);
    
    useEffect(()=>{
        fetchData();
    },[]);
    const {resId} = useParams();
    console.log(resId);
    const fetchData  = async ()=>{
        const data  = await fetch(MENU_API+resId);
        const json =await data.json();
        // console.log(json); 
        setResInfo(json?.data?.cards);
    };

    if(resInfo.length===0) return <Shimmer/> ;

    const {
        id,
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
           
            
            <h2>Menu</h2>
             {cardArray.map((cardItem) => {
                const title = cardItem?.card?.card?.title || `Menu`;
                // const itemCards = cardItem?.card?.card?.itemCards || cardItem?.card?.card?.categories || [];
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

                // const uKey = item.
                return (

                <details key={cardData?.title || `section-${index}`}>
                    <summary>{title}</summary>
                    {/* {console.log(itemCards)} */}
                    {items.map((itemCard) => (
                    <div className="itemCard" key={itemCard?.card?.info?.id || itemCard?.card?.info?.name}>
                        
                        <p>{itemCard?.card?.info?.name}</p>
                    </div>
                    ))}
                </details>
                );
            })}
        </div>

    )
}

export default RestaurantsMenu;