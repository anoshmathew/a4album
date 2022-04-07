import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function Ano2(param) {
  var username ="";
  if(JSON.parse(localStorage.getItem("log"))){
     var log = JSON.parse(localStorage.getItem("log"));
     username = log.data.user.username;
  }
 
  const navigate = useNavigate();
   
  function logout(e){
    e.preventDefault();
    localStorage.removeItem("log");
    navigate("/");
  }
  return (
    
    <div>
      {
      ( username != "") ? (
        <div>
          Welcome {username} 
           <button onClick={(e) => logout(e)}>Logout</button>
        </div>
      ) 
      :
      (<div>You have been signed out. Please Login!</div>)}
    </div>
  )
};
  

export default Ano2