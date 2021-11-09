import React from "react";
import Slider from "react-slick";
import Icon from "../icons";
import "./ozivakidsslider.scss";

const NextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <Icon icon="thinNext" />
    </div>
  );
};

const PrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <Icon icon="thinPrev" />
    </div>
  );
};

class OzivaKidsSlider extends React.Component {
  render() {
    const settings = {
      dots: this.props.dots,
      infinite: this.props.infinite,
      speed: this.props.speed,
      slidesToShow: this.props.slidesToShow,
      slidesToScroll: this.props.slidesToScroll,
      fade: this.props.fade,
      autoplay: this.props.autoplay,
      autoplaySpeed: this.props.autoplaySpeed,
      pauseOnHover: this.props.pauseOnHover,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <Slider {...settings}>
        {this.props.slide1 && (
          <div className="slide">
            <div
              className="slideBg"
              // style={{ backgroundImage: "url(" + this.props.slide1 + ")" }}
            >
              {" "}
              <img src={this.props.ozivakidsslide01} alt="slide1" />
            </div>
          </div>
        )}

        {this.props.slide2 && (
          <div className="slide slide2">
            <div
              className="slideBg"
              // style={{ backgroundImage: "url(" + this.props.slide2 + ")" }}
            >
              <img src={this.props.ozivakidsslide02} alt="slide2" />
            </div>
          </div>
        )}

        {this.props.slide3 && (
          <div className="slide slide3">
            <div
              className="slideBg"
              //style={{ backgroundImage: "url(" + this.props.slide3 + ")" }}
            >
              <img src={this.props.ozivakidsslide03} alt="slide3" />
            </div>
          </div>
        )}

        {this.props.slide4 && (
          <div className="slide slide4">
            <div
              className="slideBg"
              //style={{ backgroundImage: "url(" + this.props.slide4 + ")" }}
            >
              <img src={this.props.ozivakidsslide04} alt="slide4" />
            </div>
          </div>
        )}

        {this.props.slide5 && (
          <div className="slide slide5">
            <div
              className="slideBg"
              // style={{ backgroundImage: "url(" + this.props.slide5 + ")" }}
            >
              <img src={this.props.ozivakidsslide05} alt="slide5" />
            </div>
          </div>
        )}

        {this.props.slide6 && (
          <div className="slide slide6">
            <div
              className="slideBg"
              //style={{backgroundImage : 'url(' +this.props.slide6+ ')'}}
            >
              <img src={this.props.ozivakidsslide06} alt="slide6" />
            </div>
          </div>
        )}

        {this.props.slide7 && (
          <div className="slide slide7">
            <div
              className="slideBg"
              //style={{ backgroundImage: "url(" + this.props.slide7 + ")" }}
            >
              <img src={this.props.ozivakidsslide07} alt="slide7" />
            </div>
          </div>
        )}

        {this.props.slide8 && (
          <div className="slide slide8">
            <div
              className="slideBg"
              //style={{ backgroundImage: "url(" + this.props.slide8 + ")" }}
            >
              <img src={this.props.ozivakidsslide08} alt="slide8" />
            </div>
          </div>
        )}

        {this.props.slide9 && (
          <div className="slide slide9">
            <div
              className="slideBg"
              //style={{ backgroundImage: "url(" + this.props.slide9 + ")" }}
            >
              <img src={this.props.ozivakidsslide09} alt="slide9" />
            </div>
          </div>
        )}

        {this.props.slide10 && (
          <div className="slide slide10">
            <div
              className="slideBg"
              //style={{ backgroundImage: "url(" + this.props.slide10 + ")" }}
            >
              <img src={this.props.ozivakidsslide10} alt="slide10" />
            </div>
          </div>
        )}
        {this.props.slide11 && (
          <div className="slide slide11">
            <div
              className="slideBg"
              //style={{ backgroundImage: "url(" + this.props.slide11 + ")" }}
            >
              <img src={this.props.ozivakidsslide11} alt="slide11" />
            </div>
          </div>
        )}
        {this.props.slide12 && (
          <div className="slide slide12">
            <div
              className="slideBg"
              //style={{ backgroundImage: "url(" + this.props.slide12 + ")" }}
            >
              <img src={this.props.ozivakidsslide12} alt="slide12" />
            </div>
          </div>
        )}

        {this.props.slide13 && (
          <div className="slide slide13">
            <div
              className="slideBg"
              //  style={{ backgroundImage: "url(" + this.props.slide13 + ")" }}
            >
              <img src={this.props.ozivakidsslide13} alt="slide13" />
            </div>
          </div>
        )}

        {this.props.slide14 && (
          <div className="slide slide14">
            <div
              className="slideBg"
              //  style={{ backgroundImage: "url(" + this.props.slide14 + ")" }}
            >
              <img src={this.props.ozivakidsslide14} alt="slide14" />
            </div>
          </div>
        )}

        {this.props.slide15 && (
          <div className="slide slide15">
            <div
              className="slideBg"
              //  style={{ backgroundImage: "url(" + this.props.slide15 + ")" }}
            >
              <img src={this.props.ozivakidsslide15} alt="slide15" />
            </div>
          </div>
        )}

        {this.props.slide16 && (
          <div className="slide slide16">
            <div
              className="slideBg"
              //style={{ backgroundImage: "url(" + this.props.slide16 + ")" }}
            >
              <img src={this.props.ozivakidsslide16} alt="slide16" />
            </div>
          </div>
        )}
      </Slider>
    );
  }
}

export default OzivaKidsSlider;
