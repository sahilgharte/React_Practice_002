import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("About constructor");

    this.state = {
      userInfo: "",
    };
  }

  async componentDidMount() {
    // console.log("About componentDidMount");

    const data = await fetch("https://api.github.com/users/sahilgharte");
    const jsonUser = await data.json();

    // console.log("jsonUser --> ", jsonUser);

    this.setState({
      userInfo: jsonUser,
    });
  }

  render() {
    // console.log("About render");

    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Content Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-8">
          
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-4">
              About Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Welcome to our application! We are passionate about food and technology.
              Here is the team behind this project.
            </p>
          </div>

          {/* User Cards Container */}
          <div className="flex flex-wrap justify-center gap-8">
            {/* Passing data to Child Class Components */}
            {/* <User {...this.state.userInfo} /> */}
            
            {/* Render a second one just for demo, or remove if not needed */}
            <UserClass {...this.state.userInfo} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;