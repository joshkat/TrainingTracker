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
  let index = 0;
  const newDiv = htmlTemplate(chest); //generates div to append
  const optionsBtn = newDiv.getElementsByClassName("template-button")[0];
  HTMLtemplates.push(newDiv); //pushes div to HTMLref arr
  templates.push(chest); //would push real template

  //logs current arr pos that template is in
  newDiv.addEventListener("click", (event) => {
    index = HTMLtemplates.indexOf(event.currentTarget);
    console.log(index);
  });

  //event can be used as ptr to which template needs editing
  optionsBtn.addEventListener(
    "click",
    (event) => {
      const menu = document.getElementsByClassName("template-menu")[index];
      console.log("Button clicked!");
      event.preventDefault();
      menu.classList.toggle("opened");
      event.stopPropagation();
    },
    false
  );

  //appends div to document
  templateHolder[0].appendChild(newDiv);
};

addTemplateBtn.addEventListener("click", addTemplate);
