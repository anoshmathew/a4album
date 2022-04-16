import React from 'react'
import "./intro.scss"
import '../css/hover-min.css';
import '../css/bootstrap.min.css'
//import '../css/style.css'

function UserPage1() {
  return (
    <div className='intro' id="userpage1">
        <section className="section-1">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-6 content offset-xl-6">
          <div className="wrap-content">
            <img src={require("../img/section1/invitationbg.png")} alt="Los Angeles" />
            <div className="text-box">
              <p className="small-text">Wedding Album Of</p>
              <h3 className>tom</h3>
              <p className="small-text">and</p>
              <h3 className>grace</h3>
              <p className="small-text">08.09.2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default UserPage1