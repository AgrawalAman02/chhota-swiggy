import { LOGO_URL } from "../utils/constants";  
import { useState } from "react";

const Header  = ()=>{
    const [btnName, setBtnName] = useState("LogIn");
    return (
        <div className = "header">
            <div className="logo-container"> 
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-container">
                <ul className="">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button 
                        className="login-btn"
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