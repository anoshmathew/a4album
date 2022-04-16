import "./section6.scss";
import "../css/hover-min.css";
import "../css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

function Section6({ imgName, setimgName }) {
  const navigate = useNavigate();
  return (
    <div className="section6">
      <section className="section-7" id="section6">
        <div className="container">
          <div className="row ">
            <div className="col-xl-12 heading">
              <h1>gallery</h1>
            </div>
          </div>
          <div className="row gallery-overflow-xs">
            <div className="col-lg-3 col-md-6  col-6 gallery-image hvr-grow">
              <Link
                data-fancybox="gallery"
                state={"1"}
                to="../imgslider"
                data-caption="This is the caption"
              >
                <img src={require("../img/section7/gallery1.jpg")} />
              </Link>
            </div>
            <div className="col-lg-3 col-md-6  col-6 gallery-image hvr-grow">
              <Link data-fancybox="gallery" state={"2"} to="../imgslider">
                <img src={require("../img/section7/gallery2.jpg")} />
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-6 gallery-image hvr-grow">
              <Link data-fancybox="gallery" state={"3"} to="../imgslider">
                <img src={require("../img/section7/gallery3.jpg")} />
              </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-6 gallery-image hvr-grow">
              <Link data-fancybox="gallery" state={"4"} to="../imgslider">
                <img src={require("../img/section7/gallery4.jpg")} />
              </Link>
            </div>
            <div className="col-lg-3 col-md-6  col-6 gallery-image hvr-grow">
              <Link data-fancybox="gallery" to="../imgslider" state={"5"}>
                <img src={require("../img/section7/gallery5.jpg")} />
              </Link>
            </div>
            <div className="col-lg-3 col-md-6  col-6 gallery-image hvr-grow">
              <Link data-fancybox="gallery" to="../imgslider" state={"6"}>
                <img src={require("../img/section7/gallery6.jpg")} />
              </Link>
            </div>
            <div className="col-lg-3 col-md-6  col-6 gallery-image hvr-grow">
              <Link data-fancybox="gallery" to="../imgslider" state={"7"}>
                <img src={require("../img/section7/gallery7.jpg")} />
              </Link>
            </div>
            <div className="col-lg-3 col-md-6  col-6 gallery-image hvr-grow">
              <Link data-fancybox="gallery" to="../imgslider" state={"8"}>
                <img src={require("../img/section7/gallery8.jpg")} />
              </Link>
            </div>
          </div>
        </div>
        <button onClick={() => navigate("../imggallery")}>asd</button>
      </section>
    </div>
  );
}

export default Section6;
