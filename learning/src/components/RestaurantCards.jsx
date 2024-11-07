import { CDN_URL } from "../utils/constants";  

const RestaurantCards = (props)=>{
    const {resData} = props;
    const { info } = resData?.card?.card;
    const { name, avgRating, costForTwo, sla, cuisines, cloudinaryImageId } = info;
    const {slaString }= sla;
    let displayedCuisines = '';
  
    if (cuisines.length > 3) {
      displayedCuisines = `${cuisines[0]}, ${cuisines[1]}, ..., ${cuisines[cuisines.length - 1]}`;
    } else {
      displayedCuisines = cuisines.join(", ");
    }

    return (
        <div className="w-80 h-72 my-4 rounded-xl bg-slate-50 hover:bg-gray-200 hover:scale-105 transition-all hover:shadow-xl hover:border-slate-950 flex flex-col justify-start gap-1.5">
            <img src={ CDN_URL  +cloudinaryImageId}
            alt="res-logo"
            className="res-logo w-full h-3/5 rounded-t-xl" /> 
            <div className="w-full gap-1.5 px-2 flex justify-between"> 
                <div className="flex flex-col w-full gap-0.5 p-0.5 items-start">
                    <h3 className="font-bold font-serif" >{name}</h3>           
                    <h5 className="text-sm font-light font-mono">{displayedCuisines}</h5> 
                </div>

                <div className="flex flex-col gap-1 p-0.5 w-3/5 items-end">
                    <h5 className="text-base font-light font-mono">{avgRating }&#11088;</h5>
                    <h5 className="text-base font-light font-mono">{costForTwo}</h5>
                    <h5 className="text-sm font-light font-mono">{slaString}</h5>
                </div>
            </div>  
            
        </div>
    )
};

export default RestaurantCards;