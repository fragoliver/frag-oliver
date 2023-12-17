// import * as firebase from "firebase/app";
import * as functions from "firebase-functions";
// import {
//   latest,
// } from "./";

const routes = (
  app: any,
  respond: any,
  // firebaseApp: any,
) => {
  app.get("/chatgpt", async (req: functions.https.Request, res: any) => {
    // const result = await latest(req, firebaseApp);
    // respond(req, res, {output: {
    //   data: {...result},
    // }});
    respond(req, res, {output: {
      data: {"chatgpt": "ok"},
    }});
  });
};

export default routes;
