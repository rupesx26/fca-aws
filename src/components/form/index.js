import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./form.scss";
//Validation function for validate field
const ValidationMessage = props => {
  if (!props.valid) {
    return <div className="error-msg">{props.message}</div>;
  }
  return null;
};

class ResumeForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.state = {
      jobtitle: "",
      fname: "",
      email: "",
      mobile: "",
      company: "",
      experience: "",
      portfolio: "",
      thankyoumsg: "",
      errorMsg: {},
      buttonText: "Submit",
      buttonClass: "",
      storeExperiece: null,
      isChecked: false,
      fnameValidate: false,
      emailValidate: false,
      mobileValidate: false,
      experienceValidate: false,
      companyValidate: false,
      formValid: false
    };
  }

  componentDidMount() {
    this.setState({
      jobtitle: this.props.jobTitle
    });
  }

  handleCheck = () => {
    this.setState({ isChecked: !this.state.isChecked }, this.validateForm);
  };

  resetForm() {
    this.setState({
      fname: "",
      email: "",
      company: "",
      portfolio: "",
      experience: "",
      mobile: "",
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
    const {
      fname,
      email,
      company,
      mobile,
      experience,
      portfolio,
      jobtitle,
      isChecked
    } = this.state;

    this.setState(
      { loader: true, buttonText: "Submiting..", buttonClass: "loading" },
      () => {
        axios
          .post("/cvsend", {
            timeout: 2000,
            data: {
              jobtitle: jobtitle,
              fname: fname,
              email: email,
              mobile: mobile,
              experience: experience,
              company: company,
              portfolio: portfolio,
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

  validateForm = () => {
    const {
      fnameValidate,
      emailValidate,
      mobileValidate,
      companyValidate,
      experienceValidate,
      isChecked
    } = this.state;
    this.setState({
      formValid:
        fnameValidate &&
        emailValidate &&
        companyValidate &&
        mobileValidate &&
        experienceValidate &&
        isChecked
    });
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

  updateMobile = mobile => {
    this.setState({ mobile }, this.validateMobile);
  };

  validateMobile = () => {
    const { mobile } = this.state;
    let mobileValidate = true;
    let errorMsg = { ...this.state.errorMsg };
    // checks for format ^[6-9]\d{9}$
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      mobileValidate = false;
      errorMsg.mobile = "Invalid mobile number it must be 10 digit";
    }
    this.setState({ mobileValidate, errorMsg }, this.validateForm);
  };

  updateExperience = experience => {
    this.setState({ experience }, this.validateExperience);
    this.setState({
      storeExperiece: this.checkExperience(experience)
    });
  };

  validateExperience = () => {
    const { experience } = this.state;
    let experienceValidate = true;
    let errorMsg = { ...this.state.errorMsg };
    // checks for format ^[1-9]\d*(\.\d+)?$
    if (!/^[0-9]\d*(\.\d+)?$/.test(experience)) {
      experienceValidate = false;
      errorMsg.experience = "Add work experience in format 0, 0.5, 2";
    }
    this.setState({ experienceValidate, errorMsg }, this.validateForm);
  };

  checkExperience = years => {
    return parseFloat(years);
  };

  updateCompany = company => {
    this.setState({ company }, this.validateCompany);
  };

  validateCompany = () => {
    const { company } = this.state;
    let companyValidate = true;
    let errorMsg = { ...this.state.errorMsg };
    // if(company === 'N' || company === 'NA') {
    //   companyValidate = true;
    //   errorMsg.company = "If you have any work experience please mentioned company name and experience."
    // }
    if (company === "") {
      companyValidate = false;
      errorMsg.company =
        "You can add company name with (,) separate. for e.g. ABC Ltd, IBM etc";
    }
    this.setState({ companyValidate, errorMsg }, this.validateForm);
  };

  updateWebLink = portfolio => {
    this.setState({ portfolio });
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { buttonText, buttonClass, isChecked, storeExperiece } = this.state;
    return (
      <div className="resumeForm">
        <form
          id="contact-form"
          method="POST"
          action="cvsend"
          onSubmit={this.handleSubmit}
        >
          <div className="container fluid">
            <div className="row">
              <div
                className="col-md-12"
                style={{
                  visibility: "hidden",
                  height: "0px",
                  width: "0px",
                  padding: "0px"
                }}
              >
                <div className="form-field">
                  <label>Job title</label>
                  <input
                    onChange={e => this.handleChange(e.target.value)}
                    value={this.state.jobtitle}
                    name="fname"
                    type="text"
                    className="field"
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="form-field">
                  <label>Name</label>
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
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-5">
                <div className="form-field">
                  <label>Email</label>
                  <input
                    onChange={e => this.updateEmail(e.target.value)}
                    value={this.state.email}
                    name="email"
                    type="text"
                    className="field"
                  />
                  <ValidationMessage
                    valid={this.state.emailValidate}
                    message={this.state.errorMsg.email}
                  />
                </div>
              </div>

              <div className="col-md-5">
                <div className="form-field">
                  <label>Mobile</label>
                  <input
                    onChange={e => this.updateMobile(e.target.value)}
                    value={this.state.mobile}
                    name="mobile"
                    type="number"
                    className="field"
                  />
                  <ValidationMessage
                    valid={this.state.mobileValidate}
                    message={this.state.errorMsg.mobile}
                  />
                </div>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-5">
                <div className="form-field">
                  <label>Years of Experience</label>
                  <input
                    onChange={e => this.updateExperience(e.target.value)}
                    value={this.state.experience}
                    name="fname"
                    type="text"
                    className="field"
                  />
                  <ValidationMessage
                    valid={this.state.experienceValidate}
                    message={this.state.errorMsg.experience}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-field">
                  <label>Company</label>
                  <input
                    onChange={e => this.updateCompany(e.target.value)}
                    value={storeExperiece === 0 ? "NA" : this.state.company}
                    name="compant"
                    type="text"
                    className="field"
                  />
                  <ValidationMessage
                    valid={this.state.companyValidate}
                    message={this.state.errorMsg.company}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-field">
                  <label>Work/Blog/Website link:</label>
                  <input
                    onChange={e => this.updateWebLink(e.target.value)}
                    value={this.state.portfolio}
                    name="portfolio"
                    type="text"
                    className="field"
                  />
                  {/* <ValidationMessage
                              // valid={this.state.fnameValidate}
                              // message={this.state.errorMsg.fname}
                            /> */}
                </div>
              </div>

              <div className="col-md-12 col-xs-12">
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
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <button
                  type="submit"
                  className={`submit-button ${buttonClass}`}
                  disabled={!this.state.formValid}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ResumeForm;
