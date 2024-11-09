import React, {lazy , Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Suspense } from "react";
import Shimmer from "./components/Shimmer";
import useOnlineStatus from "./utils/useOnlineStatus.jsx";
import UserContext from "./utils/UserContext.jsx";
// import Grocery from "./components/Grocery"; for making it a different bundler i commented it 

const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = ()=>{
    // checking online Status
    const onlineStatus = useOnlineStatus();
    const [userName, setUserName] = useState("default");
    useEffect(()=>{
        // make an api call and send username ans password 
        const data = {
            name : "Aman Agrawal"
        };
        setUserName(data.name);
    },[]);
    

    return (
        <UserContext.Provider value={{loggedInUser : userName , setUserName}}>  {/* setUserName for input box in subheading */}
                <div className = "app">
                <Header/>
                <div className="pt-20">
                    {
                        (!onlineStatus) ? (
                            <div className="online-status">
                                <h1>&#128532;Looks like You are offline!</h1>
                                <h2>Please check your Internet Connection </h2>
                            </div>
                        ) :
                        <Outlet />
                    }
                    
                </div>
                {/* <Footer/> */}
            </div>
        </UserContext.Provider>
    );
};

const appRouter= createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children : ([
            {
                path: "/",
                element : <Body/>
            },
            {
                path : "about",
                element : <About />
            },
            {
                path : "contact",
                element : <Contact />
            },
            {
                path : "grocery",
                element : <Suspense fallback={
                    <div>
                        <h2>Loading...</h2>
                        <Shimmer/>
                    </div>
                }><Grocery /></Suspense>
            },
            {
                path : "restaurants/:resId",
                element: <RestaurantMenu/>
            }
        ]),
        errorElement: <Error />,
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

