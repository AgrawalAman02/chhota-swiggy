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
        <div className="w-80 h-80 my-4 rounded-xl bg-slate-400">
            <img src={ CDN_URL  +cloudinaryImageId}
            alt="res-logo"
            className="res-logo w-full h-3/4 rounded-t-xl" /> 
            <div className="res-card-bottom"> 
                <div className="res-card-left ">
                    <h3 >{name}</h3>           
                    <h5>{displayedCuisines}</h5> 
                </div>

                <div className="res-card-right">
                    <h5>{avgRating }&#11088;</h5>
                    <h5>{costForTwo}</h5>
                    <h5>{slaString}</h5>
                </div>
            </div>  
            
        </div>
    )
};

export default RestaurantCards;