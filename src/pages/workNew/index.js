import React, { Component } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect"; //is for mobile devices
import PageAnimWrapper from "../../components/pagetransition";
import Head from "../Head";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import PortfolioList from "../../components/portfoliolistNew";
import * as meta from "../../components/meta.json";
//import { ScrollScene, addIndicators } from 'scrollscene';
import { colorClassList } from "../../components/colorconfig";
import "./work.scss";

class Work extends Component {
  constructor(props) {
    super(props);

    this.mainWrapper = React.createRef();
    this.footerWrapper = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      wrapperHeight: "500px",
      boxPosition: 0,
      currentSlide: 0,
      currentDirection: "down",
      toggleHeader: true,
      showSayHello: true,
      footerBgColor: "dark",
      inversionColor: false,
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
    const random =
      colorClassList[Math.floor(Math.random() * colorClassList.length)];
    this.setState({
      footerColor: random
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const mainWrapperElem = this.mainWrapper.current;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (mainWrapperElem.offsetHeight === winScroll) {
      this.setState({
        toggleHeader: true,
        footerActive: true
      });
    } else {
      this.setState({
        toggleHeader: true
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
      workTitle: `work`,
      brief: `Findcreative work`
    };
    const metakeywords = meta.common;
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
          <div className="page-wrapper work-page" ref={this.mainWrapper}>
            <div className="container">
              <div className="row justify-content-center no-gutters">
                <PortfolioList />
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
            <small className="footer-subtitle subtitle">Got a project?</small>
            <Link
              to="/connect"
              data-text="Let's Talk"
              className={`title footer-title ${this.state.footerColor} `}
            >
              Let's Talk
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
export default Work;
