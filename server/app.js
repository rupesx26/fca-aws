import path from "path";
import express from "express";
import compression from "compression";
import helmet from "helmet";
import morgan from "morgan";
import responseTime from "response-time";
import bodyParser from "body-parser";

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
    console.log("account", account);
    const htmlEmail = `
      <p>name : ${req.body.data.fname}</p>
      <p>email : ${req.body.data.email}</p>
      <p>company : ${req.body.data.company}</p>
      <p>message : ${req.body.data.message}</p>
    `;
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "laurel26@ethereal.email ",
        pass: "tAtyAkxv4zn6qmRjuq"
      }
    });

    let mailOption = {
      from: req.body.email,
      to: "efren.williamson39@ethereal.email",
      replyTo: req.body.email,
      subject: "new email",
      text: req.body.message,
      html: htmlEmail
    };

    transporter.sendMail(mailOption, (err, info) => {
      console.log(info);
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
