import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBcEqLkMXETYHX0ldto3KPyAo3lpuv5USQ",
    authDomain: "discord-clone-98994.firebaseapp.com",
    databaseURL: "https://discord-clone-98994.firebaseio.com",
    projectId: "discord-clone-98994",
    storageBucket: "discord-clone-98994.appspot.com",
    messagingSenderId: "740346626325",
    appId: "1:740346626325:web:c8de8ad6060a432c87291c"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;