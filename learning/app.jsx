import React from "react";
import ReactDOM from "react-dom/client";

// !!!! Now we are creating an app of food dellivery system . lets see what the ui looks like
/*
# Header
    -Logo
    -Nav bar

# Body
    -Search bar
    - Reastaurant Container
        - Restaurant Card
            - img, name of the rest, rating, cuisine , delivery time, etc

# Footer
    - Copywrites
    - Social Media Links
    - Address
    - Contact Us

*/

// !!!! Lets create the components for the above UI



const Header  = ()=>{
    return (
        <div className = "header">
            <div className="logo-container"> 
                <img className="logo" src="https://images-platform.99static.com/O3ZHfJeHB741xpyYH95tWvMsdTI=/0x0:1279x1279/500x500/top/smart/99designs-contests-attachments/63/63966/attachment_63966256" />
            </div>
            <div className="nav-container">
                <ul className="">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCards = (props)=>{
    return (
        <div className="res-cards">
            <img src="https://b.zmtcdn.com/data/pictures/1/20416271/ac8ab32b03b531b575dfe838604bfaa9_o2_featured_v2.jpg?output-format=webp" 
            alt="res-logo"
            className="res-logo" />
            <div className="res-card-bottom"> 
                <div className="res-card-left">
                    <h3>{props.resName}</h3>
                    <h5>{props.cuisine}</h5>
                </div>

                <div className="res-card-right">
                    <h5>{props.rating}</h5>
                    <h5>{props.time}</h5>
                </div>
            </div> 
            
            
        </div>
    )
};

const Body=()=>{
    return (
        <div className="body">
            <div  className ="search"> Search </div>
            <div className="res-container">
                <RestaurantCards
                resName= "Rang De Basanti"
                cuisine ="North Indian , Kebab , Biryani"
                rating ="4.1*"
                time ="29 mins" />

                <RestaurantCards 
                resName= "KFC"
                cuisine ="Fast Food, Burger, Rolls"
                rating ="4.4    *"
                time ="28 mins"/>
                <RestaurantCards />
                <RestaurantCards />
                <RestaurantCards />
                <RestaurantCards />
                <RestaurantCards />
                <RestaurantCards />
                <RestaurantCards />
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return (
        <div className = "app">
            <Header/>
            <Body/>
            {/* <Footer/> */}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

