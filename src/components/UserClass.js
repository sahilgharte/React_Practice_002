import React, { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    // console.log("Inside constructor prop--> ", this.props);

    this.state = {
      btnClick: 0,
    };
  }

  componentDidMount() {
    // console.log("Inside componentDidMount");
  }

  componentDidUpdate() {
    // console.log("Inside componentDidUpdate");
  }

  componentWillUnmount() {
    // console.log("Inside componentWillUnmount");
  }

  render() {
    const { name, location, login, avatar_url, id } = this.props;

    return (
      <div className="m-4 p-6 w-[300px] bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center">
        
        {/* Avatar Image */}
        <div className="relative mb-4">
            <img 
                src={avatar_url} 
                alt={name}
                className="w-32 h-32 rounded-full object-cover border-4 border-orange-100 shadow-sm"
            />
            <span className="absolute bottom-1 right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></span>
        </div>

        {/* User Info */}
        <h2 className="text-xl font-bold text-gray-800 mb-1 text-center">
            {name}
        </h2>
        <p className="text-xs text-orange-500 font-semibold mb-4 uppercase tracking-wide">
            (Class Component)
        </p>

        <div className="w-full text-sm text-gray-600 space-y-2 mb-6 px-2 text-center">
            <p>📍 {location || "World Wide Web"}</p>
            <p>📧 {login}@github.com</p>
            <p className="text-xs text-gray-400">ID: {id}</p>
        </div>

        {/* Counter Section */}
        <div className="w-full pt-4 border-t border-gray-100 flex flex-col items-center gap-3">
            <p className="text-gray-700 font-medium">
                Count: <span className="text-blue-600 text-lg font-bold">{this.state.btnClick}</span>
            </p>
            
            <div className="flex gap-3">
                <button
                    className="px-4 py-2 bg-red-100 text-red-600 font-bold rounded-lg hover:bg-red-200 transition-colors text-sm"
                    onClick={() => {
                        this.setState({
                            btnClick: this.state.btnClick - 1,
                        });
                    }}
                >
                    - Dec
                </button>

                <button
                    className="px-4 py-2 bg-green-100 text-green-600 font-bold rounded-lg hover:bg-green-200 transition-colors text-sm"
                    onClick={() => {
                        this.setState({
                            btnClick: this.state.btnClick + 1,
                        });
                    }}
                >
                    + Inc
                </button>
            </div>
        </div>

      </div>
    );
  }
}

export default UserClass;