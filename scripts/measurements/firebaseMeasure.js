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

const profileHolder = document.querySelector(".profile-main");
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // The user is logged in
    mainContent.innerHTML = "";
    mainContent.append(info); //append info
  } else {
    window.location.replace("../index.html"); //redirect when !logged in
  }
});
