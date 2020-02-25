import React from 'react';

export default function HeaderLinks(props){
    //console.log(props);
    //throw new Error("User not found");
    return <span className="header-links">
          {
              props.user ? <a href="/#" onClick={props.logout}> Logout </a>:
              <span>
              <a href="/#" onClick={props.signin}>Sign in </a> 
              <a href="/#"> Register </a>
              </span>
          }
      </span>
}