import { HEADER_LOGO_URL } from "../utils/constants";
import React, { useState, useEffect } from "react";
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
    <header className="flex bg-gray-50 justify-between items-center px-8 py-4 shadow-lg sticky top-0 z-50 border-amber-100 rounded-md">
      {/* --- Logo Section --- */}
      <div className="logo-container">
        <img
          className="w-24 rounded-full transition-transform  duration-300 hover:scale-120 hover:rotate-30 cursor-pointer"
          src={HEADER_LOGO_URL}
          alt="logo"
        />
      </div>

      {/* --- Navigation Items --- */}
      <div className="nav-items">
        <ul className="flex items-center space-x-8">
          {/* Online Status (Moved out of Link for better UX) */}
          <li className="font-medium text-gray-700 flex items-center gap-2">
            <span className={isUserOnline ? "text-green-500" : "text-red-500"}>
              ●
            </span>
            {isUserOnline ? "Online" : "Offline"}
          </li>

          {/* Nav Links */}
          <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors duration-200">
            <Link to="/about">About</Link>
          </li>
          <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors duration-200">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors duration-200">
            <Link to="/grocery">Grocery</Link>
          </li>

          {/* Login Button */}
          <li>
            <button
              className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-sm transition-all duration-200 transform active:scale-95"
              type="button"
              onClick={() => {
                setBtnName(btnName === "Login" ? "Logout" : "Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
