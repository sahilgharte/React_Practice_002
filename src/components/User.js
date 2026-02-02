import { useState } from "react";

const User = (props) => {
  const [btnClick, setBtnClick] = useState(0);

  return (
    <div className="m-4 p-6 max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300">
      
      {/* Profile Image Placeholder */}
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-4xl shadow-inner">
          👤
        </div>
      </div>

      {/* User Info */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">{props.name}</h2>
        <p className="text-orange-500 font-medium text-sm mb-3">{props.role}</p>
        
        <div className="text-gray-600 text-sm space-y-1">
          <p>📍 {props.location}</p>
          <p>📧 {props.email}</p>
          <p>📞 {props.mobile}</p>
        </div>
      </div>

      {/* Interactive Counter Section (State Demo) */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-center">
        <p className="text-gray-700 font-semibold mb-3">
          Count: <span className="text-blue-600 text-lg">{btnClick}</span>
        </p>
        
        <div className="flex justify-center gap-3">
          <button
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-bold rounded-lg shadow transition-colors"
            onClick={() => setBtnClick(btnClick - 1)}
          >
            - Decrease
          </button>
          
          <button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold rounded-lg shadow transition-colors"
            onClick={() => setBtnClick(btnClick + 1)}
          >
            + Increase
          </button>
        </div>
      </div>

    </div>
  );
};

export default User;