"use client"

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FB_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FB_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FB_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_FB_APPID,
  measurementId: process.env.NEXT_PUBLIC_FB_MEASUREMENTID
}


if (typeof window !== "undefined" && window.location.hostname === "localhost") {
  // @ts-ignore
  globalThis.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

if (typeof window !== "undefined" && window.location.hostname === "b48kz8qg-3000.euw.devtunnels.ms") {
  // @ts-ignore
  globalThis.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

const fbapp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
let fbappcheckinstance: any = null;

if (typeof window !== "undefined" && process.title == 'browser' && !fbappcheckinstance) {
  import("firebase/app-check").then(async (firebaseAppCheck) => {
    const recv3token = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_PUBLIC_KEY as string;

    fbappcheckinstance = firebaseAppCheck.initializeAppCheck(fbapp, {
      provider: new firebaseAppCheck.ReCaptchaV3Provider(fbappcheckinstance),
      isTokenAutoRefreshEnabled: true,
      
    });
    console.log("AppCheckInstance", fbappcheckinstance);
  });
}

const fstore = getFirestore();
const fbauth = getAuth();

let fblytics: ReturnType<typeof getAnalytics> | undefined;

isSupported().then((supported) => {
  if (!supported) {
    return;
  }
  fblytics = getAnalytics(fbapp)
})

export { fbapp, fbauth, fblytics, fstore, fbappcheckinstance as appCheck }