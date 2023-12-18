import {onRequest} from "firebase-functions/v2/https";
import * as firebase from "firebase/app";
import {APIShape} from "./types";
import express, {Request, Response} from "express";
import cors from "cors";
import moment from "moment";
import {chatgptRoutes} from "./chatgpt";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const version = "2.0.8";
const app = express();
app.use(cors({credentials: true}));

const respond = (req: Request, res: Response, data: APIShape) => {
  const {output} = data;
  const unixEpoch = Date.now();
  const api = {
    app: "frag-oliver-api",
    version: `${version}`,
    time: moment(unixEpoch).add(2, "hours").format("MMMM Do YYYY, h:mm:ssa"),
    response: output,
  };
  res.json(api);
};

chatgptRoutes(app, respond, firebaseApp);

app.all("**", async (req, res) => {
  respond(req, res, {
    output: {
      code: "200",
      status: "success",
      message: "Frag mich etwas",
    },
  });
});

export const api = onRequest(app);
