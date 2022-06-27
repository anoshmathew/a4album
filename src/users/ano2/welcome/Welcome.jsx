import React from 'react'
import './Welcome.scss'

function Welcome(param) {
 // console.log(param.yscro)
  return (
    <div className='welcome-main'>
      <div className='secondary-image'>
        <div className='img1-div'>
          <img className='img1' src={require("../img/couple1.jpg")} />
        </div>
        <div className='img2-div'>
          <img className='img2' src={require("../img/couple2.jpg")} />
        </div>
      </div>
      <div className='primary-image'>
        <div className='img-main-div'>
          <img className={param.yscro>100 ? 'img-main rotate' : 'img-main'} 
          src={require("../img/couplemain.jpg")} />
        </div >
      </div>
      <div className="names-main">
        <div className='names'>
          <h1>
            Maria<span> & </span>Jonas
          </h1>
        </div>
        <div className='event'>
          <h2>
            Wedding Album
          </h2>
        </div>
      </div>

    </div>
  )
}

export default Welcome