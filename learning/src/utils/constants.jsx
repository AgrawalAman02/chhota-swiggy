//  named export 

const isProduction = process.env.NODE_ENV === 'production';

export const BASE_API_URL = isProduction 
    ? "https://chhota-swiggy.vercel.app/" // Your Vercel deployment URL
    : "http://localhost:8080/";

export const CDN_URL = 
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const S_API = `${BASE_API_URL}https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5929606&lng=88.3646054&collection=80479&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null`;

export const MENU_API = (restaurantId) => 
    `${BASE_API_URL}https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5929606&lng=88.3646054&restaurantId=${restaurantId}`;