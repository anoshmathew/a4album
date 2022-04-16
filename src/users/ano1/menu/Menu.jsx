import React from 'react'
import { HashLink } from 'react-router-hash-link';
import './menu.scss'


function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className= {"menu "+(menuOpen && "active")}>
        <ul onClick={()=>setMenuOpen(false)}>
                <li >
                    <HashLink to="#intro">Home</HashLink>
                </li>
                <li>
                    <a >Couple</a>
                </li>
                <li>
                    <a >Story</a>
                </li>
                <li>
                    <a>Event</a>
                </li>
                <li>
                    <a>Family</a>
                </li>
                <li>
                    <a>Gallery</a>
                </li>
                <li>
                    <a>Rsvp</a>
                </li>
                <li>
                    <a>Logout</a>
                </li>
            </ul>
    </div>
  
    )
}

export default Menu