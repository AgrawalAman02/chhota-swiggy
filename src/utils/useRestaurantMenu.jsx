import { useEffect , useState } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async ()=>{
        const data = await fetch(MENU_API+resId,{
            headers :{
                'x-cors-api-key' : 'temp_b432e363c3d0cdf878dacf15b4828767'
            }
        });
        const json = await data.json();
        setResInfo(json?.data?.cards);
    }

    return resInfo;
}

export default useRestaurantMenu;