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
import { setWetImagePath } from "../../utils/assetUtils";
import WorkPageNavigation from "../../components/workpagenav";
import * as meta from "../../components/meta.json";
import { colorClassList } from "../../components/colorconfig";
import "./setwet.scss";
/* eslint-disable no-console */
const plugins = [CSSPlugin];
console.log(plugins);

class SetWet extends Component {
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

    this.HeroBanner = setWetImagePath("banner.jpg");
    this.slide1 = setWetImagePath("Slide2.png");
    this.slide2 = setWetImagePath("Slide3.png");
    this.slide3 = setWetImagePath("Slide4.png");
    this.slide4 = setWetImagePath("Slide5.png");
    this.slide5 = setWetImagePath("Slide6.png");
    this.slide6 = setWetImagePath("Slide7.png");
    this.slide7 = setWetImagePath("Slide8.png");
    this.slide8 = setWetImagePath("Slide9.png");
    this.slide9 = setWetImagePath("Slide10.png");
    this.slide10 = setWetImagePath("Slide11.png");
    this.slide11 = setWetImagePath("Slide12.png");
    this.slide12 = setWetImagePath("Slide13.png");
    this.slide13 = setWetImagePath("Slide14.png");
    this.slide14 = setWetImagePath("Slide15.png");
    this.slide15 = setWetImagePath("Slide16.png");
    this.slide16 = setWetImagePath("Slide17.png");
    this.slide17 = setWetImagePath("Slide18.png");
    this.slide18 = setWetImagePath("Slide19.png");
    this.slide19 = setWetImagePath("Slide20.png");
    this.slide20 = setWetImagePath("Slide21.png");
    this.slide21 = setWetImagePath("Slide22.png");
    this.slide22 = setWetImagePath("Slide23.png");
    this.slide23 = setWetImagePath("Slide24.png");
    this.slide24 = setWetImagePath("Slide25.png");

    this.slideTwo1 = setWetImagePath("Slide39.png");
    this.slideTwo2 = setWetImagePath("Slide40.png");
    this.slideTwo3 = setWetImagePath("Slide41.png");
    this.slideTwo4 = setWetImagePath("Slide42.png");
    this.slideTwo5 = setWetImagePath("Slide43.png");
    this.slideTwo6 = setWetImagePath("Slide44.png");
    this.slideTwo7 = setWetImagePath("Slide45.png");
    this.slideTwo8 = setWetImagePath("Slide46.png");
    this.slideTwo9 = setWetImagePath("Slide47.png");
    this.slideTwo10 = setWetImagePath("Slide48.png");
    this.slideTwo11 = setWetImagePath("Slide49.png");
    this.slideTwo12 = setWetImagePath("Slide50.png");
    this.slideTwo13 = setWetImagePath("Slide51.png");
    this.slideTwo14 = setWetImagePath("Slide52.png");
    this.slideTwo15 = setWetImagePath("Slide53.png");
    this.slideTwo16 = setWetImagePath("Slide54.png");
    this.slideTwo17 = setWetImagePath("Slide55.png");
    this.slideTwo18 = setWetImagePath("Slide56.png");
    this.slideTwo19 = setWetImagePath("Slide57.png");
    this.slideTwo20 = setWetImagePath("Slide58.png");

    this.Img1 = setWetImagePath("Static1.png");
    this.Img2 = setWetImagePath("Static2.png");
    this.Img3 = setWetImagePath("Static3.png");
    this.Img4 = setWetImagePath("Static4.png");
    this.Img5 = setWetImagePath("Static5.png");
    this.Img6 = setWetImagePath("Static6.png");
    this.Img7 = setWetImagePath("Static7.png");
    this.Img8 = setWetImagePath("Static8.png");
    this.Img9 = setWetImagePath("Static9.png");
    this.Img10 = setWetImagePath("Static10.png");
    this.Img11 = setWetImagePath("Static11.png");

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
    // const darkArea2 = this.darkArea2.current;
    // const lightArea = this.lightArea.current;

