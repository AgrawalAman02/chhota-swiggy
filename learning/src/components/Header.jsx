import { LOGO_URL } from "../utils/constants";  
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header  = ()=>{
    const [btnName, setBtnName] = useState("LogIn");
    const onlineStatus = useOnlineStatus();
    return (
        <div className = "flex justify-between h-28 p-3 align-middle bg-yellow-100">
            <div className="logo-container w-28"> 
                <img className="w-28" src={LOGO_URL} />
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