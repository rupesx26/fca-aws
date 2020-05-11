import React, { Component } from "react";
import { Link } from "react-router-dom";
import OpeningAPI from "./openingApi";
import Head from "../Head";
import PageAnimWrapper from "../../components/pagetransition";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import "./careers.scss";
import * as meta from "../../components/meta.json";

class Careers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      toggleHeader: false,
      showSayHello: true,
      footerBgColor: "light",
      footerActive: false,
      fullpageAnimation: false
    };
  }
  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }
  render() {
    const playersData = OpeningAPI.all();
    const projectSummaryContent = {
      workTitle: `Careers`,
      brief: `work with Findcreative`
    };
    const metakeywords = meta.careers;
    return (
      <PageAnimWrapper>
        <div>
          <Head
            title={`FINDCreative Eve | ${projectSummaryContent.workTitle}`}
            content={`${projectSummaryContent.brief}`}
            keywordslist={`${metakeywords}`}
          />
          <Navigation
            toggleHeader={this.state.toggleHeader}
            showSayHello={this.state.showSayHello}
          />
          <div className="page-wrapper careers-page">
            <section className="full-page-wrapper current-opening-list">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-xs-12 col-offset-md-2">
                    <ul className="opening-list">
                      {playersData.map((x, y) => {
                        return (
                          <li key={x.jobId}>
                            <Link to={`/careers/${x.jobId}`}>
                              {x.jobDescription}
                              <div className="cta-apply">APPLY</div>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <div className="current-opening-cta">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-xs-12 col-offset-md-2">
                    <h2>We’re always on the lookout for good talent. </h2>
                    <div className="opening-cta">
                      drop in an email over at{" "}
                      <a href="mailto:hello@findcreative.in">
                        {" "}
                        hello@findcreative.in{" "}
                      </a>
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
          ></Footer>
        </div>
      </PageAnimWrapper>
    );
  }
}
export default Careers;
