import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 mt-auto w-full">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Section: Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-orange-500">Food App</h2>
          <p className="text-gray-400 text-sm mt-1">
            © 2026 Sahil Gharte. All rights reserved.
          </p>
        </div>

        {/* Middle Section: Links */}
        <div className="flex gap-6 text-gray-300 font-medium">
          <a href="#" className="hover:text-orange-400 transition-colors">About</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Careers</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Support</a>
        </div>

        {/* Right Section: Socials */}
        <div className="flex gap-4">
          <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
            🐦
          </span>
          <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
            📸
          </span>
          <span className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
            💼
          </span>
        </div>
      </div>
      
      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-xs">
        Made with 🧡 and React
      </div>
    </footer>
  );
};

export default Footer;