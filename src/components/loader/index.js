import React, { useEffect } from "react";
import "./loader.scss";
import { imagePath } from "../../utils/assetUtils";
import { TweenMax, Linear } from "gsap";

const PageLoader = () => {
  useEffect(() => {
    pageAnimation();
  }, []);

  const pageAnimation = () => {
    TweenMax.fromTo(
      ".logo-container",
      2.8,
      { y: 0, scale: 0.9 },
      { y: 0, scale: 1, repeat: -1, yoyo: true, ease: Linear.easeNone }
    );

    TweenMax.fromTo(
      ".loader-text",
      2.8,
      { opacity: 0 },
      { opacity: 1, repeat: -1, yoyo: true, ease: Linear.easeNone }
    );
  };
  return (
    <div className="loader-wrapper">
      <div className="logo-container">
        <img
          src={imagePath("fca-logo-black.png")}
          className="black"
          alt="fca"
          style={{ display: "none" }}
        />
      </div>
      <div>
        <div className="loader-text" style={{ display: "none" }}>
          We are FINDCreative eve.
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
