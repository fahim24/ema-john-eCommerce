// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB5Fkv6aPkJDgg-urAsDN7l67Umzdrfl_Y",
	authDomain: "ema-john-52e05.firebaseapp.com",
	projectId: "ema-john-52e05",
	storageBucket: "ema-john-52e05.appspot.com",
	messagingSenderId: "949841007874",
	appId: "1:949841007874:web:f40d511669482aa5545e1b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
