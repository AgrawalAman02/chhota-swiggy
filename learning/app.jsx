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


const resObj = {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "15267",
      "name": "Kasturi Restaurant",
      "cloudinaryImageId": "qhq7lcgv502nymy0znwo",
      "locality": "Ruby Area",
      "areaName": "South Kolkata",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Bengali",
        "Seafood"
      ],
      "avgRating": 4.4,
      "parentId": "2046",
      "avgRatingString": "4.4",
      "totalRatingsString": "35K+",
      "promoted": true,
      "adTrackingId": "cid=20729294~p=0~adgrpid=20729294#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=15267~eid=ad0ef53d-1440-4434-bcef-0fa6c2c4976c~srvts=1730710382857~collid=83633",
      "sla": {
        "deliveryTime": 37,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-04 23:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Bengali.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {},
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "Rxawards/_CATEGORY-Bengali.png",
                  "description": "Delivery!"
                }
              }
            ]
          },
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.1",
          "ratingCount": "147"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      "campaignId": "20729294"
    },
    "analytics": {},
    "cta": {
      "link": "swiggy://menu?restaurant_id=15267&source=collection&query=North%20Indian",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  };




const RestaurantCards = (props)=>{
    const {resData} = props;

    return (
        <div className="res-cards">
            <img src="https://b.zmtcdn.com/data/pictures/1/20416271/ac8ab32b03b531b575dfe838604bfaa9_o2_featured_v2.jpg?output-format=webp" 
            alt="res-logo"
            className="res-logo" />
            <div className="res-card-bottom"> 
                <div className="res-card-left">
                    <h3>{resData.info.name}</h3>
                    <h5>{resData.info.cuisines.join(", ")}</h5>
                </div>

                <div className="res-card-right">
                    <h5>{resData.info.avgRating}</h5>
                    <h5>{resData.info.sla.slaString}</h5>
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
                resData = {resObj} />

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

