import { LOGO_URL } from "../utils/constants";  
import { useState } from "react";
import { Link } from "react-router-dom";

const Header  = ()=>{
    const [btnName, setBtnName] = useState("LogIn");
    return (
        <div className = "header">
            <div className="logo-container"> 
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-container">
                <ul className="">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
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