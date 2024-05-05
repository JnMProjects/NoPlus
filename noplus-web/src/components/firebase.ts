import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

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
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

initializeAppCheck(fbapp, {
  provider: new ReCaptchaV3Provider(
    process.env.NEXT_PUBLIC_GOOGLE_RECAPCHA_PUBLIC_KEY as string
  ),
  isTokenAutoRefreshEnabled: true
})


const fbauth = getAuth(fbapp)

const fblytics = getAnalytics(fbapp)

export { fbapp, fbauth, fblytics }