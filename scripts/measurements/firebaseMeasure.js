//init firebase
var firebaseConfig = {
  apiKey: "AIzaSyDWzPbgPFSjVgRIFCoNC4BTAkpW9s3GZnw",
  authDomain: "training-tracker-d8802.firebaseapp.com",
  projectId: "training-tracker-d8802",
  databaseURL: "https://training-tracker-d8802-default-rtdb.firebaseio.com",
  storageBucket: "training-tracker-d8802.appspot.com",
  messagingSenderId: "154863339050",
  appId: "1:154863339050:web:5e4898dd89b44f80c26553",
  measurementId: "G-8VPJDG1D4Y",
};
firebase.initializeApp(firebaseConfig);

let userID, database;
const profileHolder = document.querySelector(".profile-main");
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // The user is logged in
    userID = user.uid;
    database = firebase.database();
    mainContent.innerHTML = "";
    database
      .ref(`users/${userID}/measurements/`)
      .once("value")
      .then(function (snapshot) {
        setupWhenLoggedIn(snapshot.val());
      });
    mainContent.append(info); //append info
  } else {
    window.location.replace("../index.html"); //redirect when !logged in
  }
});

function setupWhenLoggedIn(dbArr) {
  //add DB event listeners
  const inputArr = info.querySelectorAll("input");
  console.log(dbArr[inputArr[3].id]);
  for (var i = 0; i < inputArr.length; i++) {
    if (dbArr[inputArr[i].id] != undefined) {
      inputArr[i].value = dbArr[inputArr[i].id];
    }
    inputArr[i].addEventListener("input", (event) => {
      if (event.target.value !== "") {
        //when str is num
        database
          .ref(`users/${userID}/measurements/${event.target.id}`)
          .set(event.target.value);
      }
    });
  }
}
