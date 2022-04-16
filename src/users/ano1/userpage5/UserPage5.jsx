import React from 'react'
import '../css/hover-min.css';
import '../css/bootstrap.min.css'
import "./userpage5.scss"

function UserPage5() {
  return (
    <div className='userpage5' >
        <section className="section-6" id="userpage5">
      <div className="container">
        <div className="row ">
          <div className="col-xl-12 heading">
            <h1>people</h1>
          </div>
        </div>
        <div className="row groom-family">
          <div className="col-xl-12 people-heading">
            <h1>tom's family</h1>
          </div>
          <div className="col-xl-3 col-md-6 people text-center">
            <div className="col-xl-12 p-0 border-area">
              <img src={require("../img/section6/people1.jpg")} />
              <div className="content">
                <h1>Jonh Dow</h1>
                <p>father</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 people text-center">
            <div className="col-xl-12 p-0 border-area">
              <img src={require("../img/section6/people2.jpg")} />
              <div className="content">
                <h1>martha</h1>
                <p>mother</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 people text-center">
            <div className="col-xl-12 p-0 border-area">
              <img src={require("../img/section6/people3.jpg")} />
              <div className="content">
                <h1>david</h1>
                <p>brother</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 people text-center">
            <div className="col-xl-12 p-0 border-area">
              <img src={require("../img/section6/people4.jpg")} />
              <div className="content">
                <h1>susan</h1>
                <p>sister</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row bride-family">
          <div className="col-xl-12 people-heading">
            <h1>grace's family</h1>
          </div>
          <div className="col-xl-3 col-md-6 people text-center">
            <div className="col-xl-12 p-0 border-area">
              <img src={require("../img/section6/people5.jpg")} />
              <div className="content">
                <h1>mathew</h1>
                <p>father</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 people text-center">
            <div className="col-xl-12 p-0 border-area">
              <img src={require("../img/section6/people6.jpg")} />
              <div className="content">
                <h1>rebaca</h1>
                <p>mother</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 people text-center">
            <div className="col-xl-12 p-0 border-area">
              <img src={require("../img/section6/people7.jpg")} />
              <div className="content">
                <h1>lois</h1>
                <p>sister</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 people text-center">
            <div className="col-xl-12 p-0 border-area">
              <img src={require("../img/section6/people8.jpg")} />
              <div className="content">
                <h1>rosey</h1>
                <p>sister</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default UserPage5