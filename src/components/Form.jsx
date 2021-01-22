import React from "react";
import Button from "./Button";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.userRegistered && <input type="password" placeholder="Confirm Password" />}
      <Button userRegistered={props.userRegistered}/>
    </form>
  );
}

export default Form;
