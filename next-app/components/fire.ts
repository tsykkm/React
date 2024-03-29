import firebase from "firebase/app";
console.log(firebase)
const firebaseConfig = {
	apiKey: process.env.REACT_APP_APP_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
if (firebase.length === 0) {
	firebase.initializeApp(firebaseConfig);
}
