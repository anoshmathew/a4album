import React from 'react'
import "./userpage2.scss"
import '../css/hover-min.css';
import '../css/bootstrap.min.css'


function UserPage2() {
  return (
    <div className='userpage2'>
    <section className="section-2" id="userpage2">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <h1>happy couple</h1>
                <div className="row">
                  <div className="col-xl-6 col-md-6">
                    <div className="col-xl-8 bridegroom">
                      <img src={require("../img/section2/text-bg2.png")} />
                    </div>
                    <div className="text-section">
                      <h3 className>tom</h3>
                      <p>Being deeply loved by someone gives you the strength, while loving someone deeply gives you courage.</p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-6">
                    <div className="col-xl-8  bride">
                      <img src={require("../img/section2/text-bg2.png")} />
                    </div>
                    <div className="text-section">
                      <h3 className>Grace</h3>
                      <p>Being deeply loved by someone gives you the strength, while loving someone deeply gives you courage.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section></div>
  )
}

export default UserPage2