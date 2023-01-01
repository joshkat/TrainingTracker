let div = document.getElementsByClassName("mainContent");
let templateHolder = document.getElementsByClassName("holder")[0];
let addTemplateBtn = document.getElementById("addTemplate");
let templates = []; //by default will be null, put my own in later
let HTMLtemplates = [];
let HTMLbuttons = [];

//dummy template to append
let chest = new Template(
  "Chest",
  "This is a workout for my chest!",
  premadeWorkouts,
  []
);

function createTemplate() {
  const name = prompt("Template Name:");
  let rtrn = new Template(name, "", [], []);
  return rtrn;
}

//appending dummy template
const addTemplate = () => {
  const newTemplate = createTemplate();
  const newDiv = htmlTemplate(newTemplate); //generates div to append
  const optionsBtn = newDiv.getElementsByClassName("template-button")[0];
  const menu = newDiv
    .getElementsByClassName("template-topHead")[0]
    .getElementsByClassName("template-menu")[0]; //menu button
  const templateAdjustBtns = newDiv
    .getElementsByClassName("template-topHead")[0]
    .getElementsByClassName("template-menu")[0]
    .getElementsByTagName("li"); //gets the list of btns in menu
  HTMLtemplates.push(newDiv); //pushes div to HTMLref arr
  HTMLbuttons.push(optionsBtn); //pushes btn to HTMLref arr
  templates.push(newTemplate); //would push real template
  let menuOpen = false;

  //logs current arr pos that template is in
  newDiv.addEventListener("click", (event) => {
    if (menuOpen != true) {
      console.log(HTMLtemplates.indexOf(event.currentTarget));
    }
  });

  //Edit button
  templateAdjustBtns[0].addEventListener("click", () => {
    console.log(templateAdjustBtns[0].innerHTML);
  });

  //Rename button
  templateAdjustBtns[1].addEventListener("click", () => {
    renameTemplate(newDiv);
    menu.classList.toggle("opened");
    menuOpen = false;
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
};

addTemplateBtn.addEventListener("click", addTemplate);

const removeIndex = (div) => {
  // remove the div element from the container
  templateHolder.removeChild(div);

  // remove the div element from the HTMLtemplates array
  const index = HTMLtemplates.indexOf(div);
  HTMLtemplates.splice(index, 1);
  templates.splice(index, 1);
  HTMLbuttons.splice(index, 1);
  console.log(templates, HTMLtemplates);
};

const renameTemplate = (div) => {
  const index = HTMLtemplates.indexOf(div);

  //give input prompt
  let newName = prompt(
    "Enter the new template name \nA maximum of 10 char name will be saved"
  );
  //so long as str > 0
  if (newName.length > 0) {
    newName = newName.slice(0, 10); //cut off after 10 length
    div
      .getElementsByClassName("template-topHead")[0]
      .getElementsByTagName("h1")[0].innerText = newName;
    templates[index].name = newName;
  }
  console.log(index);
};
