import { useState } from "react";
const User = (props) => {
  console.log(props.name, props.location);

  const [btnClick, setBtnClick] = useState(0);

  return (
    <div className="user-container">
      <img />
      <h2>Name: {props.name}</h2>
      <div>Mobile: {props.mobile}</div>
      <div>Email: {props.email}</div>
      <div>{props.location}</div>
      <div>{props.role}</div>

      <div>State Change via Btn Click: {btnClick} </div>
      <button
        onClick={() => {
          setBtnClick(btnClick + 1);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          setBtnClick(btnClick - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default User;
