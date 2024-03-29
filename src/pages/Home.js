import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactFullpage from "@fullpage/react-fullpage";

//Import Components
import Head from "./Head";
import HomeCarousel from "../components/homecarousel";
import Banner from "../components/homebanner";
import PageAnimWrapper from "../components/pagetransition";
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import { isMobile } from "react-device-detect"; //is for mobile devices
import Pagination from "../components/verticalpagination";
import * as meta from "../components/meta.json";
class Home extends Component {
  constructor(props) {
    super(props);
    this.mainWrapper = React.createRef();
    this.footerWrapper = React.createRef();
    this.anchors = ["firstPage", "secondPage", "thirdPage"];
    this.fullpageWrapper = this.fullpageWrapper.bind(this);
    this.mobileContent = this.mobileContent.bind(this);
    this.mainWrapper = React.createRef();
    this.footerWrapper = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      currentSlide: 0,
      currentDirection: "down",
      toggleHeader: false,
      showSayHello: true,
      footerBgColor: "dark",
      inversionColor: false,
      footerActive: false,
      count: 0,
      totalCount: 4,
      hidePagination: true,
      fullpageAnimation: true,
      mobileView: null
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    if (isMobile) {
      this.setState({
        mobileView: isMobile
      });
    }
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
        toggleHeader: true
      });
    } else {
      this.setState({
        toggleHeader: false
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

  mobileContent() {
    return (
      <div>
        <Banner
          //moveslide={fullpageApi}
          activeSlide={this.state.currentSlide}
          direction={this.state.currentDirection}
        />
        <HomeCarousel
          mobileView={this.state.mobileView}
          activeSlide={this.state.currentSlide}
          direction={this.state.currentDirection}
          toggleHeader={this.state.toggleHeader}
        />
      </div>
    );
  }

  fullpageWrapper() {
    return (
      <ReactFullpage
        scrollingSpeed={1350}
        //navigationTooltips={this.anchors}
        keyboardScrolling={true}
        // touchSensitivity={100}
        onLeave={(origin, destination, direction) => {
          this.setState({
            currentSlide: destination.index,
            currentDirection: direction
          });
        }}
        render={({ state, fullpageApi }) => {
          this.state.mobileView && fullpageApi.setAutoScrolling(true);
          return (
            <div>
              <Banner
                moveslide={fullpageApi}
                activeSlide={this.state.currentSlide}
                direction={this.state.currentDirection}
              />
              <HomeCarousel
                mobileView={this.state.mobileView}
                activeSlide={this.state.currentSlide}
                direction={this.state.currentDirection}
                toggleHeader={this.state.toggleHeader}
              />

              <Footer
                mobileView={this.state.mobileView}
                fullpageAnimation={this.state.fullpageAnimation}
                activeSlide={this.state.currentSlide}
                direction={this.state.currentDirection}
                footerBgColor={this.state.footerBgColor}
                toggleHeader={this.state.toggleHeader}
                footerActive={this.state.footerActive}
              >
                <small className="footer-subtitle subtitle">
                  Interested in more?
                </small>
                <Link
                  to="/work"
                  data-text="View Work"
                  className={`title footer-title`}
                >
                  View Work
                  <div className="footer-arrow">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                  </div>
                </Link>
              </Footer>
            </div>
          );
        }}
      />
    );
  }

  static getDerivedStateFromProps(props, state) {
    if (state.currentSlide === 0) {
      return {
        hidePagination: true
      };
    }
    if (state.currentSlide === 0 && state.currentDirection === "up") {
      return {
        hidePagination: true
      };
    }
    if (state.currentSlide === 1 && state.currentDirection === "down") {
      return {
        count: 1,
        hidePagination: false
      };
    }
    if (state.currentSlide === 2 && state.currentDirection === "down") {
      return {
        count: 2,
        hidePagination: false
      };
    }
    if (state.currentSlide === 3 && state.currentDirection === "down") {
      return {
        count: 3,
        hidePagination: false
      };
    }
    if (state.currentSlide === 4 && state.currentDirection === "down") {
      return {
        count: 4,
        hidePagination: false
      };
    }
    if (state.currentSlide === 1 && state.currentDirection === "up") {
      return {
        count: 1,
        hidePagination: false,
        footerActive: true
      };
    }
    if (state.currentSlide === 2 && state.currentDirection === "up") {
      return {
        count: 2,
        hidePagination: false,
        footerActive: true
      };
    }
    if (state.currentSlide === 3 && state.currentDirection === "up") {
      return {
        count: 3,
        hidePagination: false,
        footerActive: true
      };
    }
    if (state.currentSlide === 4 && state.currentDirection === "up") {
      return {
        count: 4,
        hidePagination: false,
        toggleHeader: false,
        footerActive: true
      };
    }

    if (state.currentSlide === 5 && state.currentDirection === "down") {
      return {
        toggleHeader: true,
        footerActive: true,
        hidePagination: true
      };
    } else {
      return {
        toggleHeader: false,
        hidePagination: false
      };
    }
  }

  render() {
    const mobileView = isMobile;
    const renderContent = mobileView
      ? this.mobileContent()
      : this.fullpageWrapper();
    const metakeywords = meta.home;
    return (
      <PageAnimWrapper>
        <Head
          title="FINDCreative Ave"
          content="Design is the face of every object and is the first point of
          interaction. Whether it’s traditional advertising, app interface,
          branding, packaging or product. So, our approach is always
          design-first. When you voice a business problem to us,
          our minds race to find the best design-led solutions."
          keywordslist={`${metakeywords}`}
        />
        <Navigation
          toggleHeader={this.state.toggleHeader}
          showSayHello={this.state.showSayHello}
        />
        <Pagination
          hidePagination={this.state.hidePagination}
          totalCount={this.state.totalCount}
          count={this.state.count}
        />
        <div className="home-page page-wrapper" ref={this.mainWrapper}>
          {renderContent}
        </div>
        {isMobile && (
          <Footer
            mobileView={this.state.mobileView}
            fullpageAnimation={this.state.fullpageAnimation}
            activeSlide={this.state.currentSlide}
            direction={this.state.currentDirection}
            footerBgColor={this.state.footerBgColor}
            toggleHeader={this.state.toggleHeader}
            footerActive={this.state.footerActive}
            ref={this.footerWrapper}
            onScroll={this.handleScroll}
          >
            <small className="footer-subtitle subtitle">
              Interested in more?
            </small>
            <Link
              to="/work"
              data-text="View Work"
              className={`title footer-title`}
            >
              View Work
              <div className="footer-arrow">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
              </div>
            </Link>
          </Footer>
        )}
      </PageAnimWrapper>
    );
  }
}

export default Home;
