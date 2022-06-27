import React from 'react'
import { Routes, Route, Link,useNavigate } from "react-router-dom";
import Ano2Main from './Ano2Main';

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
    <Routes>
          <Route path="view" element={<Ano2Main/>} />
          
    </Routes>
  </div>
  )
};
  

export default Ano2