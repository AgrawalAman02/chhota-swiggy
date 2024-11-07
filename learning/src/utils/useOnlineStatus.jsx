import { useState, useEffect } from "react";
const useOnlineStatus = ()=>{
    const [onlineStatus , setOnlineStatus] = useState(true);
    // check if online or not 
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        });

        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        });
    })

    return onlineStatus;
}

export default useOnlineStatus;