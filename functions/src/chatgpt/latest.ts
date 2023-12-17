/* eslint-disable  @typescript-eslint/no-var-requires */
import {FirebaseItem} from "../types";
import * as functions from "firebase-functions";
import * as firebase from "firebase/app";
import {
  getFirestore,
  getDocs,
  query,
  // orderBy,
  limit,
  collection,
} from "firebase/firestore";

const latest = async (
  req: functions.https.Request,
  firebaseApp: firebase.FirebaseApp,
) => {
  const db = getFirestore(firebaseApp);
  const collectionRef = collection(db, "chatgpt");
  const q = query(collectionRef, limit(100));
  const snap = await getDocs(q);
  const list: Array<FirebaseItem> = [];
  snap.forEach((doc) => {
    const data = doc.data();
    const {frage, antwort} = data;
    list.push({
      // fbId: doc.id,
      frage,
      antwort,
    });
  });
  return {
    code: "chatGPT",
    message: "Latest",
    list,
    total: list.length,
  };
};

export default latest;
