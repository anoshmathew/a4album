import React from 'react'
import '../css/hover-min.css';
import '../css/bootstrap.min.css'
import './userpage4.scss'

function UserPage4() {
  return (
    <div className='userpage4'>
    <section className="section-5" id="userpage4">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 heading">
            <h1>Event</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-8 event text-center">
            <div className="col-xl-11 p-0 border-area">
              <img src={require("../img/section5/wedding.jpeg")} />
              <div className="content">
                <h1>wedding ceremony</h1>
                <p>There are many variations of of Lorem Ipsum available, but the majorityfered alteration in some form,mour, or randomised words which don't look even slightly.</p>
                <ul liststyle-type-none>
                  <li>park hayatt hotel,new york </li>
                  <li>friday,24 jan 2019 </li>
                  <li>4:30pm-6:15pm</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-8 event text-center">
            <div className="col-xl-11 p-0 border-area">
              <img src={require("../img/section5/party.jpeg")} />
              <div className="content">
                <h1>wedding party</h1>
                <p>There are many variations of of Lorem Ipsum available, but the majorityfered alteration in some form,mour, or randomised words which don't look even slightly.</p>
                <ul liststyle-type-none>
                  <li>park hayatt hotel,new york </li>
                  <li>friday,24 jan 2019 </li>
                  <li>4:30pm-6:15pm</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-8 event text-center">
            <div className="col-xl-11 p-0 border-area">
              <img src={require("../img/section5/dinner.jpeg")} />
              <div className="content">
                <h1>dinner</h1>
                <p>There are many variations of of Lorem Ipsum available, but the majorityfered alteration in some form,mour, or randomised words which don't look even slightly.</p>
                <ul liststyle-type-none>
                  <li>park hayatt hotel,new york </li>
                  <li>friday,24 jan 2019 </li>
                  <li>4:30pm-6:15pm</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default UserPage4