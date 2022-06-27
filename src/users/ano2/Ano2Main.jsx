import React, { useState } from 'react'
import Topbar from './topbar/Topbar'
import Welcome from './welcome/Welcome'
import "./Ano2Main.scss";
import Couple from './welcome/Couple';
function Ano2Main() {
    const [colorChange, setColorchange] = useState(false);
    const [yscro, setyscro] = useState(0)

    const changeNavbarColor = () =>{
      //console.log(window.scrollY)
        setyscro(window.scrollY)
        if(window.scrollY >= 150){
          setColorchange(true);
        }
        else{
          setColorchange(false);
        }
     };
     window.addEventListener('scroll', changeNavbarColor);

    return (
    <div className='Ano2Main'>
      <div className='Ano2Main-topbar'>
        <Topbar colorChange={colorChange}/>
      </div>
        <div className='content-main'>
          <Welcome  yscro={yscro}/>
          <Couple/>
        </div>
    </div>
    
  )
}

export default Ano2Main