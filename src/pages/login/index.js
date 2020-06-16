import React, { Component } from "react";
import Head from "../Head";
import { Link } from "react-router-dom";
import PageAnimWrapper from "../../components/pagetransition";
import Footer from "../../components/footer";
import Navigation from "../../components/navigation";
import WorkPageNavigation from "../../components/workpagenav";

import "./login.scss";
//Validation function for validate field
const ValidationMessage = props => {
  if (!props.valid) {
    return <div className="error-msg">{props.message}</div>;
  }
  return null;
};
class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.state = {
      isActive: false,
      toggleHeader: false,
      showSayHello: false,
      footerBgColor: "light",
      footerActive: false,
      fullpageAnimation: false,
      username: "",
      password: "",
      errorMsg: {},
      buttonText: "Submit",
      usernameValidate: false,
      passwordValidate: false,
      isChecked: false,
      prevLink: "",
      nextLink: ""
    };
  }
  validateForm = () => {
    const { usernameValidate, passwordValidate, isChecked } = this.state;
    this.setState({
      formValid: usernameValidate && passwordValidate && isChecked
    });
  };

  handleCheck = () => {
    this.setState({ isChecked: !this.state.isChecked }, this.validateForm);
  };

  updateUsername = username => {
    this.setState({ username }, this.validateUsername);
  };

  validateUsername = () => {
    const { username } = this.state;
    console.log(username);
    let usernameValidate = true;
    let errorMsg = { ...this.state.errorMsg };
    if (username !== "josh") {
      usernameValidate = false;
      errorMsg.username = "invalid login name";
    }
    this.setState({ usernameValidate, errorMsg }, this.validateForm);
  };

  updatePassword = password => {
    this.setState({ password }, this.validatePassword);
  };

  validatePassword = () => {
    const { password } = this.state;
    let passwordValidate = true;
    let errorMsg = { ...this.state.errorMsg };
    if (password !== "josh") {
      passwordValidate = false;
      errorMsg.password = "invalid password";
    }
    this.setState({ passwordValidate, errorMsg }, this.validateForm);
  };

  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    let history = this.props.history;
    let location = this.props.location;

    let { from } = location.state || { from: { pathname: "/" } };
    if (username === "find" && password === "josh") {
      this.props.handleLogin.authenticate(() => {
        history.replace(from);
      });
    }
  }

  componentDidMount() {
    let location = this.props.location;
    let history = this.props.history;
    if (location.state === undefined) {
      history.replace("/work");
    } else if (location.state.from.pathname === "/work/lifebuoy") {
      this.setState({
        prevLink: "/work/nihar-gold",
        nextLink: "/work/thambbi"
      });
    } else if (location.state.from.pathname === "/work/setwet") {
      this.setState({
        prevLink: "/work/thambbi",
        nextLink: "/work/hero-talkies"
      });
    }

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }

  render() {
    const { buttonText, isChecked, prevLink, nextLink } = this.state;
    const projectSummaryContent = {
      workTitle: `Login`,
      brief: `Login`
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

          <div className="page-wrapper login-page">
            <section className="full-page-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-md-10 col-xs-12 col-offset-md-2">
                    <div className="col-md-10 col-xs-12">
                      <div className="content login-wrapper">
                        <WorkPageNavigation
                          prevLink={prevLink}
                          nextLink={nextLink}
                        />
                        <p>
                          Hello Guys! Happy to know you’re interested in this
                          project. <br />
                          But we’re sorry to inform you that you will have to
                          seek permission <br />
                          from the Admin to view an Audit/Research/Strategy
                          project.
                          <br />
                          If you have access, enjoy viewing. For more info,
                          <br />
                          write to{" "}
                          <a href="mailto:hello@findcreative.in">
                            hello@findcreative.in
                          </a>
                        </p>
                        <form action="/" onSubmit={this.handleSubmit}>
                          <div className="form-field">
                            <label>Log in:</label>
                            <input
                              onChange={e =>
                                this.updateUsername(e.target.value)
                              }
                              value={this.state.username}
                              name="username"
                              type="text"
                              className="field"
                            />
                            {this.state.username != "" && (
                              <ValidationMessage
                                valid={this.state.usernameValidate}
                                message={this.state.errorMsg.username}
                              />
                            )}
                          </div>

                          <div className="form-field">
                            <label>Password:</label>
                            <input
                              onChange={e =>
                                this.updatePassword(e.target.value)
                              }
                              name="password"
                              value={this.state.password}
                              type="password"
                              className="field"
                            />
                            {this.state.password != "" && (
                              <ValidationMessage
                                valid={this.state.passwordValidate}
                                message={this.state.errorMsg.password}
                              />
                            )}
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
                            className={`submit-button`}
                            disabled={!this.state.formValid}
                          >
                            {buttonText}
                          </button>
                        </form>
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

export default Login;
