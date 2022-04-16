import React,{useState} from 'react'
import '../css/hover-min.css';
import '../css/bootstrap.min.css'
import "./topbar.scss"
import { HashLink } from 'react-router-hash-link';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

function Topbar({menuOpen,setMenuOpen}) {
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

  // The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
  style={{color:"black"}}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));



  return (
    <div className='ano1'>

        <div>

        <nav className="navbar navbar-expand-xl navbar-light fixed-top">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand" href="#userpage1">Tom <i className="fas fa-heartbeat hvr-pulse" /> Grace<span className="nav-logo-image" /></a>
        {/* Toggler/collapsibe Button */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon" onClick={()=>setMenuOpen(!menuOpen)} />
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <HashLink className="nav-link" to="#userpage1" >HOME</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="#userpage2" >couple</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="#userpage3">story</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="#userpage4">event</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="#userpage5">family</HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="#section6">gallery</HashLink>
            </li>
            <li  className="nav-item" >
            <Dropdown className="nav-link">
              <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" >
                more
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="../useradmin">Admin</Link>
                </Dropdown.Item>
                <Dropdown.Item onClick={(e) => logout(e)} >
                  logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
        </div>
      
    </div>
  )
}

export default Topbar