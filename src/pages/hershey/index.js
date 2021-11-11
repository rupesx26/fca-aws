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
import { hersheyImagePath } from "../../utils/assetUtils";
import WorkPageNavigation from "../../components/workpagenav";
import * as meta from "../../components/meta.json";
import { colorClassList } from "../../components/colorconfig";
import "./hershey.scss";
/* eslint-disable no-console */
const plugins = [CSSPlugin];

class Hershey extends Component {
  constructor(props) {
    super(props);
    this.ScrollMagic = null;
    this.controller = null;
    this.mainWrapper = React.createRef();
    this.footerWrapper = React.createRef();
    this.bannerWrapper = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.pageAnimation = this.pageAnimation.bind(this);

    this.hersheyHeaderbg = hersheyImagePath("hershey-hero-banner.jpg");
    this.hersheyBakingKitbg = hersheyImagePath("baking-kit-bg.jpg");
    this.hersheyBakingKittitle = hersheyImagePath("hershey-baking-title.png");
    this.hersheyBakingKitBox = hersheyImagePath("hersheys-pack01.png");
    this.hersheyBakingKitBox1 = hersheyImagePath("hersheys-pack02.png");
    this.hersheyBakingKitBox2 = hersheyImagePath("hersheys-pack3.png");
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
        { y: -280 },
        { y: -450, ease: Power1.easeInOut },
        "-=0.4"
      )
      .fromTo(
        ".mobile-scrn-2",
        0.7,
        { y: -150 },
        { y: -280, ease: Power1.easeInOut },
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
      workTitle: `Hershey's Baking Kit`,
      client: `Hershey's, HomeChef Baking Kit`,
      project: `Packaging Design`,
      brief: `To design an e-com pack for Hershey's, to drive relevance amongst first-time bakers and homemakers.`,
      para1: `The pandemic led to everyone being confined to working from home. This gave people the time to cook/bake for the family and experiment with new recipes.The brand leveraged on this trend to launch an exclusive e-commerce pack,  'HomeChef Baking Kit' ,to aid the novice baker at home and convey the ease of baking with this kit.`,
      para2: `Since it is an e-com pack, we designed it in a way to showcase the Hershey's products that you get in this pack and the endless possibilities with Hershey's. All of this to drive higher perceived value around the pack and bring out the MasterChef in you.`,
      para3: ` `
    };
    const metakeywords = meta.hershey;
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
            className="page-wrapper work-details-page hershey hershey-page-wrapper"
            ref={this.mainWrapper}
          >
            <div
              id="banner"
              ref={this.bannerWrapper}
              className="full-page-wrapper page-header bg"
              style={{ backgroundImage: `url(${this.hersheyHeaderbg})` }}
            >
              <WorkPageNavigation
                prevLink="/work/cocosoul"
                nextLink="/work/ozivakids"
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
                className="fold-2"
                style={{ backgroundImage: `url(${this.hersheyBakingKitbg})` }}
              >
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-10 col-xs-12">
                      <div className="justify-content-left">
                        <div className="col-md-6 col-xs-12">
                          <img
                            className="baking-title"
                            src={this.hersheyBakingKittitle}
                            alt="bakingkittitle"
                          />
                        </div>
                      </div>
                      <div className="hershey-mobile">
                        <div className="project-image-container justify-content-center">
                          <div className="col-md-11 col-xs-12 align-center mobile-image">
                            <img
                              className="mob-baking-kit-box"
                              src={this.hersheyBakingKitBox}
                              alt="bakingkitbox"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="hershey-desktop">
                        <div className="project-image-container justify-content-right">
                          <div className="col-md-11 col-xs-12 align-right">
                            <img
                              className="baking-kit-box"
                              src={this.hersheyBakingKitBox}
                              alt="bakingkitbox"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fold-3">
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-10 col-xs-12">
                      <div className="justify-content-left">
                        <div className="col-md-7 col-xs-12 no-gutters">
                          <img
                            className="hershey-pack1"
                            src={this.hersheyBakingKitBox1}
                            alt="hershey"
                          />
                        </div>
                      </div>
                      <div className="project-image-container justify-content-right">
                        <div className="col-md-8 col-xs-12 no-gutters">
                          <img
                            className="hershey-pack1"
                            src={this.hersheyBakingKitBox2}
                            alt="hershey"
                          />
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
              to="/work/ozivakids"
              data-text="OZiva Kids"
              className={`title footer-title ${this.state.footerColor} `}
            >
              OZiva Kids
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

export default Hershey;
