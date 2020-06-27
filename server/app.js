import path from "path";
import express from "express";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";
import responseTime from "response-time";
import bodyParser from "body-parser";
import {
  USER,
  TYPE,
  PASSWORD,
  CLIENTID,
  CLIENTSECRET,
  REFRESHTOKEN,
  ACCESSTOKEN
} from "./config";
import { renderServerSideApp } from "./renderServerSideApp";
import { todoRoutes } from "./todoApi";
import nodemailer from "nodemailer";
const { PUBLIC_URL = "" } = process.env;

// This export is used by our initialization code in /scripts
export const app = express();

app.use(compression());
app.use(helmet());
app.use(bodyParser.json());

// Serve generated assets
app.use(
  PUBLIC_URL,
  express.static(path.resolve(__dirname, "../build"), {
    maxage: Infinity
  })
);

// Serve static assets in /public
app.use(
  PUBLIC_URL,
  express.static(path.resolve(__dirname, "../public"), {
    maxage: "30 days"
  })
);

app.use(morgan("tiny"));

// Demo API endpoints
app.use(todoRoutes());

app.post("/send", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <p>name : ${req.body.data.fname}</p>
      <p>email : ${req.body.data.email}</p>
      <p>company : ${req.body.data.company}</p>
      <p>message : ${req.body.data.message}</p>
    `;
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: USER,
        pass: PASSWORD // naturally, replace both with your real credentials or an application-specific password
      }
    });

    let mailOption = {
      from: req.body.email,
      to: "support@findcreative.in",
      cc: "hello@findcreative.in",
      replyTo: req.body.email,
      subject: "Contact form enquiry",
      text: req.body.message,
      html: htmlEmail
    };

    transporter.sendMail(mailOption, (err, info) => {
      if (err) {
        res.json({
          msg: "fail"
        });
        return console.log(err);
      } else {
        res.json({
          msg: "success"
        });
      }
      console.log("Message sent: %s", info.message);
      console.log("Message url : %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

app.post("/cvsend", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <p>name : ${req.body.data.fname}</p>
      <p>email : ${req.body.data.email}</p>
      <p>mobile : ${req.body.data.mobile}</p>
      <p>experience : ${req.body.data.experience}</p>
      <p>company : ${req.body.data.company}</p>
      <p>portfolio : ${req.body.data.portfolio}</p>
    `;
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: USER,
        pass: PASSWORD // naturally, replace both with your real credentials or an application-specific password
      }
    });

    let mailOption = {
      from: req.body.email,
      to: "support@findcreative.in",
      cc: "hello@findcreative.in",
      replyTo: req.body.email,
      subject: "Job enquiry for " + req.body.data.jobtitle,
      text: req.body.message,
      html: htmlEmail
    };

    transporter.sendMail(mailOption, (err, info) => {
      if (err) {
        res.json({
          msg: "fail"
        });
        return console.log(err);
      } else {
        res.json({
          msg: "success"
        });
      }
      console.log("Message sent: %s", info.message);
      console.log("Message url : %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

app.use(
  responseTime((_req, res, time) => {
    res.setHeader("X-Response-Time", time.toFixed(2) + "ms");
    res.setHeader("Server-Timing", `renderServerSideApp;dur=${time}`);
  })
);

app.use(renderServerSideApp);
