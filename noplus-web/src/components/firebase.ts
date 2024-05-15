"use client"

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FB_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FB_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FB_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FB_APPID,
  measurementId: process.env.NEXT_PUBLIC_FB_MEASUREMENTID
}

const fbapp = initializeApp(firebaseConfig);


if (process.env.NODE_ENV === "development") {
  // @ts-ignore
  globalThis.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}


const FBRecapchaProvider =  new ReCaptchaV3Provider(process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_PUBLIC_KEY as string)

const appCheck = initializeAppCheck(fbapp, {
  provider: FBRecapchaProvider,
  isTokenAutoRefreshEnabled: true
  
})

const fbauth = getAuth(fbapp)
const fblytics = getAnalytics(fbapp)

export { fbapp, fbauth, fblytics, appCheck }