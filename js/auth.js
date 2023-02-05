// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC6_-vpJ17zMtuKxr1xhexdAYpI7b9iXRA",
    authDomain: "fastodo-d9a98.firebaseapp.com",
    databaseURL: "https://fastodo-d9a98-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fastodo-d9a98",
    storageBucket: "fastodo-d9a98.appspot.com",
    messagingSenderId: "634281129841",
    appId: "1:634281129841:web:4b941bec04cc3b196728d0",
    measurementId: "G-NTP61NQEDX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//invokes firebase authentication.
const auth = firebase.auth();

const signOut = () => {
    firebase
        .auth()
        .signOut()
        .catch(function (error) {
            alert("error signing out, check network connection");
        });
    console.log("signout");
};

const authenticate = (email, password) => {
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email, password);
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password).
    then(() => {
            window.location.replace("dashboard.html");
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert.warning(errorMessage);
        });
};

const signOutButton = document.querySelector("#signout");

if (signOutButton) {
    signOutButton.addEventListener("click", () => {
        signOut();
    });
}