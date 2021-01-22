import React from "react";

function Button(props){
    return(
        <button type="submit">{props.userRegistered ? "Login" : "Register"}</button>
    )
}

export default Button;