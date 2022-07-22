import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDT3TK5yy0pmGKPPcmIujKNJ4EU1LFhNRg",
  authDomain: "restaurant-app-31fc3.firebaseapp.com",
  databaseURL: "https://restaurant-app-31fc3-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-31fc3",
  storageBucket: "restaurant-app-31fc3.appspot.com",
  messagingSenderId: "1042070712335",
  appId: "1:1042070712335:web:4e320fb8d5cc4b5441337a"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
