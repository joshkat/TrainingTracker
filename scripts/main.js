let div = document.getElementsByClassName("mainContent");
let templateHolder = document.getElementsByClassName("holder");
let addTemplateBtn = document.getElementById("addTemplate");
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
const addTemplate = () => {
  const newDiv = htmlTemplate(chest); //generates div to append
  HTMLtemplates.push(newDiv); //pushes div to HTMLref arr
  templates.push(chest); //would push real template

  //logs current arr pos that template is in
  newDiv.addEventListener("click", (event) => {
    console.log(HTMLtemplates.indexOf(event.currentTarget));
  });

  //appends div to document
  templateHolder[0].appendChild(newDiv);
};

addTemplateBtn.addEventListener("click", addTemplate);

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

//theme change
const themeButton = document.getElementById("themeChange");
const cssTag = document.getElementById("darkModeCSS");

themeButton.addEventListener("click", () => {
  switch (themeButton.innerText) {
    case "☀️":
      themeButton.innerText = "🌚";
      cssTag.href = "";
      break;
    case "🌚":
      themeButton.innerText = "☀️";
      cssTag.href = "./styles/darkModeStyles.css";
      break;
  }
});
