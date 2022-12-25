function Templte(name, description, workouts, lastWorkout) {
  this.name = name; //needed to create
  this.description = description; //could be empty str to init
  this.workouts = workouts; //empty arr to init
  this.lastWorkout = lastWorkout; //empty str to init
}

class Template {
  constructor(name, description, workouts, lastWorkout) {
    this.name = name; //needed to create
    this.description = description; //could be empty str to init
    this.workouts = workouts; //empty arr to init
    this.lastWorkout = lastWorkout; //empty str to init
  }

  addWorkoutToTemplate(arr) {
    //arr consists of [name, notes, setInfo]
    this.workouts.push(arr);
  }
}

Templte.prototype.addWorkoutToTemplate = function ([name, notes, setInfo]) {
  this.workouts.push([name, notes, setInfo]);
};

const premadeWorkouts = [
  //order of each arr is name, notes, setInfo(left empty)
  ["Bench Press", "rn", "re"],
  ["Incline Press", "re", "re"],
];

let chestWorkout = new Template("Chest", ">.<", []);
let backWorkout = new Template("Back", "", premadeWorkouts);

chestWorkout.addWorkoutToTemplate(premadeWorkouts[0]);
console.log(chestWorkout, backWorkout);

function htmlTemplate(objTemplate, /*userTemplateList,*/ HTMLRef) {
  //
  var templateBorder = document.createElement("div"),
    templateTopHead = document.createElement("div"),
    templateTitle = document.createElement("h1"), //set innerText later
    templateButton = document.createElement("button"), //innerTxt later
    templateMenu = document.createElement("ol"),
    templateWorkoutList = document.createElement("div"),
    templateLastWorkout = document.createElement("div");

  templateBorder.classList.add("template-border");
  templateTopHead.classList.add("template-topHead");
  templateTitle.classList.add("template-title");
  templateButton.classList.add("template-button");
  templateMenu.classList.add("template-menu");
  templateWorkoutList.classList.add("template-workOutList");
  templateLastWorkout.classList.add("template-lastWorkout");

  templateBorder.append(
    templateTopHead,
    templateWorkoutList,
    templateLastWorkout
  ); //, templateWorkoutList, templateLastWorkout)
  templateTopHead.append(templateTitle, templateButton, templateMenu);
  templateTitle.innerText = objTemplate.name;
  templateButton.innerText = "•••";
  templateWorkoutList.innerText = objTemplate.workouts;
  templateLastWorkout.innerText = objTemplate.lastWorkout;

  HTMLRef.append(templateBorder);
  console.log("template added");
}
