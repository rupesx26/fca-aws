import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect"; //is for mobile devices
import Head from "../Head";
import PageAnimWrapper from "../../components/pagetransition";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import { TimelineLite, TweenMax, Power4, CSSPlugin } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import ProjectPageSummary from "../../components/workdetailsanim";
import { niharShantiImagePath } from "../../utils/assetUtils";
import WorkPageNavigation from "../../components/workpagenav";
import * as meta from "../../components/meta.json";
import "./nihar.scss";
/* eslint-disable no-console */
const plugins = [CSSPlugin];

class NiharShanti extends Component {
  constructor(props) {
    super(props);
    this.ScrollMagic = null;
    this.controller = null;
    this.mainWrapper = React.createRef();
    this.footerWrapper = React.createRef();
    this.bannerWrapper = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.pageAnimation = this.pageAnimation.bind(this);

    this.heroBanner = niharShantiImagePath("hero-banner.jpg");
    this.product1 = niharShantiImagePath("nihar-oil1.png");
    this.product2 = niharShantiImagePath("nihar-oil2.png");
    this.product3 = niharShantiImagePath("nihar-oil3.png");
    this.product4 = niharShantiImagePath("nihar-oil4.png");
    this.flower1 = niharShantiImagePath("flower1.png");
    this.flower2 = niharShantiImagePath("flower2.png");
    this.flower3 = niharShantiImagePath("flower3.png");
    this.flower4 = niharShantiImagePath("flower4.png");
    this.flower5 = niharShantiImagePath("flower5.png");
    this.flower6 = niharShantiImagePath("flower6.png");
    this.flower7 = niharShantiImagePath("flower7.png");
    this.flower8 = niharShantiImagePath("flower8.png");
    this.flower9 = niharShantiImagePath("flower9.png");
    this.flower10 = niharShantiImagePath("flower10.png");
    this.flower11 = niharShantiImagePath("flower11.png");
    this.flower12 = niharShantiImagePath("flower12.png");
    this.pageBgRepeat = niharShantiImagePath("paper.jpg");
    this.pageBgTop = niharShantiImagePath("page-bg-top.jpg");
    this.almond = niharShantiImagePath("almond.png");
    this.amla = niharShantiImagePath("amla.png");
    this.coconut = niharShantiImagePath("coconut.png");

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
    ScrollMagicPluginGsap(this.ScrollMagic, TweenMax, TimelineLite);
    const niharProductAmination = new TimelineLite();
    niharProductAmination

      .fromTo(
        ".product-2",
        1.5,
        { opacity: 0, x: 100 },
        { x: 0, opacity: 1, ease: Power4.easeOut },
        "-=.20"
      )
      .fromTo(
        ".product-1",
        1.5,
        { opacity: 0, x: -100 },
        { x: 0, opacity: 1, ease: Power4.easeOut },
        "-=.90"
      );

    new this.ScrollMagic.Scene({
      triggerElement: ".fold-1",
      reverse: false,
      triggerHook: 0.3
    })
      .setTween(niharProductAmination)
      //.addIndicators()
      .addTo(this.controller);

    const niharSarso = new TimelineLite();
    niharSarso
      .fromTo(
        ".product-3",
        2,
        { opacity: 0, y: 100 },
        { y: 0, opacity: 1, ease: Power4.easeOut },
        "-=1"
      )
      .fromTo(
        ".flower-bg-2",
        0.8,
        { opacity: 0 },
        { opacity: 1, ease: Power4.easeOut },
        "-=.70"
      )
      .fromTo(
        ".flower-bg-1",
        1,
        { opacity: 0 },
        { opacity: 1, ease: Power4.easeOut },
        "-=.50"
      )
      .fromTo(
        ".flower-bg-3",
        0.7,
        { opacity: 0 },
        { opacity: 1, ease: Power4.easeOut },
        "-=.50"
      );

    new this.ScrollMagic.Scene({
      triggerElement: ".fold-2",
      reverse: false,
      triggerHook: 0.4
    })
      .setTween(niharSarso)
      //.addIndicators()
      .addTo(this.controller);

    const niharJasmine = new TimelineLite();
    niharJasmine
      .fromTo(
        ".product-4",
        2,
        { opacity: 0, y: 100 },
        { y: 0, opacity: 1, ease: Power4.easeOut },
        "-=.90"
      )
      .fromTo(
        ".flower-bg-9",
        1,
        { opacity: 0 },
        { opacity: 1, ease: Power4.easeOut },
        "-=.90"
      )
      .fromTo(
        ".flower-bg-10",
        1,
        { opacity: 0 },
        { opacity: 1, ease: Power4.easeOut },
        "-=.50"
      );

    new this.ScrollMagic.Scene({
      triggerElement: ".fold-3",
      reverse: false,
      triggerHook: 0.4
    })
      .setTween(niharJasmine)
      //.addIndicators()
      .addTo(this.controller);
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
      workTitle: `Nihar Shanti`,
      client: `Marico, Nihar Shanti`,
      project: `Packaging Design`,
      brief: `Design a label for Nihar Gold for Bihar market`,
      para1: `Nihar coconut oil is the market leader in East India, especially in Bihar. They wanted to launch a premium sub-brand called Nihar Gold. For this, we partnered them with packaging design.`,
      para2: `Our approach was to create something new without losing the familiarity built by the brand over \n so many years. The coconut halves and the hair silhouette announce that it’s a Nihar coconut hair oil product from a mile.  We added a pop of parallel gold streaks to convey that this is a premium sub-brand.`,
      para3: ` `
    };
    const metakeywords = meta.nihargold;
    return (
      <PageAnimWrapper>
        <div>
          <Head
            title={`FINDCreative Ave | ${projectSummaryContent.workTitle}`}
            content={`${projectSummaryContent.brief}`}
            keywordslist={`${metakeywords}`}
          />
          <Navigation
            toggleHeader={this.state.toggleHeader}
            showSayHello={this.state.showSayHello}
          />

          <div
            className="page-wrapper work-details-page nihar-shanti"
            ref={this.mainWrapper}
          >
            <div
              id="banner"
              ref={this.bannerWrapper}
              className="full-page-wrapper page-header bg"
              style={{ backgroundImage: `url(${this.heroBanner})` }}
            >
              <WorkPageNavigation
                prevLink="/work/kate-spade"
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
            </div>

            <div
              className="page-bg-repeat"
              style={{ backgroundImage: `url(${this.pageBgRepeat})` }}
            >
              <div
                className="page-bg-top"
                style={{ backgroundImage: `url(${this.pageBgTop})` }}
              >
                <div className="flower1">
                  <img src={this.flower1} alt="flower1" />
                </div>

                <div className="fold-1">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="product-1">
                          <img src={this.product1} alt="nihar shanti" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="product-2">
                          <img src={this.product2} alt="nihar shanti" />
                        </div>
                      </div>
                      <div className="col-md-6 col-xs-12"></div>
                      <div className="col-md-6 col-xs-12">
                        <div className="fold-1-text">
                          <p>
                            Nihar coconut oil is the market leader in East
                            India, especially in Bihar. They wanted to launch a
                            premium sub-brand called Nihar Gold. For this, Nihar
                            coconut oil is the market leader in East India,
                            especially in Bihar. They wanted to launch a premium
                            sub-brand called Nihar Gold. For this,{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flower2">
                    <img src={this.flower2} alt="flower2" />
                  </div>
                </div>

                <div className="fold-2">
                  <div className="flower3">
                    <img src={this.flower3} alt="flower3" />
                  </div>
                  <div className="container">
                    <div className="row justify-content-center no-gutters">
                      <div className="col-md-10 col-xs-12">
                        <div className="row align-item-center">
                          <div className="col-md-6">
                            <div className="product-info">
                              <h3>SARSO</h3>
                              <p>
                                Nihar coconut oil is the market leader in East
                                India, especially in Bihar. They wanted to
                                launch a premium sub-brand called Nihar Gold.
                                For this, Nihar coconut oil is the market leader
                                in East India, especially in Bihar. They wanted
                                to launch a premium sub-brand called Nihar Gold.
                                For this,{" "}
                              </p>
                              {/* <ul>
                                <li>
                                  <img src={this.flower7} alt="sarso" />
                                </li>
                                <li>
                                  <img src={this.almond} alt="almond" />
                                </li>
                                <li>
                                  <img src={this.amla} alt="amla" />
                                </li>
                              </ul> */}
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="product-3-wrap">
                              <img className="flower-bg-1" src={this.flower4} />
                              <img className="flower-bg-2" src={this.flower5} />
                              <img className="flower-bg-3" src={this.flower6} />
                              <div className="product-3">
                                <img src={this.product3} alt="nihar-shanti" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fold-3">
                  <div className="flower12">
                    <img src={this.flower12} alt="flower12" />
                  </div>
                  <div className="flower8">
                    <img src={this.flower8} alt="flower8" />
                  </div>
                  <div className="container">
                    <div className="row justify-content-center no-gutters">
                      <div className="col-md-10 col-xs-12">
                        <div className="row align-item-center">
                          <div className="col-md-6">
                            <div className="product-4-wrap">
                              <img
                                className="flower-bg-9"
                                src={this.flower9}
                                alt="flower9"
                              />
                              <img
                                className="flower-bg-10"
                                src={this.flower10}
                                alt="flower10"
                              />
                              <div className="product-4">
                                <img src={this.product4} alt="nihar-shanti" />
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="product-info">
                              <h3>JASMINE</h3>
                              <p>
                                Nihar coconut oil is the market leader in East
                                India, especially in Bihar. They wanted to
                                launch a premium sub-brand called Nihar Gold.
                                For this, Nihar coconut oil is the market leader
                                in East India, especially in Bihar. They wanted
                                to launch a premium sub-brand called Nihar Gold.
                                For this,{" "}
                              </p>
                              {/* <ul>
                            <li>
                              <img src={this.coconut} alt="coconut" />
                            </li>
                            <li>
                              <img src={this.flower11} alt="flower11" />
                            </li>
                          </ul> */}
                            </div>
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
              to="/work/thabbi"
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
export default NiharShanti;
