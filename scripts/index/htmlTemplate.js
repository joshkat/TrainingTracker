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

//appending dummy template
const addTemplate = () => {
  const newDiv = htmlTemplate(chest); //generates div to append
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
  templates.push(chest); //would push real template
  let index = templates.length - 1;
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
    const newName = prompt("enter new name:");
    if (newName.length > 0) div.innerHTML = index;
    // templates[index].name = "test";

    // HTMLtemplates[index].getElementsByClassName('div')[0].getElementsByClassName()
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
