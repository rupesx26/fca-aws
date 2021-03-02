import React from "react";
import Slider from "react-slick";
const HrxImgSlider = props => {
  const { slides, settings } = props;
  const defaultSetting = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  const mergeSettings = {
    ...defaultSetting,
    ...settings
  };

  return (
    <div>
      <Slider {...mergeSettings}>
        {slides.map(x => {
          return (
            <div className="slide">
              <div className="slideBg">
                <img src={x} />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HrxImgSlider;
