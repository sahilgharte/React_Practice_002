import React from "react";
import {Component} from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    console.log("Inside constructor prop--> ", this.props);
    // console.log("Inside constructor")

    this.state = {
      btnClick: 0,
    };
  }

  componentDidCatch() {
    console.log("Inside componentDidCatch");
  }
  componentDidMount() {
    console.log("Inside componentDidMount");
    // Can call api here
  }

  componentDidUpdate() {
    console.log("Inside componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Inside componentWillUnmount");
  }

  render() {
    return (
      <div className="user-container">
        <img src={this.props.avatar_url} />
        <h2>Name: {this.props.name} (class)</h2>
        <div>Mobile: {this.props.mobile}</div>
        <div>Email: {this.props.login}4@gmail.com</div>
        <div>{this.props.location}</div>
        <div>{this.props.id}</div>
        <div>State Change via Btn Click: {this.state.btnClick} </div>
        <button
          onClick={() => {
            this.setState({
              btnClick: this.state.btnClick + 1,
            });
          }}
        >
          Increment
        </button>

        <button
          onClick={() => {
            this.setState({
              btnClick: this.state.btnClick - 1,
            });
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default UserClass;
