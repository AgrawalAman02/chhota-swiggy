import { LOGO_URL } from "../utils/constants";  
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import logo from "./images/logo.png";
import UserContext from "../utils/UserContext";
import cart from "./images/cart.png";
import { useSelector } from "react-redux";
const Header  = ()=>{
    const [btnName, setBtnName] = useState("LogIn");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    
    // subscribing to the store using the selector which is a hook 
    const cartItems = useSelector((store)=>store.cart.items);

    return (
        <div className="fixed top-0 left-0 w-full flex justify-between h-20 p-3 items-center border-b shadow-lg bg-white z-50 ">
            <div className="logo-container w-44 mx-12  flex justify-center items-center fill-orange-500"> 
                <img  src={logo} alt="Logo"  />
            </div>
            <div className="nav-container items-center">
                <ul className="flex p-4 m-4 items-center list-none gap-5 text-base ">
                    <li className="nav-list"> Online Status : {onlineStatus ?<span>&#9989;</span>:<span>&#10060;</span>} </li>
                    <li>
                        <Link to="/" className="nav-list">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-list">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-list">Contact Us</Link>
                    </li>
                    <li>
                        <Link to = "/grocery" className="nav-list">InstaMart</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="nav-list flex"><img src={cart} className="w-7 h-7" alt="Cart" />{cartItems.length===0 ? null : `(${cartItems.length})`}</Link>
                    </li>
                    <li>
                        Hii {loggedInUser}
                    </li>
                    <button 
                        className="login-btn border rounded-2xl p-2 m-1 border-orange-500 bg-orange-500 text-white  shadow-md hover:shadow-lg cursor-pointer w-20 hover:scale-95 hover:transition-all "
                        onClick={()=>{
                            btnName==="LogIn" ? setBtnName("LogOut") : setBtnName("LogIn");
                        }}
                    >{btnName}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;