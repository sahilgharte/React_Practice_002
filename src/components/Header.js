import  {HEADER_LOGO_URL} from "../utils.s/constants";
import React, {useState} from 'react';
const Header = () => {

     const [btnName, setBtnName] = useState("Login");


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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
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