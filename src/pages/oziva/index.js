import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect"; //is for mobile devices
import Head from "../Head";
import PageAnimWrapper from "../../components/pagetransition";
import OzivaSlider from "../../components/ozivaslider";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import { TimelineLite, TweenMax, Power1, Power4, CSSPlugin, gsap } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import ProjectPageSummary from "../../components/workdetailsanim";
import { ozivaImagePath } from "../../utils/assetUtils";
import WorkPageNavigation from "../../components/workpagenav";
import * as meta from "../../components/meta.json";
import { colorClassList } from "../../components/colorconfig";
import "./oziva.scss";
/* eslint-disable no-console */
const plugins = [CSSPlugin];

class Oziva extends Component {
  constructor(props) {
    super(props);
    this.ScrollMagic = null;
    this.controller = null;
    this.mainWrapper = React.createRef();
    this.footerWrapper = React.createRef();
    this.bannerWrapper = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.pageAnimation = this.pageAnimation.bind(this);

    this.ozivaHeaderbg = ozivaImagePath("hero-banner2954.jpg");
    this.oziva1bg = ozivaImagePath("oziva1.jpg");
    this.oziva2 = ozivaImagePath("oziva2.jpg");
    this.oziva3 = ozivaImagePath("oziva3.jpg");
    this.oziva4 = ozivaImagePath("oziva4.jpg");
    this.oziva5 = ozivaImagePath("oziva5.jpg");
    this.oziva7 = ozivaImagePath("oziva7.jpg");
    this.oziva8 = ozivaImagePath("oziva8.jpg");
    this.oziva9 = ozivaImagePath("oziva9.jpg");
    this.oziva10 = ozivaImagePath("oziva10.jpg");
    this.oziva11 = ozivaImagePath("oziva11.jpg");

    this.SbbSlide1 = ozivaImagePath("sbb-13.jpg");
    this.SbbSlide2 = ozivaImagePath("sbb-01.jpg");
    this.SbbSlide3 = ozivaImagePath("sbb-02.jpg");
    this.SbbSlide4 = ozivaImagePath("sbb-03.jpg");
    this.SbbSlide5 = ozivaImagePath("sbb-04.jpg");
    this.SbbSlide6 = ozivaImagePath("sbb-05.jpg");
    this.SbbSlide7 = ozivaImagePath("sbb-06.jpg");
    this.SbbSlide8 = ozivaImagePath("sbb-07.jpg");
    this.SbbSlide9 = ozivaImagePath("sbb-08.jpg");
    this.SbbSlide10 = ozivaImagePath("sbb-09.jpg");
    this.SbbSlide11 = ozivaImagePath("sbb-10.jpg");
    this.SbbSlide12 = ozivaImagePath("sbb-11.jpg");
    this.SbbSlide13 = ozivaImagePath("sbb-12.jpg");

    this.state = {
      toggleHeader: true,
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
      this.pageAnimation();
    }

    const random =
      colorClassList[Math.floor(Math.random() * colorClassList.length)];
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
    ScrollMagicPluginGsap(this.ScrollMagic, TweenMax, TimelineLite, gsap);
    const bgAnimation1 = new TimelineLite();

    bgAnimation1.fromTo(
      ".oziva-page-wrapper",
      1,
      { backgroundColor: "#fff" },
      { backgroundColor: "#fff", ease: Power4.easeOut },
      "-=1"
    );

    new this.ScrollMagic.Scene({
      triggerElement: ".changeColor",
      triggerHook: 0.6
    })
      .setTween(bgAnimation1)
      //.addIndicators()
      .addTo(this.controller);

    const bgAnimation2 = new TimelineLite();
    bgAnimation2.to(".oziva-page-wrapper", 1, {
      backgroundColor: "#fff",
      autoAlpha: 1,
      ease: Power4.easeOut
    });

    new this.ScrollMagic.Scene({ triggerElement: ".fold-4", triggerHook: 0.7 })
      .setTween(bgAnimation2)
      //.addIndicators()
      .addTo(this.controller);

    const outers = document.querySelectorAll(".fold-3-img"),
      outers2 = document.querySelectorAll(".fold-2-img"),
      outers3 = document.querySelectorAll(".fold-6-img");

    for (let i = 0; i < outers.length; i++) {
      const child = outers[i].childNodes[0].childNodes;
      const foldImg3 = new TimelineLite();
      foldImg3.fromTo(
        child,
        1.5,
        {
          y: 20,
          scale: 1.2,
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
        },
        {
          y: 50,
          scale: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: Power4.easeOut
        },
        "-=.95"
      );

      new this.ScrollMagic.Scene({ triggerElement: outers[i], reverse: false })
        //.addIndicators() // add indicators (requires plugin)
        .setTween(foldImg3)
        .addTo(this.controller);
    }

    for (let i = 0; i < outers2.length; i++) {
      const child = outers2[i].childNodes[0];
      const foldImg2 = new TimelineLite();
      foldImg2.fromTo(
        child,
        1.5,
        {
          y: 20,
          scale: 1.2,
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
        },
        {
          y: 50,
          scale: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: Power4.easeOut
        },
        "-=.95"
      );

      new this.ScrollMagic.Scene({ triggerElement: outers2[i], reverse: false })
        //.addIndicators() // add indicators (requires plugin)
        .setTween(foldImg2)
        .addTo(this.controller);
    }

    for (let i = 0; i < outers3.length; i++) {
      const child = outers3[i].childNodes[0];
      const foldImg3 = new TimelineLite();
      foldImg3.fromTo(
        child,
        1.5,
        {
          y: 20,
          scale: 1.2,
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
        },
        {
          y: 50,
          scale: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: Power4.easeOut
        },
        "-=.95"
      );

      new this.ScrollMagic.Scene({ triggerElement: outers3[i], reverse: false })
        //.addIndicators() // add indicators (requires plugin)
        .setTween(foldImg3)
        .addTo(this.controller);
    }

    const fold4Animation = new TimelineLite();
    fold4Animation.fromTo(
      ".oziva-slider",
      1.5,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, ease: Power4.easeOut },
      "-=.60"
    );
  }

  handleScroll() {
    const mainWrapperElem = this.mainWrapper.current;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const bannerElement = this.bannerWrapper.current;

    if (mainWrapperElem.offsetHeight === winScroll) {
      this.setState({
        toggleHeader: true,
        footerActive: true
      });
    } else if (bannerElement.offsetHeight > winScroll) {
      this.setState({
        toggleHeader: false,
        showSayHello: false
      });
    } else if (bannerElement.offsetHeight < winScroll) {
      this.setState({
        toggleHeader: false,
        showSayHello: true
      });
    } else {
      this.setState({
        toggleHeader: false,
        showSayHello: true
      });
    }
    if (isMobile) {
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
    const projectSummaryContent = {
      workTitle: `OZiva <br /> Personal Care`,
      client: `OZiva Personal Care`,
      project: `Packaging Design`,
      brief: `Design the entire range of Personal Care for OZiva`,
      para1: `After building stellar equity in plant-based nutrition, OZiva launched its range of personal care products for skin and hair. While designing the packaging for this range, we knew we had to balance two delicate layers- the foundation of clean botanical science, and the allure of beauty and elegance. So, the design architecture, ingredient story and colours all work in tandem to say OZiva’s clean beauty makes you feel better and more beautiful in every way.`,
      para2: ` `
    };
    const metakeywords = meta.oziva;
    return (
      <PageAnimWrapper>
        <div>
          <Head
            title={`FINDCreative Ave | ${projectSummaryContent.client}`}
            content={`${projectSummaryContent.team}`}
            keywordslist={`${metakeywords}`}
          />
          <Navigation
            toggleHeader={this.state.toggleHeader}
            showSayHello={this.state.showSayHello}
          />

          <div
            className="page-wrapper work-details-page oziva oziva-page-wrapper"
            ref={this.mainWrapper}
          >
            <div
              id="banner"
              ref={this.bannerWrapper}
              className="full-page-wrapper page-header bg"
              style={{ backgroundImage: `url(${this.ozivaHeaderbg})` }}
            >
              <WorkPageNavigation
                prevLink="/work/tlc"
                nextLink="/work/nihar-gold"
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
                location={projectSummaryContent.location}
                team={projectSummaryContent.team}
              />

              <div
                className="fold2 full-page-wrapper page-header bg"
                ref={this.bannerWrapper}
                style={{ backgroundImage: `url(${this.oziva1bg})` }}
              ></div>

              <div className="fold-3">
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-9 col-xs-12">
                      <div className="fold-3-img fold-6-img">
                        <img src={this.oziva2} alt="oziva2" />
                      </div>
                      <div className="fold-3-img changeColor fold-6-img">
                        <img src={this.oziva3} alt="oziva3" />
                      </div>
                      <div className="fold-3-img fold-6-img">
                        <img src={this.oziva4} alt="oziva3" />
                      </div>
                      <div className="fold-3-img project-image-container fold-6-img">
                        <img src={this.oziva5} alt="oziva3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fold-4 full-width">
                <div className="oziva-slider">
                  <OzivaSlider
                    dots={false}
                    infinite={true}
                    speed={3000}
                    slidesToShow={1}
                    slidesToScroll={1}
                    fade={false}
                    autoplay={true}
                    autoplaySpeed={2000}
                    pauseOnHover={false}
                    customnextArrow={true}
                    customprevArrow={true}
                    slide1={this.SbbSlide1}
                    slide2={this.SbbSlide2}
                    slide3={this.SbbSlide3}
                    slide4={this.SbbSlide4}
                    slide5={this.SbbSlide5}
                    slide6={this.SbbSlide6}
                    slide7={this.SbbSlide7}
                    slide8={this.SbbSlide8}
                    slide9={this.SbbSlide9}
                    slide10={this.SbbSlide10}
                    slide11={this.SbbSlide11}
                    slide12={this.SbbSlide12}
                    slide13={this.SbbSlide13}
                  />
                </div>
              </div>
              <div className="fold-5">
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-9 col-xs-12">
                      <div className="fold-5-img fold-6-img">
                        <img src={this.oziva7} alt="oziva7" />
                      </div>
                      <div className="fold-5-img changeColor fold-6-img">
                        <img src={this.oziva8} alt="oziva8" />
                      </div>
                      <div className="fold-5-img fold-6-img">
                        <img src={this.oziva9} alt="oziva9" />
                      </div>
                      <div className="fold-5-img fold-6-img">
                        <img src={this.oziva10} alt="oziva10" />
                      </div>
                      <div className="fold-5-img fold-6-img mgbtm">
                        <img src={this.oziva11} alt="oziva11" />
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
              to="/work/sussegado-coffee"
              data-text="Sussegado Coffee"
              className={`title footer-title ${this.state.footerColor} `}
            >
              Sussegado Coffee
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

export default Oziva;
