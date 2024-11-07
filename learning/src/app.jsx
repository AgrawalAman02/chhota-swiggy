import React, {lazy , Suspense} from "react";
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
// import Grocery from "./components/Grocery"; for making it a different bundler i commented it 

const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = ()=>{
    // checking online Status
    const onlineStatus = useOnlineStatus();
    if(!onlineStatus) return (
        <div className="online-status">
            <span ></span>
            <h1>&#128532;Looks like You are offline!</h1>
            <h2>Please check your Internet Connection </h2>
        </div>
    )
    return (
        <div className = "app">
            <Header/>
            <Outlet/>
            {/* <Footer/> */}
        </div>
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

