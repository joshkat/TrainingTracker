const div = document.getElementsByClassName("mainContent");
const templateHolder = document.getElementsByClassName("holder")[0];
const addTemplateBtn = document.getElementById("addTemplate");
let templates = []; //by default will be null, put my own in later
let HTMLtemplates = [];
let userId;

function addTemplate(temp) {
  const newDiv = htmlTemplate(temp); //reuse for appending templates after firebase login
  const optionsBtn = newDiv.getElementsByClassName("template-button")[0];
  const menu = newDiv
    .getElementsByClassName("template-topHead")[0]
    .getElementsByClassName("template-menu")[0]; //menu button
  const templateAdjustBtns = newDiv
    .getElementsByClassName("template-topHead")[0]
    .getElementsByClassName("template-menu")[0]
    .getElementsByTagName("li"); //gets the list of btns in menu
  HTMLtemplates.push(newDiv); //pushes div to HTMLref arr
  let menuOpen = false;

  //logs current arr pos that template is in
  newDiv.addEventListener("click", (event) => {
    if (menuOpen != true) {
      console.log(templates[HTMLtemplates.indexOf(event.currentTarget)]);
      //startWorkout(HTMLtemplates.indexOf(event.currentTarget)) //start the workout using the current template
    }
  });

  //Edit button
  templateAdjustBtns[0].addEventListener("click", () => {
    console.log(templateAdjustBtns[0].innerHTML);
  });

  //Rename button
  templateAdjustBtns[1].addEventListener("click", () => {
    renameTemplate(newDiv);
    // menu.classList.toggle("opened");
    // menuOpen = false;
  });

  //deleteButton
  templateAdjustBtns[2].addEventListener("click", () => {
    removeIndex(newDiv);
  });

  //event can be used as ptr to which template needs editing
  optionsBtn.addEventListener(
    "click",
    (event) => {
      if (menuOpen == true) {
        menuOpen = false;
      } else {
        menuOpen = true;
      }
      event.preventDefault();
      event.stopPropagation();
      console.log("Button clicked!");
      menu.classList.toggle("opened");
    },
    false
  );

  //appends div to document
  templateHolder.appendChild(newDiv);
}

addTemplateBtn.addEventListener("click", () => {
  createTemplatePopUp(templates);
});

const removeIndex = (div) => {
  // remove the div element from the container
  templateHolder.removeChild(div);

  // remove the div element from the HTMLtemplates array
  const index = HTMLtemplates.indexOf(div);
  HTMLtemplates.splice(index, 1);
  templates.splice(index, 1);

  database.ref(`users/${userId}/templates`).set(templates);

  console.log(templates, HTMLtemplates);
};

const renameTemplate = (div) => {
  const index = HTMLtemplates.indexOf(div);

  //give input prompt
  let newName = prompt("Enter the new template name:", templates[index].name);
  //so long as str > 0
  if (newName.length > 0) {
    div
      .getElementsByClassName("template-topHead")[0]
      .getElementsByTagName("h1")[0].innerText = newName;
    templates[index].name = newName;
  }

  //update firebase
  database.ref(`users/${userId}/templates`).set(templates);
};

//this is to setup everything depending on if user is logged in or not
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    userId = user.uid;
    // The user is logged in, setup template array here
    database
      .ref(`users/${userId}/templates`)
      .once("value")
      .then(function (snapshot) {
        setupWhenLoggedIn(snapshot.val());
      });
  } else {
    templateHolder.innerHTML = "";
  }
});

//arr being passed in is template arr from firebase
function setupWhenLoggedIn(arr) {
  templateHolder.innerHTML = "";
  if (arr == null) return;
  templates = arr;
  for (var i = 0; i < arr.length; i++) {
    addTemplate(arr[i]);
  }
  console.log("templates", templates, "\n", "HTML", HTMLtemplates);
}
