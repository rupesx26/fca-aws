import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect"; //is for mobile devices
import Head from "../Head";
import SimpleSlider from "../../components/simpleslider";
import PageAnimWrapper from "../../components/pagetransition";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import {
  TimelineLite,
  TimelineMax,
  TweenMax,
  Power0,
  Power4,
  CSSPlugin
} from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import ProjectPageSummary from "../../components/workdetailsanim";
import { lifeBuoyImagePath } from "../../utils/assetUtils";
import WorkPageNavigation from "../../components/workpagenav";
import * as meta from "../../components/meta.json";

import "./lifebuoy.scss";
/* eslint-disable no-console */
const plugins = [CSSPlugin];
console.log(plugins);

class Lifebuoy extends Component {
  constructor(props) {
    super(props);
    this.ScrollMagic = null;
    this.controller = null;
    this.mainWrapper = React.createRef();
    this.footerWrapper = React.createRef();
    this.bannerWrapper = React.createRef();
    this.darkArea = React.createRef();
    this.darkArea2 = React.createRef();
    this.lightArea = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.pageAnimation = this.pageAnimation.bind(this);

    this.HeroBanner = lifeBuoyImagePath("banner.jpg");
    this.Img1 = lifeBuoyImagePath("1.png");
    this.Img2 = lifeBuoyImagePath("2.png");
    this.Img3 = lifeBuoyImagePath("3.png");
    this.Img4 = lifeBuoyImagePath("4.jpg");
    this.Img5 = lifeBuoyImagePath("5.jpg");
    this.Img6 = lifeBuoyImagePath("6.jpg");
    this.Img8 = lifeBuoyImagePath("8.png");
    this.Img9 = lifeBuoyImagePath("9.png");
    this.Img10 = lifeBuoyImagePath("10.png");

    this.slide1 = lifeBuoyImagePath("11.png");
    this.slide2 = lifeBuoyImagePath("12.png");
    this.slide3 = lifeBuoyImagePath("13.png");
    this.slide4 = lifeBuoyImagePath("14.png");
    this.slide5 = lifeBuoyImagePath("15.png");
    this.slide6 = lifeBuoyImagePath("16.png");
    this.slide7 = lifeBuoyImagePath("17.png");
    this.slide8 = lifeBuoyImagePath("18.png");
    this.slide9 = lifeBuoyImagePath("19.png");
    this.slide10 = lifeBuoyImagePath("20.png");
    this.slide11 = lifeBuoyImagePath("21.png");
    this.slide12 = lifeBuoyImagePath("22.png");
    this.slide13 = lifeBuoyImagePath("23.png");
    this.slide14 = lifeBuoyImagePath("24.png");
    this.slide15 = lifeBuoyImagePath("25.png");
    this.slide16 = lifeBuoyImagePath("26.png");
    this.slide17 = lifeBuoyImagePath("27.png");
    this.slide18 = lifeBuoyImagePath("28.png");
    this.slide19 = lifeBuoyImagePath("29.jpeg");
    this.slide20 = lifeBuoyImagePath("30.jpeg");
    this.slide21 = lifeBuoyImagePath("31.jpeg");
    this.slide22 = lifeBuoyImagePath("32.png");
    this.slide23 = lifeBuoyImagePath("33.png");
    this.slide24 = lifeBuoyImagePath("34.png");
    this.slide25 = lifeBuoyImagePath("35.png");
    this.slide26 = lifeBuoyImagePath("36.png");
    this.slide27 = lifeBuoyImagePath("37.png");
    this.Img38 = lifeBuoyImagePath("38.png");

    this.state = {
      toggleHeader: false,
      showSayHello: false,
      footerBgColor: "dark",
      footerActive: false,
      fullpageAnimation: true,
      footerColor: ""
    };
  }

  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    window.addEventListener("scroll", this.handleScroll);
    if (!isMobile) {
      // require('debug.addIndicators');
      this.pageAnimation();
    }
    const classArray = [
      "color1",
      "color2",
      "color3",
      "color4",
      "color5",
      "color6"
    ];
    const random = classArray[Math.floor(Math.random() * classArray.length)];
    this.setState({
      footerColor: random
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  pageAnimation() {
    this.ScrollMagic = require("scrollmagic");
    this.controller = new this.ScrollMagic.Controller();
    ScrollMagicPluginGsap(
      this.ScrollMagic,
      TweenMax,
      TimelineLite,
      TimelineMax
    );

    // const bganimation1 = new TimelineLite();
    // bganimation1.fromTo(
    //   ".lifebuoy",
    //   0.99,
    //   { backgroundColor: "#ffffff" },
    //   { backgroundColor: "#d03b32", ease: Power4.easeOut },
    //   "-=1"
    // );
    // new this.ScrollMagic.Scene({
    //   triggerElement: ".changeColor",
    //   triggerHook: 0.4
    // })
    //   .setTween(bganimation1)
    //   .addIndicators()
    //   .addTo(this.controller);

    // const bganimation2 = new TimelineLite();
    // bganimation2.fromTo(
    //   ".lifebuoy",
    //   0.99,
    //   { backgroundColor: "#d03b32" },
    //   { backgroundColor: "#ffffff", ease: Power4.easeOut },
    //   "-=1"
    // );
    // new this.ScrollMagic.Scene({
    //   triggerElement: ".backtowhite",
    //   triggerHook: 0.4
    // })
    //   .setTween(bganimation2)
    //   .addIndicators()
    //   .addTo(this.controller);

    // const bganimation3 = new TimelineLite();
    // bganimation3.fromTo(
    //   ".lifebuoy",
    //   0.5,
    //   { backgroundColor: "#ffffff" },
    //   { backgroundColor: "#d03b32", ease: Power4.easeOut },
    //   "-=1"
    // );
    // new this.ScrollMagic.Scene({
    //   triggerElement: ".changeColorRed",
    //   triggerHook: 0.4
    // })
    //   .setTween(bganimation3)
    //   //.addIndicators()
    //   .addTo(this.controller);

    // const animation2 = new TimelineLite();
    // animation2.to(".thambbi", 0.5, {
    //   backgroundColor: "#fff",
    //   autoAlpha: 1,
    //   ease: Power4.easeOut
    // });
    // new this.ScrollMagic.Scene({ triggerElement: ".fold-3", triggerHook: 1 })
    //   .setTween(animation2)
    //   // .addIndicators()
    //   .addTo(this.controller);

    const outers = document.querySelectorAll(".fold-1-img");
    // outers2 = document.querySelectorAll(".fold-2-img"),
    // outers3 = document.querySelectorAll(".fold-2-group");

    for (let i = 0; i < outers.length; i++) {
      const child = outers[i].childNodes[0].childNodes;
      const fold1Animation = new TimelineLite();
      fold1Animation.fromTo(
        child,
        1.5,
        {
          scale: 1.2,
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
        },
        {
          scale: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: Power4.easeOut
        },
        "-=.95"
      );

      new this.ScrollMagic.Scene({ triggerElement: outers[i], reverse: false })
        .setTween(fold1Animation)
        .addTo(this.controller);
    }

    // for (let i = 0; i < outers2.length; i++) {
    //   const child = outers2[i].childNodes[0].childNodes;
    //   const fold2Animation = new TimelineLite();
    //   fold2Animation.fromTo(
    //     child,
    //     1.5,
    //     {
    //       y: 20,
    //       scale: 1.2,
    //       clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
    //     },
    //     {
    //       y: 50,
    //       scale: 1,
    //       clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    //       ease: Power4.easeOut
    //     },
    //     "-=.95"
    //   );

    //   new this.ScrollMagic.Scene({ triggerElement: outers2[i], reverse: false })
    //     //.addIndicators() // add indicators (requires plugin)
    //     .setTween(fold2Animation)
    //     .addTo(this.controller);
    // }

    // for (let i = 0; i < outers3.length; i++) {
    //   const child = outers3[i].childNodes[0].childNodes;
    //   const fold2Animation = new TimelineLite();
    //   fold2Animation.fromTo(
    //     child,
    //     2,
    //     { opacity: 0, y: 100 },
    //     { y: 30, opacity: 1, ease: Power4.easeOut },
    //     "-=1"
    //   );

    //   new this.ScrollMagic.Scene({ triggerElement: outers3[i], reverse: false })
    //     //.addIndicators() // add indicators (requires plugin)
    //     .setTween(fold2Animation)
    //     .addTo(this.controller);
    // }
  }

  handleScroll() {
    const mainWrapperElem = this.mainWrapper.current;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const bannerElement = this.bannerWrapper.current;
    const darkArea = this.darkArea.current;
    const darkArea2 = this.darkArea2.current;
    const lightArea = this.lightArea.current;

    if (mainWrapperElem.offsetHeight === winScroll) {
      this.setState({
        toggleHeader: true,
        footerActive: true,
        showSayHello: true
      });
    } else if (
      darkArea.offsetTop + 100 < winScroll &&
      lightArea.offsetTop - 500 > winScroll
    ) {
      this.setState({
        toggleHeader: true,
        showSayHello: true
      });
    } else if (
      lightArea.offsetTop < winScroll &&
      darkArea2.offsetTop > winScroll
    ) {
      this.setState({
        toggleHeader: false,
        showSayHello: true
      });
    } else if (darkArea2.offsetTop - 500 < winScroll) {
      this.setState({
        toggleHeader: true,
        showSayHello: true
      });
    } else if (bannerElement.offsetHeight < winScroll) {
      this.setState({
        toggleHeader: false,
        showSayHello: true
      });
    } else {
      this.setState({
        toggleHeader: false,
        showSayHello: false
      });
    }
    if (isMobile) {
      if (darkArea.offsetTop + 100 < winScroll) {
        this.setState({
          toggleHeader: false,
          showSayHello: true
        });
      }
      const newWinScroll = Math.round(winScroll);
      if (
        mainWrapperElem.offsetHeight < newWinScroll ||
        mainWrapperElem.offsetHeight === newWinScroll
      ) {
        this.setState({
          toggleHeader: true
        });
      }
    }
  }

  render() {
    const pageTitle = (
      <div>
        Lifebuoy <br /> Audit & Research
      </div>
    );
    const projectSummaryContent = {
      workTitle: pageTitle,
      client: `HUL, Lifebuoy`,
      project: `Audit & Research`,
      brief: `Design Lifebuoy's future strategy and package design.`,
      para1: `Brand Lifebuoy is considering rejuvenating its packaging across the range starting from its hero product. The packaging needs to be more relevant to the evolving tastes of its core consumer group.`,
      para2: `It requires a clear understanding of the thought process to substantiate the need for change`,
      para3: ` `
    };
    const metakeywords = meta.thambbi;
    return (
      <PageAnimWrapper>
        <div>
          <Head
            title={`FINDCreative Ave | Lifebuoy`}
            content={`${projectSummaryContent.brief}`}
            keywordslist={`${metakeywords}`}
          />
          <Navigation
            toggleHeader={this.state.toggleHeader}
            showSayHello={this.state.showSayHello}
          />
          <div
            className="page-wrapper work-details-page lifebuoy"
            ref={this.mainWrapper}
          >
            <div
              id="banner"
              ref={this.bannerWrapper}
              className="full-page-wrapper page-header bg"
              style={{ backgroundImage: `url(${this.HeroBanner})` }}
            >
              <div className="banner-img-container"></div>
              <WorkPageNavigation
                prevLink="/work/nihar-gold"
                nextLink="/work/thambbi"
              />
            </div>
            <div className="full-page-wrapper work-content">
              <ProjectPageSummary
                title={projectSummaryContent.workTitle}
                para1={projectSummaryContent.para1}
                para2={projectSummaryContent.para2}
                para3={projectSummaryContent.para3}
                client={projectSummaryContent.client}
                project={projectSummaryContent.project}
                brief={projectSummaryContent.brief}
              />

              <div className="fold-1" ref={this.darkArea}>
                <div className="darkbg"></div>
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-8 col-xs-12">
                      <div className="project-image-container justify-content-left fold-1-img">
                        <div className="col-md-10 col-xs-12 no-gutters">
                          <img src={this.Img1} alt="lifebuoy" />
                        </div>
                      </div>

                      <div className="project-image-container changeColor justify-content-right fold-1-img">
                        <div className="col-md-10 col-xs-12 no-gutters align-right">
                          <img src={this.Img2} alt="lifebuoy" />
                        </div>
                      </div>

                      <div className="project-image-container justify-content-left fold-1-img">
                        <div className="col-md-10 col-xs-12 no-gutters">
                          <img src={this.Img3} alt="lifebuoy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fold-2" ref={this.lightArea}>
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-8 col-xs-12">
                      <div className="project-image-container backtowhite justify-content-center fold-1-tiles-img">
                        <div className="col-md-12 col-xs-12 no-gutters align-right">
                          <div className="img-tiles">
                            <img src={this.Img4} alt="lifebuoy" />
                            <img src={this.Img5} alt="lifebuoy" />
                          </div>
                          <div className="img-tiles">
                            <img src={this.Img6} alt="lifebuoy" />
                            <img src={this.Img8} alt="lifebuoy" />
                          </div>
                        </div>
                      </div>

                      <div className="project-image-container justify-content-left fold-1-img custom-img">
                        <div className="col-md-12 col-xs-12 no-gutters align-right">
                          <div className="img-tiles">
                            <img src={this.Img9} alt="lifebuoy" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="slider-wrapper lifebuoy-slider changeColorRed"
                ref={this.darkArea2}
              >
                <div className="darkbg"></div>
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-8 col-xs-12">
                      <div className="project-image-container justify-content-right fold-1-img">
                        <div className="col-md-8 col-xs-12 no-gutters align-right">
                          <img src={this.Img10} alt="lifebuoy" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-9 col-xs-12">
                      <SimpleSlider
                        dots={false}
                        infinite={true}
                        speed={2000}
                        slidesToShow={1}
                        slidesToScroll={1}
                        fade={false}
                        autoplay={false}
                        autoplaySpeed={50}
                        pauseOnHover={false}
                        slide1={this.slide1}
                        slide2={this.slide2}
                        slide3={this.slide3}
                        slide4={this.slide4}
                        slide5={this.slide5}
                        slide6={this.slide6}
                        slide7={this.slide7}
                        slide8={this.slide8}
                        slide9={this.slide9}
                        slide10={this.slide10}
                        slide11={this.slide11}
                        slide12={this.slide12}
                        slide13={this.slide13}
                        slide14={this.slide14}
                        slide15={this.slide15}
                        slide16={this.slide16}
                        slide17={this.slide17}
                        slide18={this.slide18}
                        slide19={this.slide19}
                        slide20={this.slide20}
                        slide21={this.slide21}
                        slide22={this.slide22}
                        slide23={this.slide23}
                        slide24={this.slide24}
                        slide25={this.slide25}
                        slide26={this.slide26}
                        slide27={this.slide27}
                      />
                    </div>
                  </div>
                </div>
                <div className="fold-1 last">
                  <div className="container">
                    <div className="row justify-content-center no-gutters">
                      <div className="col-md-8 col-xs-12">
                        <div className="project-image-container justify-content-center fold-1-img">
                          <div className="col-md-12 col-xs-12 no-gutters">
                            <img src={this.Img38} alt="lifebuoy" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer
            activeSlide={this.state.currentSlide}
            direction={this.state.currentDirection}
            footerBgColor={this.state.footerBgColor}
            toggleHeader={this.state.toggleHeader}
            footerActive={this.state.footerActive}
            fullpageAnimation={this.state.fullpageAnimation}
            ref={this.footerWrapper}
            onScroll={this.handleScroll}
          >
            <small className="footer-subtitle subtitle">Next Project?</small>
            <Link
              to="/work/thambbi"
              data-text="Thambbi"
              className={`title footer-title ${this.state.footerColor} `}
            >
              Thambbi
              <div className="footer-arrow">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
              </div>
            </Link>
          </Footer>
        </div>
      </PageAnimWrapper>
    );
  }
}

export default Lifebuoy;
