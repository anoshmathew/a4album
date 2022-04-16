
import "./userpage3.scss"
import '../css/hover-min.css';
import '../css/bootstrap.min.css'

function UserPage3() {
  return (
    <div className="userpage3">
         <section className="section-4" id="userpage3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 heading">
            <h1>story</h1>
          </div>
        </div>
        {/*slide 1*/}
        <div className="row story-content">
          <div className="col-xl-6 p-0">
            <img src={require("../img/section4/story1.jpeg")} />
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
            <img src={require("../img/section4/story2.jpeg")} />
          </div>
        </div>
        {/*slide 3*/}
        <div className="row story-content3">
          <div className="col-xl-6 image-container">
            <div className="row">
              <div className="col-xl-6 col-md-6 col-6 image1">
                <img src={require("../img/section4/happyhour1.jpeg")} />
              </div>
              <div className="col-xl-6 col-md-6 col-6 image2">
                <img src={require("../img/section4/happyhour2.jpeg")} />
              </div>
              <div className="col-xl-6 col-md-6 col-6 image3">
                <img src={require("../img/section4/happyhour3.jpeg")} />
              </div>
              <div className="col-xl-6 col-md-6 col-6 image4">
                <img src={require("../img/section4/happyhour4.jpeg")} />
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
              <img className="video-thumb" src={require("../img/section4/video.jpeg")} />
              {/* <img class="play-button" src="img/section4/play.png">*/}
              <i role="button" className="fas fa-play hvr-grow play-button" />
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default UserPage3