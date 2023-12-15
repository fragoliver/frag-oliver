import {onRequest} from "firebase-functions/v2/https";
import {CanaryShape} from "./types";
import express, {Request, Response} from "express";
import cors from "cors";
import moment from "moment";

const version = "1.0.4";
const app = express();
app.use(cors({credentials: true}));

const respond = (req: Request, res: Response, data: CanaryShape) => {
  const {output} = data;
  const unixEpoch = Date.now();
  const api = {
    app: "Frag Oliver RESTful API",
    version: `${version}`,
    time: moment(unixEpoch).add(2, "hours").format("MMMM Do YYYY, h:mm:ssa"),
    response: output,
  };
  res.json(api);
};

app.all("**", async (req, res) => {
  respond(req, res, {
    output: {
      code: "200",
      status: "success",
      message: "Welcome to Frag Oliver API. How can we help?",
    },
  });
});

export const api = onRequest(app);
