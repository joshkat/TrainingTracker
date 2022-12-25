let div = document.getElementsByClassName("mainContent");
let templateHolder = document.getElementsByClassName("holder");
let addTemplate = document.getElementById("addTemplate");
let templates = []; //by default will be null, put my own in later
let HTMLtemplates = [];
/**
 * Current plan is as follows
 * 1. Append things to holder
 * 2. Have everything appended, have an obj type created of it and link them together within the arr
 * 2.5. To rearrange order of arr just have everything change and reload entire arr back into existence
 * 3. Make each html elem clickable and append current OBJ !HTML content (although they'll be identical)
 */

// var openMenuBtn = document.getElementsByClassName("template-button")[0], This is to open options button on templates, reuse later
//   menu = document.getElementsByClassName("template-menu")[0];

// openMenuBtn.addEventListener(
//   "click",
//   function (e) {
//     e.preventDefault();
//     menu.classList.toggle("opened");
//   },
//   false
// );

//dummy template to append
let chest = new Template(
  "Chest",
  "This is a workout for my chest!",
  premadeWorkouts,
  []
);

//appending dummy template
addTemplate.addEventListener("click", () => {
  templates.push(chest); //add to obj arr
  htmlTemplate(chest, templateHolder[0]); //create HTML
  HTMLtemplates = document.getElementsByClassName("template-border"); //reset HTML arr
  console.log(templates, HTMLtemplates); //log info

  //for loop to show clicked on template
  for (var i = 0; i < templates.length; i++) {
    HTMLtemplates[i].addEventListener("click", () => {
      console.log(templates[i - 1]);
    });
  }
});

//set greeting @ header
const d = new Date();
let hour = d.getHours();
const welcomeTag = document.getElementById("welcome");

if (hour < 12 && hour >= 0) {
  welcomeTag.innerText = "Good Morning!";
} else if (hour >= 12 && hour < 17) {
  welcomeTag.innerText = "Good Afternoon!";
} else {
  welcomeTag.innerText = "Good Evening!";
}
