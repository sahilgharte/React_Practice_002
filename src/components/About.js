import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("About constructor");

     this.state = {
      userInfo: ""
    };
  }

async componentDidMount() {
    console.log("About componentDidMount");
    
    const data = await fetch("https://api.github.com/users/sahilgharte");
    const jsonUser = await data.json();

    console.log("jsonUser --> ", jsonUser);

    // ✅ FIX: Use the correct key and variable name
    this.setState({
        userInfo: jsonUser
    });
}

  componentDidUpdate() {
    console.log("About componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("About componentWillUnmount");
  }

  componentDidCatch() {
    console.log("About componentDidCatch");
  }

  render() {
    return (
      <div className="about-container">
        <h1>About Us</h1>
        <div>
          <p>This is the about page of our application.</p>
          <div className="about-component-container">
            {/* <User {...this.userInfo}/> */}
            <UserClass {...this.state.userInfo} />
            <UserClass {...this.state.userInfo} />
          </div>
        </div>
      </div>
    );
  }
}

// const About = (props) => {

//     console.log("Data From Another Component for ABout.js --> ",props.information)

//     const userInfo = {
//         name: "Sahil",
//         location: "Bavdhan, Pune",
//         role: "SDE",
//         age: 25,
//         email: "sahilgharte4@gmail"
//     };

//     return (
//         <div className='about-container'>
//                <h1>About Us</h1>
//             <div>
//             <p>This is the about page of our application.</p>
//             <div className='about-component-container'>
//                 <User {...userInfo}/>
//                 <UserClass {...userInfo}/>
//             </div>
//             </div>
//         </div>
//     );
// };

export default About;
