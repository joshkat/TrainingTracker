const mainContent = document.querySelector(".mainContent");

let loginBoxParent = document.createElement("div");
loginBoxParent.classList.add("buttonHolder");
loginBoxParent.innerHTML = `
    <span>Login using Google to get started!</span>
    <button id="login-button">Login</button>
`;

let profileBoxParent = document.createElement("div");
profileBoxParent.classList.add("profileHolder");
profileBoxParent.innerHTML = `
  <div class="profile-main">
    <img
      src="https://i.scdn.co/image/ab6775700000ee8522b26bdddf0ff534801e3756"
      alt="profileIMG"
      width="150px"
      class="profileIMG"
    />
    <span class="name">NAME</span>
    <span>WORKOUT NUMBER</span>
    <span>GOAL</span>
  </div>
`;

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
const loginButton = loginBoxParent.querySelector("button");

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

// const loginBox = document.getElementById("buttonHolder");
const profileHolder = document.querySelector(".profile-main");
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // The user is logged in
    profileBoxParent.querySelector(".name").textContent = user.displayName; //change username
    profileBoxParent.querySelector("img").src = user.photoURL; //change img

    mainContent.append(profileBoxParent); //append when logged in

    console.log("User ID:", user.uid);
    console.log("Email:", user.email);
    console.log("Display Name:", user.displayName);
    console.log("Profile Picture URL:", user.photoURL);
  } else {
    mainContent.append(loginBoxParent); //append when !logged in
  }
});
