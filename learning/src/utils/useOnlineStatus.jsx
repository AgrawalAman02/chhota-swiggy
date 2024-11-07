import { useState, useEffect } from "react";
const useOnlineStatus = ()=>{
    const [onlineStatus , setOnlineStatus] = useState(true);
    // check if online or not 
    useEffect(()=>{
        const handleOffline = ()=>{
            setOnlineStatus(false);
        }
        const handleOnline = ()=>{
            setOnlineStatus(true);
        }

        window.addEventListener("offline",handleOffline);

        window.addEventListener("online", handleOnline);

        return () =>{
            window.removeEventListener("offline", handleOffline);
            window.removeEventListener("online", handleOnline);
        }
    })

    return onlineStatus;
}

export default useOnlineStatus;