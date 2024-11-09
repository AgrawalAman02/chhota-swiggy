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
        <div className="restaurant-menu flex flex-col gap-2.5 my-8 mx-[21%] p-8">
            <h1 className="text-2xl font-bold">{name}</h1>
            <div className="menu-header flex flex-col border border-gray-300 p-5 my-4 mx-0  rounded-3xl shadow-custom  bg-white gap-2">
                <h4 className="menu-header-heading flex gap-3.5 text-xl font-semibold">
                    <span className=" text-lg">{avgRating}&#11088; ({totalRatingsString})</span>
                    <span className=" text-lg">&#8226;</span>
                    <span className=" text-lg">{costForTwoMessage}</span>
                </h4>
                <h5 className="cuisines text-sm font-light font-mono text-orange-600 font-extrabold underline">{cuisines.join(", ")}</h5>
                <p><span className="Outlet text-base font-bold ">&#8226;     Outlet :  </span><span>{areaName}</span></p>
                <p className="del-time Outlet text-base font-bold">&#8226;     {sla?.slaString}</p>
            </div>
           
            
            <h4 className="menu text-xl font-semibold self-center underline  decoration-[#4b5563bf] italic block text-gray-500">Menu</h4>
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
                const categoryLength= items.length;

                return (
                <details className="bg-[#fffcf0] rounded-md shadow-custom2" key={cardData?.title || `section-${index}`}>
                    <summary className="list-none flex justify-between py-2.5 px-4 h-12 cursor-pointer text-lg text-[#30353b] leading-5 tracking-tight font-sans font-bold rounded-md"><h3>{title}({categoryLength})</h3></summary>
                    {/* {console.log(itemCards)} */}
                    {items.map((itemCard) => (
                    <div className="dishCard flex justify-between items-center gap-8 px-6 py-2.5 font-semibold cursor-pointer border-b-[rgb(228, 226, 221)]" key={itemCard?.card?.info?.id || itemCard?.card?.info?.name}>
                        
                        <div className="dishCard-description flex flex-col gap-2 ">
                            <h4 className="dishName text-lg font-bold text-[#02060CBF] font-sans">{itemCard?.card?.info?.name}</h4>
                            <p>Rs. {itemCard?.card?.info.price/100 || itemCard?.card?.info.defaultPrice/100}</p>
                            <p className="dish-Description text-base text-[#02060C99] font-normal my-2 mx-0 font-sans">{itemCard?.card?.info?.description}</p>
                        </div>
                        <div className=" w-12 self-start">
                            <button className="border p-1 rounded-xl border-green-500 ">+Add</button>
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