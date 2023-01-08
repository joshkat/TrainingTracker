const mainContent = document.querySelector(".mainContent");

let loginBoxParent = document.createElement("div");
loginBoxParent.classList.add("buttonHolder");
loginBoxParent.innerHTML = `
    <button id="login-button"><img src="./icons/google.png" height="25px" />Login with Google</button>
`;

let loginButton = loginBoxParent.querySelector("button");
loginButton.addEventListener("click", function () {
  // Initiate the login process with Google authentication
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // The login was successful
      mainContent.removeChild(document.querySelector(".profileHolder"));
      console.log("The user is logged in");
      console.log("User ID:", result.user.uid);
      console.log("Email:", result.user.email);
      console.log("Display Name:", result.user.displayName);
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

var database = firebase.database();
