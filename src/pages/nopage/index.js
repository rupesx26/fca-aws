import React, { Component } from "react";
import { Link } from "react-router-dom";
import Head from "../Head";
import PageAnimWrapper from "../../components/pagetransition";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import { imagePath } from "../../utils/assetUtils";
import "./notfound.scss";

class NotFoundPage extends Component {
  constructor(props) {
    super(props);
    this.notFoundBg = imagePath("4042.png");
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
    const projectSummaryContent = {
      workTitle: `NotFound`,
      brief: `NotFound`
    };
    return (
      <PageAnimWrapper>
        <div>
          <Head
            title={`FINDCreative Ave | ${projectSummaryContent.workTitle}`}
            content={`${projectSummaryContent.brief}`}
          />
          <Navigation
            toggleHeader={this.state.toggleHeader}
            showSayHello={this.state.showSayHello}
          />

          <div className="page-wrapper notfound-page">
            <section className="full-page-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 col-xs-12 col-offset-md-2">
                    <div className="col-md-10 col-xs-12">
                      <div className="content notfound-wrapper">
                        <div className="title">
                          <div className="subtitle-text">Error 404</div>
                          <div className="left">
                            <h2>Lost in</h2>
                          </div>
                          <div className="right">
                            <h2>Space.</h2>
                          </div>
                        </div>

                        <div className="col-md-7 col-offset-md-2 col-xs-12">
                          <div className="img-container">
                            <img src={this.notFoundBg} alt="404" />
                            <Link to="/" className="link">
                              Take me home
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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

export default NotFoundPage;
