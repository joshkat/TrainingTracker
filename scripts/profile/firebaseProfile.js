const mainContent = document.querySelector(".mainContent");

let profileBoxParent = document.createElement("div");
profileBoxParent.classList.add("profileHolder");
profileBoxParent.innerHTML = `
  <div class="profile-main">
    <img
      src=""
      alt="profile picture"
      width="150px"
      class="profileIMG"
    />
    <span class="name">NAME</span>
    <span>WORKOUT NUMBER</span>
    <span>GOAL</span>
  </div>
`;

const profileHolder = document.querySelector(".profile-main");
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // The user is logged in
    profileBoxParent.querySelector(".name").textContent = user.displayName; //change username
    profileBoxParent.querySelector("img").src =
      user.photoURL.slice(0, 83) + "s400-c"; //change img

    mainContent.removeChild(document.querySelector(".profile-main"));
    mainContent.append(profileBoxParent); //append when logged in

    console.log("User ID:", user.uid);
    console.log("Email:", user.email);
    console.log("Display Name:", user.displayName);
    console.log("Profile Picture URL:", user.photoURL);
  } else {
    window.location.replace("../index.html"); //redirect when !logged in
  }
});
