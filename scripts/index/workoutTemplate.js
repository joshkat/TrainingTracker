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

function htmlTemplate(objTemplate) {
  if (objTemplate.lastWorkout === undefined) objTemplate.lastWorkout = "";
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

function createTemplatePopUp() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("template-popup");
  wrapper.innerHTML = `
  <div class="template-head">
  <header class="template-header">
    <button class="template-popup-button">❌</button>
    <button class="template-popup-button template-save">
      Save
    </button>
  </header>
  <input
    type="text"
    id="template-name"
    class="template-headerInput"
    placeholder="Template Name"
  />
  <textarea
    name="description"
    id="template-description"
    class="template-headerInput"
    placeholder="Notes:"
    rows="5"
  ></textarea>
</div>
<div class="template-workoutWrapper">
  <div class="template-workoutWrapper-buttons">
    <button>add workout from list</button>
    <button>add custom workout</button>
  </div>
  <div class="template-workout">
    <header class="template-workout-header">
      <div>Name</div>
      <button>Delete ❌</button>
    </header>
    <div class="template-info">
      <div>Set</div>
      <!-- keep blank divs here for spacing -->
      <div></div>
      <div>lbs</div>
      <div>reps</div>
    </div>
    <div class="template-info">
      <div>0</div>
      <div></div>
      <div></div>
      <input
        class="template-infoInput"
        type="number"
        placeholder="#"
      />
      <input
        class="template-infoInput"
        type="number"
        placeholder="#"
      />
    </div>
    <div class="template-info">
      <div>1</div>
      <div></div>
      <div></div>
      <input
        class="template-infoInput"
        type="number"
        placeholder="#"
      />
      <input
        class="template-infoInput"
        type="number"
        placeholder="#"
      />
    </div>
  </div>
</div>
  `;
  document.querySelector(".holder").appendChild(wrapper);
}

//activates when add template btn is hit
function createTemplate() {
  createTemplatePopUp();
  return;
  const arr = [prompt("Template Name:"), prompt("Workouts:")];

  let rtrn = new Template(arr[0], "", arr[1], []);
  if (arr[0] != null) return rtrn;
}
