import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './css/animate.css';
import './css/hover-min.css';
//import './css/owl.carousel.css';
import './css/owl.theme.default.css';
import './css/jquery.fancybox.min.css';
import './css/bootstrap.min.css'
import './css/style.css'
    




function Ano1(param) {
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
  return (
    
    <div>
      {
      ( username != "") ? (
        <div>


          <div>
  <div data-spy="scroll" data-target=".navbar" data-offset={50} id="home">
    <nav className="navbar navbar-expand-xl navbar-light fixed-top">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand wow slideInLeft" href="#">Tom <i className="fas fa-heartbeat hvr-pulse" /> Grace<span className="nav-logo-image" /></a>
        {/* Toggler/collapsibe Button */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#home">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cuple">cuple</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#story">story</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#events">event</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#people">people</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery-sec">galley</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#rsvp">rsvp</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section className="section-1">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 content offset-xl-6">
            <div className="wrap-content">
              <img src={require("./img/section1/invitationbg.png")} alt="Los Angeles" />
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
    <section className="section-2" id="cuple">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h1>happy couple</h1>
            <div className="row">
              <div className="col-xl-6 col-md-6">
                <div className="col-xl-8 bridegroom">
                  <img src={require("./img/section2/text-bg2.png")} />
                </div>
                <div className="text-section">
                  <h3 className>tom</h3>
                  <p>Being deeply loved by someone gives you the strength, while loving someone deeply gives you courage.</p>
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div className="col-xl-8  bride">
                  <img src={require("./img/section2/text-bg2.png")} />
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
    </section>
    <section className="section-3">
      <div className="container">
        <div className="row">
          {/* days */}
          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
            <p id="days">111</p>
            <h1>Days</h1>
          </div>
          {/* hours */}
          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
            <p id="hours">10</p>
            <h1>Hours</h1>
          </div>
          {/* minutes */}
          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
            <p id="minutes">9</p>
            <h1>Minutes</h1>
          </div>
          {/* seconds */}
          <div className="col-xl-3 col-lg-3 col-md-3 col-6">
            <p id="Seconds">0</p>
            <h1>Seconds</h1>
          </div>
        </div>
      </div>
    </section>
    <section className="section-4" id="story">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 heading">
            <h1>story</h1>
          </div>
        </div>
        {/*slide 1*/}
        <div className="row story-content">
          <div className="col-xl-6 p-0">
            <img src={require("./img/section4/story1.jpeg")} />
          </div>
          <div className="col-xl-6">
            <h1>How we met?</h1>
            <h5 className="date">15 Sep 2014</h5>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
              It is a long established fact.</p>
          </div>
        </div>
        {/*slide 2*/}
        <div className="row  story-content2">
          <div className="col-xl-6">
            <h1>First date</h1>
            <h5 className="date">18 Oct 2014</h5>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
              It is a long established fact.</p>
          </div>
          <div className="col-xl-6 p-0">
            <img src={require("./img/section4/story2.jpeg")} />
          </div>
        </div>
        {/*slide 3*/}
        <div className="row story-content3">
          <div className="col-xl-6 image-container">
            <div className="row">
              <div className="col-xl-6 col-md-6 col-6 image1">
                <img src={require("./img/section4/happyhour1.jpeg")} />
              </div>
              <div className="col-xl-6 col-md-6 col-6 image2">
                <img src={require("./img/section4/happyhour2.jpeg")} />
              </div>
              <div className="col-xl-6 col-md-6 col-6 image3">
                <img src={require("./img/section4/happyhour3.jpeg")} />
              </div>
              <div className="col-xl-6 col-md-6 col-6 image4">
                <img src={require("./img/section4/happyhour4.jpeg")} />
              </div>
            </div>
          </div>
          <div className="col-xl-6 text-container">
            <h1>Happy hours..</h1>
            <h5 className="date">14 Jan 2016</h5>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
              It is a long established fact.</p>
          </div>
        </div>
        {/*slide 4*/}
        <div className="row story-content4">
          <div className="col-xl-6">
            <h1>We are engaged</h1>
            <h5 className="date">20 Dec 2017</h5>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
              It is a long established fact.</p>
          </div>
          <div className="col-xl-6 video p-0">
            <a data-fancybox href="https://www.youtube.com/watch?v=YKnXWyEUns0">
              <img className="video-thumb" src={require("./img/section4/video.jpeg")} />
              {/* <img class="play-button" src="img/section4/play.png">*/}
              <i role="button" className="fas fa-play hvr-grow play-button" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="section-5" id="events">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 heading">
            <h1>Event</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-8 event text-center">
            <div className="col-xl-11 p-0 border-area">
              <img src={require("./img/section5/wedding.jpeg")} />
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
              <img src={require("./img/section5/party.jpeg")} />
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
              <img src={require("./img/section5/dinner.jpeg")} />
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
    {/*section 5end */}
    {/*section 6*/}
    <section className="section-6" id="people">
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
              <img src={require("./img/section6/people1.jpg")} />
              <div className="content">
                <h1>Jonh Dow</h1>
                <p>father</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 people text-center">
            <div className="col-xl-12 p-0 border-area">
              <img src={require("./img/section6/people2.jpg")} />
              <div className="content">
                <h1>martha</h1>
                <p>mother</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 people text-center">
            <div className="col-xl-12 p-0 border-area">
              <img src={require("./img/section6/people3.jpg")} />
              <div className="content">
                <h1>david</h1>
                <p>brother</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 people text-center">
            <div className="col-xl-12 p-0 border-area">
              <img src={require("./img/section6/people4.jpg")} />
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
              <img src={require("./img/section6/people5.jpg")} />
              <div className="content">
                <h1>mathew</h1>
                <p>father</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 people text-center">
            <div className="col-xl-12 p-0 border-area">
              <img src={require("./img/section6/people6.jpg")} />
              <div className="content">
                <h1>rebaca</h1>
                <p>mother</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 people text-center">
            <div className="col-xl-12 p-0 border-area">
              <img src={require("./img/section6/people7.jpg")} />
              <div className="content">
                <h1>lois</h1>
                <p>sister</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 people text-center">
            <div className="col-xl-12 p-0 border-area">
              <img src={require("./img/section6/people8.jpg")} />
              <div className="content">
                <h1>rosey</h1>
                <p>sister</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*section 6 end*/}
    {/*section 7*/}
    <section className="section-7" id="gallery-sec">
      <div className="container">
        <div className="row ">
          <div className="col-xl-12 heading">
            <h1>gallery</h1>
          </div>
        </div>
        <div className="row gallery-overflow-xs">
          <div className="col-lg-3 col-md-6  col-6 gallery-image hvr-grow">
            <a data-fancybox="gallery" href="./img/section7/gallery1.jpg" data-caption="This is the caption"><img src={require("./img/section7/gallery1.jpg")} /></a>
          </div>
          <div className="col-lg-3 col-md-6  col-6 gallery-image hvr-grow">
            <a data-fancybox="gallery" href="img/section7/gallery2.jpg"><img src={require("./img/section7/gallery2.jpg")} /></a>
          </div>
          <div className="col-lg-3 col-md-6 col-6 gallery-image hvr-grow">
            <a data-fancybox="gallery" href="img/section7/gallery3.jpg"><img src={require("./img/section7/gallery3.jpg")} /></a>
          </div>
          <div className="col-lg-3 col-md-6 col-6 gallery-image hvr-grow">
            <a data-fancybox="gallery" href="img/section7/gallery4.jpg"><img src={require("./img/section7/gallery4.jpg")} /></a>
          </div>
          <div className="col-lg-3 col-md-6  col-6 gallery-image hvr-grow">
            <a data-fancybox="gallery" href="img/section7/gallery5.jpg"><img src={require("./img/section7/gallery5.jpg")} /></a>
          </div>
          <div className="col-lg-3 col-md-6  col-6 gallery-image hvr-grow">
            <a data-fancybox="gallery" href="img/section7/gallery6.jpg"><img src={require("./img/section7/gallery6.jpg")} /></a>
          </div>
          <div className="col-lg-3 col-md-6  col-6 gallery-image hvr-grow">
            <a data-fancybox="gallery" href="img/section7/gallery7.jpg"><img src={require("./img/section7/gallery7.jpg")} /></a>
          </div>
          <div className="col-lg-3 col-md-6  col-6 gallery-image hvr-grow">
            <a data-fancybox="gallery" href="img/section7/gallery8.jpg"><img src={require("./img/section7/gallery8.jpg")} /></a>
          </div>
        </div>
      </div>
    </section>
    <section className="section-8" id="rsvp">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 heading">
            <h1>are you attending</h1>
          </div>
        </div>
        <div className="row   d-flex align-items-center justify-content-center">
          <div className="col-xl-8 rsvp-col">
            {/* Form itself */}
            <form name=" sentMessage" id="contactForm" noValidate>
              <div className="row">
                <div className="col-xl-6 col-md-6 col-6">
                  <div className="control-group">
                    <div className="controls">
                      <input type="text" className="form-control" placeholder="Full Name" id="name" required data-validation-required-message="Please enter your name" />
                      <p className="help-block" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6 col-6">
                  <div className="control-group">
                    <div className="controls">
                      <input type="email" className="form-control" placeholder="Email" id="email" required data-validation-required-message="Please enter your email" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-12 col-12">
                  <div className="control-group">
                    <div className="controls">
                      <textarea rows={10} cols={100} className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter your message" minLength={5} data-validation-minlength-message="Min 5 characters" maxLength={999} style={{resize: 'none'}} defaultValue={""} />
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-md-12 col-12 send-button">
                  {/* For success/fail messages */}
                  <button type="submit" className="btn btn-primary">Send</button><br />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section></div>
  <section className="section-9">
    <div className="container">
      <div className="row">
        <div className="col-xl-12 thank-section">
          <div className="text-1">
            <h1 className>thank you</h1>
            <h4>for being with us</h4>
          </div>
          <div className="text-2">
            <h2>Save the date</h2>
            <h5>30 DEC 2018</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>


           <button onClick={(e) => logout(e)}>Logout</button>
        
        
        </div>
      ) 
      :
      (<div>You have been signed out. Please Login!</div>)}
    </div>
  )
};
  


export default Ano1