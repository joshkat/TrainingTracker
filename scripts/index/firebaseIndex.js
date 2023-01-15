const mainContent = document.querySelector(".mainContent");

let loginBoxParent = document.createElement("div");
loginBoxParent.classList.add("buttonHolder");
loginBoxParent.innerHTML = `
  <div class="buttonWrapper">
    <button id="login-button"><img src="./icons/google.png" height="25px" />Login with Google</button>
    <button id="close-login"> Continue not logged in <br> (Heavily limits features)</button>
  </div>
  `;

const loginButton = loginBoxParent.querySelector("button");
const closeLoginButton = loginBoxParent.querySelector("#close-login");

loginButton.addEventListener("click", function () {
  // Initiate the login process with Google authentication
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // The login was successful
      mainContent.removeChild(document.querySelector(".profileHolder"));
    })
    .catch(function (error) {
      // An error occurred during the login process
      window.location.reload();
      console.error(error);
    });
});

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // The user is logged in, you can access their data here
  } else {
    // The user is not logged in then append login box
    mainContent.append(loginBoxParent);
  }
});

closeLoginButton.addEventListener("click", () => {
  mainContent.removeChild(loginBoxParent); //removes login box
  document
    .querySelector(".templateTitle")
    .removeChild(document.querySelector("#addTemplate")); //removes add template btn
  const spiel = `
  Hey! This is a generic template meant to show off what this webapp can do (and is only visible to non logged in users). 
  Below you can
  `;
  const generic = new Template(
    "Tutorial",
    `${spiel}`,
    JSON.parse('[["Generic Workout","notes",[["100","10"],["120","10"]]]]'),
    "Click on me!"
  );
  console.log(generic);
  addTemplate(generic);
});

var database = firebase.database();
