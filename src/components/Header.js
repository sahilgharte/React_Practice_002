import  {HEADER_LOGO_URL} from "../utils/constants";
import React, {useState, useEffect} from 'react';
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

     const [btnName, setBtnName] = useState("Login");
     const isUserOnline = useOnlineStatus();

     useEffect(() => {
        console.log("Header useEffect called");
     }, []);


     console.log("Header rendered");

    return (
        <div className='header-container'>
            <div className='header'>
                <div className='header-logo'>
                    <img src={HEADER_LOGO_URL} alt="logo" width="75px" />
                </div>
            </div>

            <div className='header-title'>

                <ul className='header-ul'>
                    <Link>{isUserOnline ? "🟢 Online" : "🔴 Offline"}   ||   </Link>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/grocery"><li>Grocery</li></Link>
                    <li><button className="login-button" type="button" onClick={() => {
                        console.log("Button clicked ", btnName);
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                        // alert("You clicked " + btnName + " button");
                        // setBtnName(btnName);
            
                    
                    }}>{btnName}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;