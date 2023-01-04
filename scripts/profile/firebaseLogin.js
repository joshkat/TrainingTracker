//init firebase
var firebaseConfig = {
  apiKey: "AIzaSyDWzPbgPFSjVgRIFCoNC4BTAkpW9s3GZnw",
  authDomain: "training-tracker-d8802.firebaseapp.com",
  projectId: "training-tracker-d8802",
  storageBucket: "training-tracker-d8802.appspot.com",
  messagingSenderId: "154863339050",
  appId: "1:154863339050:web:5e4898dd89b44f80c26553",
  measurementId: "G-8VPJDG1D4Y",
};
firebase.initializeApp(firebaseConfig);

// select the login button
const loginButton = document.getElementById("login-button");

loginButton.addEventListener("click", function () {
  // Initiate the login process with Google authentication
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // The login was successful
      console.log("The user is logged in");
      console.log("User ID:", result.user.uid);
      console.log("Email:", result.user.email);
      console.log("Display Name:", result.user.displayName);
    })
    .catch(function (error) {
      // An error occurred during the login process
      console.error(error);
    });
});

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // The user is logged in, you can access their data here
    console.log("User ID:", user.uid);
    console.log("Email:", user.email);
    console.log("Display Name:", user.displayName);
    console.log("Profile Picture URL:", user.photoURL);
  } else {
    // The user is not logged in
  }
});
