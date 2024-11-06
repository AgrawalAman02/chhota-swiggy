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
                <ul >
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
                        <Link to="/cart" className="nav-list">Cart</Link>
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