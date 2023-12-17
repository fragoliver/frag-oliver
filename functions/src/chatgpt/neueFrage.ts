/* eslint-disable  @typescript-eslint/no-var-requires */
// import {FirebaseItem} from "../types";
import * as functions from "firebase-functions";
import * as firebase from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
} from "firebase/firestore";

const neueFrage = async (
  req: functions.https.Request,
  firebaseApp: firebase.FirebaseApp,
) => {

  const {body} = req
  const {frage} = body
  // check if this question has been arkst before
  // if so, return saved response
  let data = null
  let answer = "Frag Oliver of course!"
  
  const db = getFirestore(firebaseApp);
  const ref = collection(db, "chatgpt");
  const q = query(ref, where("frage", "==", frage));
  const snap = await getDocs(q);
  snap.forEach((doc) => {
    data = {
      fbId: doc.id,
      data: doc.data(),
    }
  });
  if(!data){
    // if not, do a ChatGPT API fetch with the frage as prompt to get the answer
    
    const newDoc = await addDoc(ref, {
      time: Date.now(),
      frage,
      antwort: answer,
    });
    data = {
      fbId: newDoc.id,
      frage,
      antwort: answer,
    }
  }
  return {
    code: "200",
    message: "chatGPT Neue Frage",
    data,
  };
};

export default neueFrage;
