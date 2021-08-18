import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect"; //is for mobile devices
import Head from "../Head";
import PageAnimWrapper from "../../components/pagetransition";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import { TimelineLite, TweenMax, Power1, Power4, CSSPlugin, gsap } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import ProjectPageSummary from "../../components/workdetailsanim";
import { tlcImagePath } from "../../utils/assetUtils";
import WorkPageNavigation from "../../components/workpagenav";
import * as meta from "../../components/meta.json";
import { colorClassList } from "../../components/colorconfig";
import "./tlc.scss";
/* eslint-disable no-console */
const plugins = [CSSPlugin];

class Tlc extends Component {
  constructor(props) {
    super(props);
    this.ScrollMagic = null;
    this.controller = null;
    this.mainWrapper = React.createRef();
    this.footerWrapper = React.createRef();
    this.bannerWrapper = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.pageAnimation = this.pageAnimation.bind(this);

    this.tlcHeaderbg = tlcImagePath("tlc-hero-banner.jpg");
    // this.tlcModel = tlcImagePath("tlc-model.png");
    this.tlccreamycheese = tlcImagePath("tlc-creamy-cheese.png");
    this.tlcpack1 = tlcImagePath("tlc-product1.png");
    this.tlcpack2 = tlcImagePath("tlc-product2.png");
    this.tlcpack3 = tlcImagePath("tlc-cheese.png");
    this.tlcfooterhero = tlcImagePath("tlc-paratha.jpg");
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
    //require('debug.addIndicators');

    this.ScrollMagic = require("scrollmagic");
    this.controller = new this.ScrollMagic.Controller();
    ScrollMagicPluginGsap(this.ScrollMagic, TweenMax, TimelineLite, gsap);

    const cardParallax = new TimelineLite();
    cardParallax
      .fromTo(
        ".mobile-scrn-1",
        0.8,
        { y: -50 },
        { y: -250, ease: Power1.easeInOut },
        "-=0.4"
      )
      .fromTo(
        ".mobile-scrn-2",
        0.7,
        { y: 0 },
        { y: -250, ease: Power1.easeInOut },
        "-=0.4"
      );

    new this.ScrollMagic.Scene({
      triggerElement: ".fold-3",
      triggerHook: 0.9,
      duration: "100%",
      reverse: true
    })
      //.addIndicators()
      .setTween(cardParallax)
      .addTo(this.controller);

    // const outers = document.querySelectorAll(".fold-3-img");
    // for (let i = 0; i < outers.length; i++) {
    //   const child = outers[i].childNodes[0].childNodes;
    //   console.log('child', child);
    //   const fold3Animation = new TimelineLite();
    //   fold3Animation.fromTo(
    //     child,
    //     1.5,
    //     {
    //       y: 20,
    //       scale: 1.2,
    //       clipPath: "polygon(0% 0%, 0% 10%, 0% 100%, 0% 100%)"
    //     },
    //     {
    //       y: 50,
    //       scale: 1,
    //       clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    //       ease: Power4.easeInOut
    //     },
    //     "-=.95"
    //   );

    //   new this.ScrollMagic.Scene({
    //     triggerElement: outers[i],
    //     reverse: false,
    //     scrollEase: 0.1, // scroll speed
    //     maxOffset: 500
    //   })
    //     //.addIndicators() // add indicators (requires plugin)
    //     .setTween(fold3Animation)
    //     .addTo(this.controller);
    // }
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
        toggleHeader: true,
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
      workTitle: `The Laughing Cow Sachet`,
      client: `TLC, Creamy Cheese`,
      project: `Packaging Design`,
      brief: `Design a Sachet for the Indian Market`,
      para1: `For the first time in the Indian market, The Laughing Cow Cheese launched a Creamy Cheese Sachet at Rs 10, to introduce masses to the yummy taste of cheese. So even with packaging design, we knew we had to get into the Indian mindset. To start off with, we broke away from the usual bread-cheese partnership and designed around desi tastes like Parathas and Dosas. We kept the design simple and self-explanatory and also played up the name of the pack- CREAMY, to bring alive the brand proposition of Deliciously Soft & Creamy Cheese.`,
      para2: ` `
    };
    const metakeywords = meta.tlc;
    return (
      <PageAnimWrapper>
        <div>
          <Head
            title={`FINDCreative Ave | ${projectSummaryContent.workTitle}`}
            content={`${projectSummaryContent.team}`}
            keywordslist={`${metakeywords}`}
          />
          <Navigation
            toggleHeader={this.state.toggleHeader}
            showSayHello={this.state.showSayHello}
          />

          <div
            className="page-wrapper work-details-page tlc tlc-page-wrapper"
            ref={this.mainWrapper}
          >
            <div
              id="banner"
              ref={this.bannerWrapper}
              className="full-page-wrapper page-header bg"
              style={{ backgroundImage: `url(${this.tlcHeaderbg})` }}
            >
              <WorkPageNavigation
                prevLink="/work/thambbi"
                nextLink="/work/sussegado-coffee"
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

              <div className="fold-2">
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-4 col-xs-12 no-gutters">
                      <div className="project-image-container img-grid row">
                        <div className="project-image-container justify-content-center">
                          <img src={this.tlccreamycheese} alt="tlc" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fold-3">
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-8 col-xs-12">
                      <div className="project-image-container img-grid row">
                        <div className="col-md-5 col-xs-12">
                          <div className="project-image-container mobile-scrn-1">
                            <img
                              className="tlc-pack1"
                              src={this.tlcpack1}
                              alt="tlc"
                            />
                          </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5 col-xs-12">
                          <div className="project-image-container mobile-scrn-2 right-img">
                            <img
                              className="tlc-pack2"
                              src={this.tlcpack2}
                              alt="tlc"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="diagonal-bg"></div>
                </div>
              </div>
              <div className="fold-4">
                <div className="container">
                  <div className="row justify-content-left no-gutters">
                    <div className="col-md-7 col-xs-12 no-gutters">
                      <div className="project-image-container img-grid">
                        <div className="project-image-container mobile-scrn-1 justify-content-left">
                          <img
                            className="cheese-pack"
                            src={this.tlcpack3}
                            alt="tlc"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fold-5">
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <img src={this.tlcfooterhero} alt="tlc" />
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

export default Tlc;
