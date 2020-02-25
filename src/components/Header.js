import React from "react";
import HeaderLinks from "./HeaderLinks";
export default function Header(props) {
    //throw new Error("User not found");
  return <header className="app-header">
      <h3>Test Application Header</h3>
      
      <HeaderLinks user={props.user} logout={props.logout} signin={props.signin}/>
      </header>
     ;
}