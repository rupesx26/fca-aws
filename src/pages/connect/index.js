import React, { Component } from "react";
import { Link } from "react-router-dom";
import Head from "../Head";
import PageAnimWrapper from "../../components/pagetransition";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import "./connect.scss";
import * as meta from "../../components/meta.json";
import axios from "axios";
//import 'debug.addIndicators';

//Loading for form response
const LoadingSpinner = () => (
  <div>
    <i className="fa fa-spinner fa-spin" /> Loading...
  </div>
);

//Validation function for validate field
const ValidationMessage = props => {
  if (!props.valid) {
    return <div className="error-msg">{props.message}</div>;
  }
  return null;
};

class Connect extends Component {
  constructor(props) {
    super(props);
    this.mainWrapper = React.createRef();
    this.footerWrapper = React.createRef();
    this.handleScroll = this.handleScroll.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.state = {
      isActive: false,
      activeText: "Know More",
      toggleHeader: false,
      showSayHello: true,
      footerBgColor: "light",
      footerActive: false,
      fullpageAnimation: false,
      fname: "",
      email: "",
      company: "",
      projectDetails: "",
      isChecked: false,
      loader: false,
      thankyoumsg: "",
      fnameValidate: false,
      emailValidate: false,
      projectDetailsValidate: false,
      formValid: false,
      errorMsg: {},
      buttonText: "Submit",
      buttonClass: ""
    };
  }

  validateForm = () => {
    const {
      fnameValidate,
      emailValidate,
      projectDetailsValidate,
      isChecked
    } = this.state;
    this.setState({
      formValid:
        fnameValidate && emailValidate && projectDetailsValidate && isChecked
    });
  };
  handleCheck = () => {
    this.setState({ isChecked: !this.state.isChecked }, this.validateForm);
  };

  updateUsername = fname => {
    this.setState({ fname }, this.validateUsername);
  };

  validateUsername = () => {
    const { fname } = this.state;
    let fnameValidate = true;
    let errorMsg = { ...this.state.errorMsg };
    if (fname.length < 3) {
      fnameValidate = false;
      errorMsg.fname = "Must be at least 3 characters long";
    }
    this.setState({ fnameValidate, errorMsg }, this.validateForm);
  };

  updateEmail = email => {
    this.setState({ email }, this.validateEmail);
  };

