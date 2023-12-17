import * as functions from "firebase-functions";
import {
  latest,
  neueFrage,
} from "./";

const routes = (
  app: any,
  respond: any,
  firebaseApp: any,
) => {
  app.get("/chatgpt", async (req: functions.https.Request, res: unknown) => {
    const result = await latest(req, firebaseApp);
    respond(req, res, {output: {
      data: {...result},
    }});
  });
  app.post("/chatgpt/neue-frage", async (
    req: functions.https.Request, res: any) => {
    const result = await neueFrage(req, firebaseApp);
    respond(req, res, {output: {
      data: {...result},
    }});
  });
};

export default routes;
