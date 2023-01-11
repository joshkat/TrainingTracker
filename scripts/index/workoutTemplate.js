class Template {
  constructor(name, notes, workouts, lastWorkout) {
    this.name = name; //needed to create
    this.notes = notes; //could be empty str to init
    this.workouts = workouts; //arr.length > 1 needed to be added to db
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

function htmlWorkoutInPopup(obj) {
  //for blank template for now, obj.length rtrns undef rem that
  const htmlWorkout = document.createElement("div");
  htmlWorkout.classList.add("template-workout");
  htmlWorkout.innerHTML = `
  <header class="template-workout-header">
    <div class="template-name">${obj}</div>
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
  `;
  return htmlWorkout;
}

function createTemplatePopUp(templateArr) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("template-popup");
  wrapper.innerHTML = `
  <div class="template-head">
  <header class="template-header">
    <button class="template-popup-button">❌</button>
    <button class="template-popup-button template-save" style="background-color:red">
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
</div>
  `;

  let rtrn = new Template("Untitled", "", [], "");
  //workouts are an arr, which consist of ["name", #index, "set arr"]
  //set arr will be used as follows
  // sets.length is # of sets; set[i,j] i is lbs j is reps rtrn.workouts[2][i,j]

  const headerBtns = wrapper.querySelectorAll(".template-popup-button");
  headerBtns[0].addEventListener("click", () => {
    document.querySelector(".holder").removeChild(wrapper);
    //for close w/o save button
  });

  headerBtns[1].addEventListener("click", () => {
    if (rtrn.workouts.length != 0) {
      templateArr.push(rtrn);
      addTemplate(rtrn);
      document.querySelector(".holder").removeChild(wrapper);

      // get the current user's UID
      userId = firebase.auth().currentUser.uid;
      // add the template to the user's templates in Firebase
      database.ref(`users/${userId}/templates`).set(templates);
    }
    console.log(rtrn);
  });

  const nameInput = wrapper.querySelector("input");
  nameInput.addEventListener("input", (event) => {
    if (event.target.value != "") {
      rtrn.name = event.target.value;
    } else {
      //when str is empty add a red highlight to the box
      rtrn.name = "Untitled Template";
    }
  });

  const templateNotes = wrapper.querySelector("textarea");
  templateNotes.addEventListener("input", (event) => {
    rtrn.notes = event.target.value;
  });

  const buttons = wrapper.querySelectorAll("button"); //btn [2] is from list, [3] is custom workout

  //meant for the adding custom workout, will be nearly identical to adding from list
  buttons[3].addEventListener("click", () => {
    const workoutName = prompt("What's the custom workout name?\n");
    if (workoutName == null || workoutName == "") {
      //when empty or null
      return;
    }
    headerBtns[1].style = ""; //turns save btn back to green
    let workout = htmlWorkoutInPopup(workoutName);
    wrapper.querySelector(".template-workoutWrapper").appendChild(workout);
    //for db portion
    rtrn.workouts.push([workoutName]); //pushes name & index to arr the rest is up to event listeners

    //remove specified template
    workout.querySelector("button").addEventListener("click", () => {
      removeWorkoutFromTemplate(workout, rtrn);
      if (rtrn.workouts.length == 0) {
        headerBtns[1].style = "background-color:red";
      }
    });
  });

  document.querySelector(".holder").appendChild(wrapper);
}

function removeWorkoutFromTemplate(workout, templateObj) {
  const htmlWorkouts = document.querySelectorAll(".template-workout");
  const htmlName = workout.querySelector(".template-name").innerText;

  //finds and sets index of htmlName to later remove from templateObj
  for (var i = 0; i < htmlWorkouts.length; i++) {
    let temp = htmlWorkouts[i].querySelector(".template-name").innerText;
    if (temp == htmlName) {
      templateObj.workouts.splice(i, 1);
      break;
    }
  }
  //removes from document & obj
  document.querySelector(".template-workoutWrapper").removeChild(workout);
}
