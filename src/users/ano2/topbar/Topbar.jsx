import React from 'react'
import './Topbar.scss'
function Topbar(param) {
   // console.log(param.colorChange);
  return (
    <div className={param.colorChange ? 'topbar-main topbar-main-small' : 'topbar-main'}>
        <div className='icons'>
            <div className='left'>
                <ul>
                    <li className='left-icon-1'>
                        <a href="">
                            Home
                        </a>
                    </li>
                    <li className='left-icon-2'>
                        <a href="">
                            About
                        </a>
                    </li>
                    <li className='left-icon-3'>  
                        <a href="">
                            Our Story
                        </a>
                    </li>
                </ul>
            </div>
            <div className='center'>

            </div>
            <div className='right'>
            <ul>
                    <li >
                        <a href="">
                            Home
                        </a>
                    </li>
                    <li>                
                        <a href="">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="">
                            Our Story
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Topbar