    if (mainWrapperElem.offsetHeight === winScroll) {
      this.setState({
        toggleHeader: true,
        footerActive: true,
        showSayHello: true
      });
    } else if (darkArea.offsetTop + 100 < winScroll) {
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
        Set Wet <br /> Brand Audit
      </div>
    );
    const projectSummaryContent = {
      workTitle: pageTitle,
      client: `Marico, Set Wet`,
      project: `Audit & Research`,
      brief: `Brand Audit and Research on the TG.`,
      para1: `Understanding the brand image & product knowledge in the market- how does the Target Group perceives the brand now & what they expect in the future? This research will help us understand and build better brand architecture, category and package design.`,
      para2: ` `,
      para3: ` `
    };
    const metakeywords = meta.thambbi;
    return (
      <PageAnimWrapper>
        <div>
          <Head
            title={`FINDCreative Ave | SetWet`}
            content={`${projectSummaryContent.brief}`}
            keywordslist={`${metakeywords}`}
          />
          <Navigation
            toggleHeader={this.state.toggleHeader}
            showSayHello={this.state.showSayHello}
          />
          <div
            className="page-wrapper work-details-page setwet"
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
                prevLink="/work/oziva"
                nextLink="/work/lifebuoy"
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

              <div className="setwet-slider setwet-slider-bg-1">
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
                    />
                  </div>
                </div>
              </div>

              <div className="fold-1" ref={this.darkArea}>
                <div className="darkbg"></div>
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-8 col-xs-12">
                      <div className="project-image-container justify-content-left fold-1-img">
                        <div className="col-md-8 col-xs-12 no-gutters">
                          <img src={this.Img1} alt="setwet" />
                        </div>
                      </div>

                      <div className="project-image-container changeColor justify-content-right fold-1-img">
                        <div className="col-md-8 col-xs-12 no-gutters align-right">
                          <img src={this.Img2} alt="setwet" />
                        </div>
                      </div>

                      <div className="project-image-container justify-content-left fold-1-img">
                        <div className="col-md-8 col-xs-12 no-gutters">
                          <img src={this.Img3} alt="setwet" />
                        </div>
                      </div>

                      <div className="project-image-container changeColor justify-content-right fold-1-img">
                        <div className="col-md-8 col-xs-12 no-gutters align-right">
                          <img src={this.Img4} alt="setwet" />
                        </div>
                      </div>

                      <div className="project-image-container justify-content-left fold-1-img">
                        <div className="col-md-8 col-xs-12 no-gutters">
                          <img src={this.Img5} alt="setwet" />
                        </div>
                      </div>

                      <div className="project-image-container changeColor justify-content-right fold-1-img">
                        <div className="col-md-8 col-xs-12 no-gutters align-right">
                          <img src={this.Img6} alt="setwet" />
                        </div>
                      </div>

                      <div className="project-image-container justify-content-left fold-1-img">
                        <div className="col-md-8 col-xs-12 no-gutters">
                          <img src={this.Img7} alt="setwet" />
                        </div>
                      </div>

                      <div className="project-image-container changeColor justify-content-right fold-1-img">
                        <div className="col-md-8 col-xs-12 no-gutters align-right">
                          <img src={this.Img8} alt="setwet" />
                        </div>
                      </div>

                      <div className="project-image-container justify-content-left fold-1-img">
                        <div className="col-md-8 col-xs-12 no-gutters">
                          <img src={this.Img9} alt="setwet" />
                        </div>
                      </div>

                      <div className="project-image-container changeColor justify-content-right fold-1-img">
                        <div className="col-md-8 col-xs-12 no-gutters align-right">
                          <img src={this.Img10} alt="setwet" />
                        </div>
                      </div>

                      <div className="project-image-container justify-content-left fold-1-img">
                        <div className="col-md-8 col-xs-12 no-gutters">
                          <img src={this.Img11} alt="setwet" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="setwet-slider setwet-slider-bg-2">
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
                      slide1={this.slideTwo1}
                      slide2={this.slideTwo2}
                      slide3={this.slideTwo3}
                      slide4={this.slideTwo4}
                      slide5={this.slideTwo5}
                      slide6={this.slideTwo6}
                      slide7={this.slideTwo7}
                      slide8={this.slideTwo8}
                      slide9={this.slideTwo9}
                      slide10={this.slideTwo10}
                      slide11={this.slideTwo11}
                      slide12={this.slideTwo12}
                      slide13={this.slideTwo13}
                      slide14={this.slideTwo14}
                      slide15={this.slideTwo15}
                      slide16={this.slideTwo16}
                      slide17={this.slideTwo17}
                      slide18={this.slideTwo18}
                      slide19={this.slideTwo19}
                      slide20={this.slideTwo20}
                    />
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
              to="/work/lifebuoy"
              data-text="Lifebuoy"
              className={`title footer-title ${this.state.footerColor} `}
            >
              Lifebuoy
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

export default SetWet;
