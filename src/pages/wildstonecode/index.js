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
import { wildstonecodeImagePath } from "../../utils/assetUtils";
import WorkPageNavigation from "../../components/workpagenav";
import * as meta from "../../components/meta.json";
import { colorClassList } from "../../components/colorconfig";
import "./wildstonecode.scss";
/* eslint-disable no-console */
const plugins = [CSSPlugin];

class WildStoneCodeWhite extends Component {
  constructor(props) {
    super(props);
    this.ScrollMagic = null;
    this.controller = null;
    this.mainWrapper = React.createRef();
    this.footerWrapper = React.createRef();
    this.bannerWrapper = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.pageAnimation = this.pageAnimation.bind(this);

    this.wildstoneHeaderbg = wildstonecodeImagePath("ws-cover.jpg");
    this.wildstonePattern = wildstonecodeImagePath("mockup2.jpg");
    this.wildstoneSpray1 = wildstonecodeImagePath("ws-spray1.jpg");
    this.wildstoneSpray2 = wildstonecodeImagePath("ws-spray2.jpg");
    this.wildstonemockup = wildstonecodeImagePath("wscw-bottle.jpg");
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
      workTitle: `Wild Stone <br /> Code White`,
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
            className="page-wrapper work-details-page wild-stone-code wildstonecode-page-wrapper"
            ref={this.mainWrapper}
          >
            <div
              id="banner"
              ref={this.bannerWrapper}
              className="full-page-wrapper page-header bg"
              style={{ backgroundImage: `url(${this.wildstoneHeaderbg})` }}
            >
              <WorkPageNavigation prevLink="/work/oziva" nextLink="/work/tlc" />
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
                className="fold-2 bg"
                style={{ backgroundImage: `url(${this.wildstonePattern})` }}
              ></div>

              <div className="fold-3">
                <div className="container">
                  <div className="row justify-content-center no-gutters">
                    <div className="col-md-6 col-xs-12 no-gutters">
                      <div className="fold3-imageitem1">
                        <img
                          src={this.wildstoneSpray1}
                          alt="wildstoneproduct1"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-xs-12 no-gutters">
                      <div className="fold3-imageitem2">
                        <img
                          src={this.wildstoneSpray2}
                          alt="wildstoneproduct2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="fold-4 page-header bg"
                style={{ backgroundImage: `url(${this.wildstonemockup})` }}
              ></div>
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
              to="/work/nrikitchen"
              data-text="NRI Kitchen"
              className={`title footer-title ${this.state.footerColor} `}
            >
              NRI Kitchen
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

export default WildStoneCodeWhite;
