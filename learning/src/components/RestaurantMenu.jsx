import { useEffect , useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantsMenu = ()=>{

    const [resInfo, setResInfo] = useState([]);
    
    useEffect(()=>{
        fetchData();
    },[]);
    const {resId} = useParams();
    console.log(resId);
    const fetchData  = async ()=>{
        const data  = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5929606&lng=88.3646054&restaurantId=${resId}&catalog_qa=undefined&query=Pasta&submitAction=ENTER`);
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
            {/* <details>
                <summary>{resTitle}</summary>
                <div>1efjew</div>
                <div>39093029</div>
                <div><p>efjnwnje</p></div>
                <div><p>kjefkwnfwn</p></div>
            </details> */}
             {cardArray.map((cardItem) => {
                const title = cardItem.card?.card?.title || "Menu";
                const itemCards = cardItem.card?.card?.itemCards || [];

                return (
                <details key={cardItem.card?.card?.id || title}>
                    <summary>{title}</summary>
                    {itemCards.map((itemCard) => (
                    <div className="itemCard" key={itemCard.card?.info?.id || itemCard.card?.info?.name}>
                        <p>{itemCard.card?.info?.name}</p>
                    </div>
                    ))}
                </details>
                );
            })}
        </div>

    )
}

export default RestaurantsMenu;