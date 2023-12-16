// // import * as firebase from "firebase/app";
// import * as functions from "firebase-functions";
// import {
//   latest,
//   create,
//   checkUid,
//   update,
// } from "./";

// const routes = (
//     app: any,
//     respond: any,
//     firebaseApp: any,
// ) => {
//   app.get("/pingpong", async (req: functions.https.Request, res: any) => {
//     const result = await latest(req, firebaseApp);
//     respond(req, res, {output: {
//       data: {...result},
//     }});
//   });
//   app.post("/pingpong/check-uid", async (
//       req: functions.https.Request, res: any
//   ) => {
//     const result = await checkUid(req, firebaseApp);
//     respond(req, res, {output: {
//       data: {...result},
//     }});
//   });
//   app.post("/pingpong/create", async (
//       req: functions.https.Request, res: any
//   ) => {
//     const result = await create(req, firebaseApp);
//     respond(req, res, {output: {
//       data: {...result},
//     }});
//   });

//   app.patch("/pingpong/update", async (
//       req: functions.https.Request, res: any
//   ) => {
//     const result = await update(req/* , firebaseApp*/);
//     respond(req, res, {output: {
//       data: {...result},
//     }});
//   });
// };

// export default routes;
