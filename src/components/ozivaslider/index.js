import React from "react";
import Slider from "react-slick";
import Icon from "../icons";
import "./ozivaslider.scss";

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

class ozivaSlider extends React.Component {
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
              <img src={this.props.slide1} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide2 && (
          <div className="slide slide2">
            <div
              className="slideBg"
              // style={{ backgroundImage: "url(" + this.props.slide2 + ")" }}
            >
              <img src={this.props.slide2} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide3 && (
          <div className="slide slide3">
            <div
              className="slideBg"
              //style={{ backgroundImage: "url(" + this.props.slide3 + ")" }}
            >
              <img src={this.props.slide3} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide4 && (
          <div className="slide slide4">
            <div
              className="slideBg"
              //style={{ backgroundImage: "url(" + this.props.slide4 + ")" }}
            >
              <img src={this.props.slide4} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide5 && (
          <div className="slide slide5">
            <div
              className="slideBg"
              // style={{ backgroundImage: "url(" + this.props.slide5 + ")" }}
            >
              <img src={this.props.slide5} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide6 && (
          <div className="slide slide6">
            <div
              className="slideBg"
              //style={{backgroundImage : 'url(' +this.props.slide6+ ')'}}
            >
              <img src={this.props.slide6} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide7 && (
          <div className="slide slide7">
            <div
              className="slideBg"
              //style={{ backgroundImage: "url(" + this.props.slide7 + ")" }}
            >
              <img src={this.props.slide7} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide8 && (
          <div className="slide slide8">
            <div
              className="slideBg"
              //style={{ backgroundImage: "url(" + this.props.slide8 + ")" }}
            >
              <img src={this.props.slide8} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide9 && (
          <div className="slide slide9">
            <div
              className="slideBg"
              //style={{ backgroundImage: "url(" + this.props.slide9 + ")" }}
            >
              <img src={this.props.slide9} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide10 && (
          <div className="slide slide10">
            <div
              className="slideBg"
              //style={{ backgroundImage: "url(" + this.props.slide10 + ")" }}
            >
              <img src={this.props.slide10} alt="slide" />
            </div>
          </div>
        )}
        {this.props.slide11 && (
          <div className="slide slide11">
            <div
              className="slideBg"
              //style={{ backgroundImage: "url(" + this.props.slide11 + ")" }}
            >
              <img src={this.props.slide11} alt="slide" />
            </div>
          </div>
        )}
        {this.props.slide12 && (
          <div className="slide slide12">
            <div
              className="slideBg"
              //style={{ backgroundImage: "url(" + this.props.slide12 + ")" }}
            >
              <img src={this.props.slide12} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide13 && (
          <div className="slide slide13">
            <div
              className="slideBg"
              //  style={{ backgroundImage: "url(" + this.props.slide13 + ")" }}
            >
              <img src={this.props.slide13} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide14 && (
          <div className="slide slide14">
            <div
              className="slideBg"
              //  style={{ backgroundImage: "url(" + this.props.slide14 + ")" }}
            >
              <img src={this.props.slide14} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide15 && (
          <div className="slide slide15">
            <div
              className="slideBg"
              //  style={{ backgroundImage: "url(" + this.props.slide15 + ")" }}
            >
              <img src={this.props.slide15} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide16 && (
          <div className="slide slide16">
            <div
              className="slideBg"
              //style={{ backgroundImage: "url(" + this.props.slide16 + ")" }}
            >
              <img src={this.props.slide16} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide17 && (
          <div className="slide slide17">
            <div
              className="slideBg"
              //  style={{ backgroundImage: "url(" + this.props.slide17 + ")" }}
            >
              <img src={this.props.slide17} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide18 && (
          <div className="slide slide18">
            <div
              className="slideBg"
              //style={{ backgroundImage: "url(" + this.props.slide18 + ")" }}
            >
              <img src={this.props.slide18} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide19 && (
          <div className="slide slide19">
            <div
              className="slideBg"
              // style={{ backgroundImage: "url(" + this.props.slide19 + ")" }}
            >
              <img src={this.props.slide19} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide20 && (
          <div className="slide slide20">
            <div
              className="slideBg"
              //style={{ backgroundImage: "url(" + this.props.slide20 + ")" }}
            >
              <img src={this.props.slide20} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide21 && (
          <div className="slide slide21">
            <div
              className="slideBg"
              //style={{ backgroundImage: "url(" + this.props.slide21 + ")" }}
            >
              <img src={this.props.slide21} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide22 && (
          <div className="slide slide22">
            <div
              className="slideBg"
              // style={{ backgroundImage: "url(" + this.props.slide22 + ")" }}
            >
              <img src={this.props.slide22} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide23 && (
          <div className="slide slide23">
            <div
              className="slideBg"
              // style={{ backgroundImage: "url(" + this.props.slide23 + ")" }}
            >
              <img src={this.props.slide23} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide24 && (
          <div className="slide slide24">
            <div
              className="slideBg"
              //style={{ backgroundImage: "url(" + this.props.slide24 + ")" }}
            >
              <img src={this.props.slide24} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide25 && (
          <div className="slide slide25">
            <div
              className="slideBg"
              // style={{ backgroundImage: "url(" + this.props.slide25 + ")" }}
            >
              <img src={this.props.slide25} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide26 && (
          <div className="slide slide26">
            <div
              className="slideBg"
              // style={{ backgroundImage: "url(" + this.props.slide26 + ")" }}
            >
              <img src={this.props.slide26} alt="slide" />
            </div>
          </div>
        )}

        {this.props.slide27 && (
          <div className="slide slide27">
            <div
              className="slideBg"
              // style={{ backgroundImage: "url(" + this.props.slide27 + ")" }}
            >
              <img src={this.props.slide27} alt="slide" />
            </div>
          </div>
        )}
      </Slider>
    );
  }
}

export default ozivaSlider;
