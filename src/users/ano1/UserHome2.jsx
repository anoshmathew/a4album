import React,{useState} from 'react'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import UserPage1 from './intro/UserPage1';
import UserPage2 from './userpage2/UserPage2';
import Menu from './menu/Menu';
import Topbar from './topbar/Topbar';

import "./userhome2.scss"
import UserPage3 from './userpage3/UserPage3';
import UserPage4 from './userpage4/UserPage4';
import UserPage5 from './userpage5/UserPage5';
import Section6 from './userpage6/Section6';
import UserFooter from './userfooter/UserFooter';
import { useLocation } from 'react-router-dom';
function UserHome2({ imgName,setimgName}) {
    var username ="";
    if(JSON.parse(localStorage.getItem("log"))){
       var log = JSON.parse(localStorage.getItem("log"));
       username = log.data.user.username;
    }
    const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div>
         {
      ( username !== "") ? (
        <div>
            <div className='user'>
                <Topbar  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          
            <div className='sections'>
                <UserPage1/>
                <UserPage2/>
                <UserPage3/>
                <UserPage4/>
                <UserPage5/>
                <Section6  imgName={imgName} setimgName={setimgName}/>
                <UserFooter/>
            </div>
        </div>
               
        </div>
      ):(
        <div>
            Please Login!
        </div>
      )}
    </div>
  )
}

export default UserHome2