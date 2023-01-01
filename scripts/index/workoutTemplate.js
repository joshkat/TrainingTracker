class Template {
  workouts = ["This template is currently empty :("]; //text to be shown to user
  constructor(name, description, workouts, lastWorkout) {
    this.name = name; //needed to create
    this.description = description; //could be empty str to init
    if (workouts.length != 0) {
      this.workouts = workouts; //empty arr to init
    }
    this.lastWorkout = lastWorkout; //empty str to init
  }

  addWorkoutToTemplate(arr) {
    //arr consists of [name, notes, setInfo]
    this.workouts.push(arr);
  }
}

const premadeWorkouts = [
  //order of each arr is name, notes, setInfo(left empty)
  ["Bench Press", "rn", "re"],
  ["Incline Press", "re", "re"],
];

let chestWorkout = new Template("Chest", ">.<", []);
let backWorkout = new Template("Back", "", premadeWorkouts);

function htmlTemplate(objTemplate) {
  let templateBorder = document.createElement("div");
  templateBorder.innerHTML = `
  <div class="template-topHead">
    <h1 class="template-title"> ${objTemplate.name} </h1>
    <button class="template-button">•••</button>
  <ol class="template-menu">
    <li>✍🏼 Edit</li>
    <li>🖊 Rename</li>
    <li>❌ Delete</li>
  </ol>
  </div>
  <div class="template-workOutList"> ${objTemplate.workouts} </div>
  <div class="template-lastWorkout"> ${objTemplate.lastWorkout} </div>
  `;
  templateBorder.classList.add("template-border");
  return templateBorder;
}
