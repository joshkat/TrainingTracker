let userId, database, temp;
const profileHolder = document.querySelector(".profile-main");
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // The user is logged in
    userId = user.uid;
    database = firebase.database();
    mainContent.innerHTML = "";
    database
      .ref(`users/${userId}/measurements`)
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
  for (var i = 0; i < inputArr.length; i++) {
    inputArr[i].addEventListener("input", (event) => {
      if (event.target.value == "") {
        //when str is empty return ""
        database.ref(`users/${userId}/measurements/${event.target.id}`).set("");
      } else {
        //when str has val return curr val
        database
          .ref(`users/${userId}/measurements/${event.target.id}`)
          .set(event.target.value);
      }
    });

    if (dbArr == null) return;
    if (dbArr[inputArr[i].id] != undefined) {
      inputArr[i].value = dbArr[inputArr[i].id];
    }
  }
}