  validateEmail = () => {
    const { email } = this.state;
    let emailValidate = true;
    let errorMsg = { ...this.state.errorMsg };
    // checks for format _@_._
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailValidate = false;
      errorMsg.email = "Invalid email format";
    }
    this.setState({ emailValidate, errorMsg }, this.validateForm);
  };

  updateProjectDetails = projectDetails => {
    this.setState({ projectDetails }, this.validateProjectDetail);
  };

  validateProjectDetail = () => {
    const { projectDetails } = this.state;
    let projectDetailsValidate = true;
    let errorMsg = { ...this.state.errorMsg };
    if (projectDetails.length < 2) {
      projectDetailsValidate = false;
      errorMsg.projectDetails =
        "Please add your project details or just say hi! :)";
    }
    this.setState({ projectDetailsValidate, errorMsg }, this.validateForm);
  };

  handleKnowMore() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  resetForm() {
    this.setState({
      fname: "",
      email: "",
      company: "",
      projectDetails: "",
      isChecked: false
    });

    setTimeout(() => {
      this.setState({
        buttonText: "Submit",
        buttonClass: ""
      });
    }, 5000);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { fname, email, company, projectDetails, isChecked } = this.state;

    this.setState(
      { loader: true, buttonText: "Submiting..", buttonClass: "loading" },
      () => {
        axios
          .post("/send", {
            timeout: 2000,
            data: {
              fname: fname,
              email: email,
              message: projectDetails,
              company: company,
              checkbox: isChecked
            }
          })
          .then(response => {
            if (response.data.msg === "success") {
              this.setState({
                loader: false,
                thankyoumsg: "Message Sent.",
                buttonText: "Message Sent. We will reply you soon!",
                buttonClass: "sent-msg"
              });
              this.resetForm();
            } else if (response.data.msg === "fail") {
              this.setState({
                loader: true,
                thankyoumsg: "",
                buttonText: "something went wrong. sorry!",
                buttonClass: " "
              });
            }
          });
      }
    );
  }

  handleScroll() {
    const mainWrapperElem = this.mainWrapper.current;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (mainWrapperElem.offsetHeight === winScroll) {
      this.setState({
        toggleHeader: false,
        footerActive: true
      });
    } else {
      this.setState({
        toggleHeader: false
      });
    }
  }

  render() {
    const projectSummaryContent = {
      workTitle: `Connect`,
      brief: `Connect with us`
    };
    const metakeywords = meta.connect;
    const {
      loader,
      thankyoumsg,
      isChecked,
      buttonText,
      buttonClass
    } = this.state;
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
          <div className="page-wrapper connect-page" ref={this.mainWrapper}>
            <section className="full-page-wrapper contact-form">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-xs-12 col-offset-md-2">
                    <div className="col-xs-12">
                      <h1>
                        Want to work with us? <br />
                        Get in touch.
                      </h1>
                      <div className="sub-title">
                        Together, let’s find the best ways to build your brand.
                      </div>

                      <form
                        id="contact-form"
                        method="POST"
                        action="send"
                        onSubmit={this.handleSubmit}
                      >
                        <div className="form-field">
                          <label>Your Name</label>
                          <input
                            onChange={e => this.updateUsername(e.target.value)}
                            value={this.state.fname}
                            name="fname"
                            type="text"
                            className="field"
                          />
                          <ValidationMessage
                            valid={this.state.fnameValidate}
                            message={this.state.errorMsg.fname}
                          />
                        </div>

                        <div className="form-field">
                          <label>Your E-mail</label>
                          <input
                            onChange={e => this.updateEmail(e.target.value)}
                            name="email"
                            value={this.state.email}
                            type="text"
                            className="field"
                          />
                          <ValidationMessage
                            valid={this.state.emailValidate}
                            message={this.state.errorMsg.email}
                          />
                        </div>

                        <div className="form-field">
                          <label>Your Company</label>
                          <input
                            onChange={this.handleChange}
                            name="company"
                            value={this.state.company}
                            type="text"
                            className="field"
                          />
                        </div>

                        <div className="form-field">
                          <label>Tell us about your project</label>
                          <input
                            onChange={e =>
                              this.updateProjectDetails(e.target.value)
                            }
                            name="projectDetails"
                            value={this.state.projectDetails}
                            type="text"
                            className="field"
                          />
                          <ValidationMessage
                            valid={this.state.projectDetailsValidate}
                            message={this.state.errorMsg.projectDetails}
                          />
                        </div>

                        <div className="agreement">
                          <label>
                            <input
                              onChange={this.handleCheck}
                              type="checkbox"
                              checked={isChecked}
                            />
                            <span className="checkmark"></span>
                            <span className="text">
                              I have read and agree with FCA’s{" "}
                              <Link to="/policy">privacy policy.</Link> and{" "}
                              <Link to="/terms">terms</Link>
                            </span>
                          </label>
                        </div>
                        <button
                          type="submit"
                          className={`submit-button ${buttonClass}`}
                          disabled={!this.state.formValid}
                        >
                          {buttonText}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="full-page-wrapper contact-types bg-color-gray">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-xs-12 col-offset-md-2">
                    <div className="row">
                      <div className="col-md-6 col-xs-12">
                        <div className="contact-box">
                          <h5>Email us</h5>
                          <div className="details">
                            <a href="mailto:hello@findcreative.in">
                              hello@findcreative.in
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <div className="contact-box visit-us">
                          <h5>Visit us</h5>
                          <div className="details">
                            <address>
                              A Wing 904 - 905, Kanakia Wall Street, <br />
                              Chakala, Andheri (E), <br /> Mumbai 400093.
                            </address>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xs-12">
                        <div className="contact-box call-us">
                          <h5>Call us</h5>
                          <div className="details">022 4034 8888</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="current-opening-cta">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 col-xs-12 col-offset-md-2">
                    <h2>Are you an aspiring creative?</h2>
                    <Link to="/careers" className="opening-cta">
                      Current Openings
                    </Link>
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

export default Connect;
