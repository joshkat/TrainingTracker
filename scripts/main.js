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
let addTemplate = () => {
  let newDiv = htmlTemplate(chest); //generates div to append
  let optionsBtn = newDiv.getElementsByClassName("template-button")[0];
  HTMLtemplates.push(newDiv); //pushes div to HTMLref arr
  HTMLbuttons.push(optionsBtn); //pushes btn to HTMLref arr
  templates.push(chest); //would push real template

  //logs current arr pos that template is in
  newDiv.addEventListener("click", (event) => {
    console.log(HTMLtemplates.indexOf(event.currentTarget));
  });

  //event can be used as ptr to which template needs editing
  optionsBtn.addEventListener(
    "click",
    (event) => {
      const menu =
        document.getElementsByClassName("template-menu")[
          HTMLbuttons.indexOf(event.currentTarget)
        ];
      console.log("Button clicked!");
      event.preventDefault();
      menu.classList.toggle("opened");
      event.stopPropagation();

      // document.addEventListener("click", (event, HTMLbuttons) => {
      //   if (event.target.matches("li")) {
      //     console.log(HTMLbuttons);
      //   }
      // });
    },
    false
  );

  //appends div to document
  templateHolder.appendChild(newDiv);
};

function remakeTemplate(HTMLtemps, HTMLbtn, temps, index) {
  //need to remove index from all arr
  //clear board
  //loop through Htmltemplates arr to add them to holder
  HTMLtemps.splice(index, 1);
  HTMLbtn.splice(index, 1);
  temps.splice(index, 1);
  templateHolder.innerHTML = "";
  for (var i = 0; i < HTMLtemps.length; i++) {
    templateHolder.appendChild(HTMLtemps[i]);
  }
  console.log(`removed ${HTMLtemps[index]} from arr`);
}

addTemplateBtn.addEventListener("click", addTemplate);
