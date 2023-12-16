// /* eslint-disable  @typescript-eslint/no-var-requires */
// import {FirebaseItem} from "../types";
// import * as functions from "firebase-functions";
// import * as firebase from "firebase/app";
// import {
//   getFirestore,
//   getDocs,
//   query,
//   orderBy,
//   limit,
//   collection,
// } from "firebase/firestore";

// const latest = async (
//     req: functions.https.Request,
//     firebaseApp: firebase.FirebaseApp,
// ) => {
//   const db = getFirestore(firebaseApp);
//   const pingsRef = collection(db, "pingpong");
//   const q = query(pingsRef, orderBy("time", "desc"), limit(100));
//   const snap = await getDocs(q);
//   const list: Array<FirebaseItem> = [];
//   snap.forEach((doc) => {
//     list.push({
//       fbId: doc.id,
//       data: doc.data(),
//     });
//   });
//   return {
//     code: "Pingpong",
//     message: "Latest 100 Pings",
//     total: list.length,
//     list,
//   };
// };

// export default latest;