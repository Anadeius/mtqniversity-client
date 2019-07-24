import firebase from 'firebase/app';
import 'firebase/firestore';

const {
	REACT_APP_API_KEY,
	REACT_APP_PROJECT_ID,
	REACT_APP_FIREBASE_URL
} = process.env;

firebase.initializeApp({
	apiKey: REACT_APP_API_KEY,
	projectId: REACT_APP_PROJECT_ID,
	databaseURL: REACT_APP_FIREBASE_URL
});

export default firebase;