import React from 'react'
import './Couple.scss'
function Couple() {
  return (
    <div className='couple-main'>
      <div className='heading'>
        <h1>
        About The Couple
        </h1>
      </div>
      <div className='heart-icon'>
      <i className="fa-solid fa-heart"></i>
      </div>
      <div className='content'>
        <div className='left'>
          <div className='pic'>
            <img className='img2' src={require("../img/bride.jpg")} />
          </div>
          <div className='lable'>
            <h2>
            Maria
            </h2>
          </div>
          <div className='content'>
            <div className='heading'>
              <h3>
                Hopeless Romantic
              </h3>
            </div>
            <div className='paragraph'>
              <p>
                Imperdiet interdum donec eget metus auguen unc vel lorem ispuet Ibu lum orci eget, viverra elit liquam erat volut pat phas ellus ac sodales Lorem ipsum dolor sit amet, consectetur adipisicing elit uasi quidem minus id iprum omnis.
              </p>
            </div>            
          </div>
          <div className='social-media'>        
                  <a href="#" title=""><i class="fa fa-twitter"></i></a>
                  <a href="#" title=""><i class="fa fa-facebook"></i></a>
                  <a href="#" title=""><i class="fa fa-linkedin"></i></a>
                  <a href="#" title=""><i class="fa fa-pinterest"></i></a>
                  <a href="#" title=""><i class="fa fa-instagram"></i></a>
          </div>
        </div>
        <div className='right'>
          <div className='pic'>
            <img className='img2' src={require("../img/groom.jpg")} />
          </div>
          <div className='lable'>
            <h2>
              Jonas
            </h2>
          </div>
          <div className='content'>
            <div className='heading'>
              <h3>
                A Free-Spirited Woman
              </h3>
            </div>
            <div className='paragraph'>
              <p>
                Imperdiet interdum donec eget metus auguen unc vel lorem ispuet Ibu lum orci eget, viverra elit liquam erat volut pat phas ellus ac sodales Lorem ipsum dolor sit amet, consectetur adipisicing elit uasi quidem minus id iprum omnis.
              </p>
            </div>
          </div>
          <div className='social-media'>
          <a href="#" title=""><i className="fa fa-twitter"></i></a>
          <a href="#" title=""><i className="fa fa-facebook"></i></a>
          <a href="#" title=""><i className="fa fa-linkedin"></i></a>
          <a href="#" title=""><i className="fa fa-pinterest"></i></a>
          <a href="#" title=""><i className="fa fa-instagram"></i></a>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Couple