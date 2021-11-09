import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect"; //is for mobile devices
import Head from "../Head";
import PageAnimWrapper from "../../components/pagetransition";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import { TimelineLite, TweenMax, Power1, Power4, CSSPlugin, gsap } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import OzivaSlider from "../../components/ozivaslider";
import ProjectPageSummary from "../../components/workdetailsanim";
import { ozivakidsImagePath } from "../../utils/assetUtils";
import WorkPageNavigation from "../../components/workpagenav";
import * as meta from "../../components/meta.json";
import { colorClassList } from "../../components/colorconfig";
import "./ozivakids.scss";
/* eslint-disable no-console */
const plugins = [CSSPlugin];

class OzivaKids extends Component {
  constructor(props) {
    super(props);
    this.ScrollMagic = null;
    this.controller = null;
    this.mainWrapper = React.createRef();
    this.footerWrapper = React.createRef();
    this.bannerWrapper = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.pageAnimation = this.pageAnimation.bind(this);

    this.ozivakidsHeaderbg = ozivakidsImagePath("cover.jpg");
    this.ozivakidstitle = ozivakidsImagePath("ozivakids-text1.png");
    this.ozivakidsProducts = ozivakidsImagePath("oziva-kids-group.png");
    this.ozivakidsVisionGummies = ozivakidsImagePath("pack-oziva-08.jpg");
    this.ozivakidsBrainGummies = ozivakidsImagePath("pack-oziva-07.jpg");
    this.ozivakidsImmunityGummies = ozivakidsImagePath("pack-oziva-06.jpg");
    this.ozivakidsMixChoco = ozivakidsImagePath("gummies.png");
    this.ozivakidsStickers = ozivakidsImagePath("book.jpg");

    this.ozivakidsslide01 = ozivakidsImagePath("Gullu-Opens-Banis-Eyes-01.jpg");
    this.ozivakidsslide02 = ozivakidsImagePath("Gullu-Opens-Banis-Eyes-02.jpg");
    this.ozivakidsslide03 = ozivakidsImagePath("Gullu-Opens-Banis-Eyes-03.jpg");
    this.ozivakidsslide04 = ozivakidsImagePath("Gullu-Opens-Banis-Eyes-04.jpg");
    this.ozivakidsslide05 = ozivakidsImagePath("Gullu-Opens-Banis-Eyes-05.jpg");
    this.ozivakidsslide06 = ozivakidsImagePath("Gullu-Opens-Banis-Eyes-06.jpg");
    this.ozivakidsslide07 = ozivakidsImagePath("Gullu-Opens-Banis-Eyes-07.jpg");
    this.ozivakidsslide08 = ozivakidsImagePath("Gullu-Opens-Banis-Eyes-08.jpg");
    this.ozivakidsslide09 = ozivakidsImagePath("Gullu-Opens-Banis-Eyes-09.jpg");
    this.ozivakidsslide10 = ozivakidsImagePath("Gullu-Opens-Banis-Eyes-10.jpg");
    this.ozivakidsslide11 = ozivakidsImagePath("Gullu-Opens-Banis-Eyes-11.jpg");
    this.ozivakidsslide12 = ozivakidsImagePath("Gullu-Opens-Banis-Eyes-12.jpg");
    this.ozivakidsslide13 = ozivakidsImagePath("Gullu-Opens-Banis-Eyes-13.jpg");
    this.ozivakidsslide14 = ozivakidsImagePath("Gullu-Opens-Banis-Eyes-14.jpg");
    this.ozivakidsslide15 = ozivakidsImagePath("Gullu-Opens-Banis-Eyes-15.jpg");
    this.ozivakidsslide16 = ozivakidsImagePath("Gullu-Opens-Banis-Eyes-16.jpg");
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
      workTitle: `OZiva Kids <br/> Gummies`,
      client: `OZiva Kids Nutrition`,
      project: `Packaging Design`,
      brief: `Design packaging for OZiva’s Kids’ Nutrition range`,
      para1: `It sure takes a lot to get kids to consume anything healthy. So when OZiva wanted us to design packaging for their kids’ nutrition range (Gummies and Protein Powder), we put ourselves in the shoes of a 7-year old, to design around certain truths:`,
      para2: `Kids love to feel grown-up. So, we introduced a simple gummy dispenser as part of the packaging. A tiny opening from which the kid can pull a gummy out each day. Kids love quirky characters. They could look up to elephants for their memory, chimps for their hunger for adventure, Tigers for strength and Owls for eyesight. And so, we got each animal to represent a product based on its main benefit.`,
      para3: `Colour-colour which colour do you choose? Kids are intuitively drawn to interesting colours. So we didn’t shy away from using them well. Mamma makes everything more fun. Each box in the range comes with an engaging comic-style story with the OZiva characters. Something moms could read out to their little ones, creating magical moments between them. All along, while she makes sure her child is staying healthy.
      `
    };
    const metakeywords = meta.ozivakids;
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
            className="page-wrapper work-details-page ozivakids ozivakids-page-wrapper"
            ref={this.mainWrapper}
          >
            <div
              id="banner"
              ref={this.bannerWrapper}
              className="full-page-wrapper page-header bg"
              style={{ backgroundImage: `url(${this.ozivakidsHeaderbg})` }}
            >
              <WorkPageNavigation
                prevLink="/work/hershey"
                nextLink="/work/tlc"
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
                    <div className="col-md-8 col-xs-12 no-gutters">
                      <div className="project-image-container justify-content-center img-grid row fold-2-img">
                        <div className="project-image-container justify-content-center fold-2-img">
                          <div className="col-md-6 col-xs-12">
                            <img
                              src={this.ozivakidstitle}
                              alt="ozivakidstitle"
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
                    <div className="col-md-9 col-xs-12 no-gutters">
                      <div className="fold3-imageitem1">
                        <img
                          src={this.ozivakidsProducts}
                          alt="ozivakidsproducts"
                        />
                      </div>
                      <div className="fold3-imageitem">
                        <img
                          src={this.ozivakidsVisionGummies}
                          alt="ozivakidsproducts"
                        />
                      </div>
                      <div className="fold3-imageitem">
                        <img
                          src={this.ozivakidsBrainGummies}
                          alt="ozivakidsproducts"
                        />
                      </div>
                      <div className="fold3-imageitem">
                        <img
                          src={this.ozivakidsImmunityGummies}
                          alt="ozivakidsproducts"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fold-4">
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-9 col-xs-12">
                      <div className="project-image-container justify-content-right">
                        <div className="col-md-10 col-xs-12 no-gutters oziva-kids-chocolate">
                          <img
                            src={this.ozivakidsMixChoco}
                            alt="ozivakidsproducts"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="fold-5 bg background-mob"
                style={{ backgroundImage: `url(${this.ozivakidsStickers})` }}
              ></div>
              <div className="fold-6 full-width ozivakids-mob-slide">
                <div className="ozivakids-slider">
                  <OzivaSlider
                    dots={false}
                    infinite={true}
                    speed={3000}
                    slidesToShow={1}
                    slidesToScroll={1}
                    fade={false}
                    autoplay={false}
                    autoplaySpeed={2000}
                    pauseOnHover={false}
                    customnextArrow={true}
                    customprevArrow={true}
                    slide1={this.ozivakidsslide01}
                    slide2={this.ozivakidsslide02}
                    slide3={this.ozivakidsslide03}
                    slide4={this.ozivakidsslide04}
                    slide5={this.ozivakidsslide05}
                    slide6={this.ozivakidsslide06}
                    slide7={this.ozivakidsslide07}
                    slide8={this.ozivakidsslide08}
                    slide9={this.ozivakidsslide09}
                    slide10={this.ozivakidsslide10}
                    slide11={this.ozivakidsslide11}
                    slide12={this.ozivakidsslide12}
                    slide13={this.ozivakidsslide13}
                    slide14={this.ozivakidsslide14}
                    slide15={this.ozivakidsslide15}
                    slide16={this.ozivakidsslide16}
                  />
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
              to="/work/tlc"
              data-text="The Laughing Cow"
              className={`title footer-title ${this.state.footerColor} `}
            >
              The Laughing Cow
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

export default OzivaKids;
