let div = document.getElementsByClassName("mainContent");
let templateHolder = document.getElementsByClassName("holder");
let addTemplate = document.getElementById("addTemplate");
let templates = []; //by default will be null, put my own in later
let HTMLtemplates = [];

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
