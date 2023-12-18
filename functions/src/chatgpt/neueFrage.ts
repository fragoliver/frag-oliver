/* eslint-disable  @typescript-eslint/no-var-requires */
// import {FirebaseItem} from "../types";
import * as functions from "firebase-functions";
import * as firebase from "firebase/app";
// import {ChatGPTAPI} from "chatgpt";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  // addDoc,
} from "firebase/firestore";

const neueFrage = async (
  req: functions.https.Request,
  firebaseApp: firebase.FirebaseApp,
) => {
  let data = null;
  const answer = "Frag Oliver of course!";
  const {body} = req;
  const {frage} = body;
  const db = getFirestore(firebaseApp);
  const ref = collection(db, "chatgpt");
  const q = query(ref, where("frage", "==", frage));
  const snap = await getDocs(q);
  snap.forEach((doc) => {
    data = {
      fbId: doc.id,
      data: doc.data(),
    };
  });
  if (!data) {
    // const apiKey = process.env.OPENAI_API_KEY || "";
    // const api = new ChatGPTAPI({apiKey});
    // const res = await api.sendMessage("Hello World!");
    // const newDoc = await addDoc(ref, {
    //   time: Date.now(),
    //   frage,
    //   antwort: "res",
    // });
    data = {
      // fbId: newDoc.id,
      frage,
      antwort: answer,
    };
  }
  return {
    code: "200",
    message: "chatGPT Neue Frage",
    data,
  };
};

export default neueFrage;
