class Template {
  constructor(name, notes, workouts, lastWorkout) {
    this.name = name; //needed to create
    this.notes = notes; //could be empty str to init
    this.workouts = workouts; //arr.length > 1 needed to be added to db
    this.lastWorkout = lastWorkout; //empty str to init
  }
}

//to generate div that gets appended to main page
function htmlTemplate(objTemplate) {
  let workouts = [];
  //gets rid of notes and sets info from workout arr
  for (var i = 0; i < objTemplate.workouts.length; i++) {
    workouts.push(objTemplate.workouts[i][0]);
  }

  if (objTemplate.lastWorkout === undefined) objTemplate.lastWorkout = "";
  let templateBorder = document.createElement("div");
  templateBorder.innerHTML = `
  <div class="template-topHead">
    <h1 class="template-title"> ${objTemplate.name} </h1>
    <button class="template-button">•••</button>
  <ol class="template-menu">
    <li>✎ Edit</li>
    <li>✎ Rename</li>
    <li>✘ Delete</li>
  </ol>
  </div>
  <div class="template-workOutList"> ${workouts} </div>
  <div class="template-lastWorkout"> ${objTemplate.lastWorkout} </div>
  `;
  templateBorder.classList.add("template-border");
  return templateBorder;
}

/* all of these are for generating a new template */
function htmlWorkoutInPopup(name) {
  const htmlWorkout = document.createElement("div");
  htmlWorkout.classList.add("template-workout");
  htmlWorkout.innerHTML = `
  <header class="template-workout-header">
    <div class="template-name">${name}</div>
    <button>Delete ⌫</button>
  </header>
  <div class="template-info">
    <div>Set</div>
    <!-- keep blank divs here for spacing -->
    <div></div>
    <div>lbs</div>
    <div>reps</div>
  </div>
  <div class="buttonWrapper">
    <button id="addSet">add new set</button>
    <button id="removeSet">remove last set</button>
  </div>
  `;

  return htmlWorkout;
}

function htmlWorkoutSetInPopup(currentSet) {
  let htmlSet = document.createElement("div");
  htmlSet.classList.add("template-info");
  htmlSet.innerHTML = `
  <div>${currentSet}</div>
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
  `;
  return htmlSet;
}

//use for new template and temlpate popup in general, when obj == undefined
//it'll assume new template
function createTemplatePopUp(templateArr, obj) {
  const wrapper = document.createElement("div");
  wrapper.classList.add("template-popup");
  wrapper.innerHTML = `
  <div class="template-head">
  <header class="template-header">
    <button class="template-popup-button">❌</button>
    <div class="stopwatch"></div>
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

  const headerBtns = wrapper.querySelectorAll(".template-popup-button");
  const nameInput = wrapper.querySelector("input");
  const templateNotes = wrapper.querySelector("textarea");

  let rtrn,
    changesMade = false;
  if (obj == undefined) {
    rtrn = new Template("Untitled", "", [], "");
  } else {
    //setup wrapper when obj is present
    rtrn = obj;
    headerBtns[1].style = ""; //removes red styling
    headerBtns[1].innerText = "Finish";

    nameInput.value = rtrn.name;
    templateNotes.value = rtrn.notes;

    for (var i = 0; i < rtrn.workouts.length; i++) {
      const workout = htmlWorkoutInPopup(`${rtrn.workouts[i][0]}`);

      //remove specified workout
      workout.querySelector("button").addEventListener("click", () => {
        editWorkout(workout, rtrn, "removeWorkout", wrapper);
        if (rtrn.workouts.length == 0) {
          headerBtns[1].style = "background-color:red";
        }
      });

      //add set to specified workout
      workout.querySelector("#addSet").addEventListener("click", () => {
        headerBtns[1].style = ""; //turns save btn back to green
        editWorkout(workout, rtrn, "addSet");
        console.log("added");
      });

      workout.querySelector("#removeSet").addEventListener("click", () => {
        editWorkout(workout, rtrn, "removeSet");
        console.log("removed");
      });

      const setArr = rtrn.workouts[i][2];

      for (var j = 0; j < setArr.length; j++) {
        const setHTML = htmlWorkoutSetInPopup(j + 1);
        setHTML.querySelectorAll("input")[0].value = setArr[j][0];
        setHTML.querySelectorAll("input")[1].value = setArr[j][1];
        workout
          .querySelector(".buttonWrapper")
          .insertAdjacentElement("beforebegin", setHTML);
      }

      wrapper.appendChild(workout);
    }
  }
  //workouts are an arr, which consist of ["name", #index, "set arr"]
  //set arr will be used as follows
  // sets.length is # of sets; set[i,j] i is lbs j is reps rtrn.workouts[2][i,j]

  headerBtns[0].addEventListener("click", () => {
    document.querySelector(".holder").removeChild(wrapper);
    //for close w/o save button
  });

  headerBtns[1].addEventListener("click", () => {
    if (
      rtrn.workouts.length != 0 &&
      rtrn.workouts[2] == undefined &&
      obj == undefined
    ) {
      templateArr.push(rtrn);
      addTemplate(rtrn);
    } else {
      let templateIndex = templateArr.findIndex(
        (e) =>
          e.name == rtrn.name &&
          e.notes == rtrn.notes &&
          e.workouts == rtrn.workouts &&
          e.lastWorkout == rtrn.lastWorkout
      );
      templateArr[templateIndex] = rtrn;
      //adjust template that we just finished
      let UITemplate =
        document.querySelectorAll(".template-border")[templateIndex];

      UITemplate.querySelector(".template-title").innerText = rtrn.name;
    }
    // get the current user's UID
    userId = firebase.auth().currentUser.uid;
    // add the template to the user's templates in Firebase
    database.ref(`users/${userId}/templates`).set(templates);
    document.querySelector(".holder").removeChild(wrapper);
  });

  nameInput.addEventListener("input", (event) => {
    if (event.target.value != "") {
      rtrn.name = event.target.value;
    } else {
      //when str is empty add a red highlight to the box
      rtrn.name = "Untitled Template";
    }
  });

  templateNotes.addEventListener("input", (event) => {
    rtrn.notes = event.target.value;
  });

  const buttons = wrapper.querySelectorAll("button"); //btn [2] is from list, [3] is custom workout

  //meant for the adding custom workout, will be nearly identical to adding from list
  buttons[3].addEventListener("click", () => {
    const workoutName = prompt("What's the custom workout name?\n");
    if (workoutName == null || workoutName == "") /*when empty or null*/ return;

    let workout = htmlWorkoutInPopup(workoutName);
    wrapper.querySelector(".template-workoutWrapper").appendChild(workout);
    //for db portion
    rtrn.workouts.push([workoutName, "notes", []]); //pushes name & index to arr the rest is up to event listeners

    //remove specified workout
    workout.querySelector("button").addEventListener("click", () => {
      editWorkout(workout, rtrn, "removeWorkout", wrapper);
      if (rtrn.workouts.length == 0) {
        headerBtns[1].style = "background-color:red";
      }
    });

    //add set to specified workout
    workout.querySelector("#addSet").addEventListener("click", () => {
      headerBtns[1].style = ""; //turns save btn back to green
      editWorkout(workout, rtrn, "addSet");
      console.log("added");
    });

    workout.querySelector("#removeSet").addEventListener("click", () => {
      editWorkout(workout, rtrn, "removeSet");
      console.log("removed");
    });
  });

  document.querySelector(".holder").appendChild(wrapper);
  if (obj != undefined) console.log("opened");
}

//use this to remove whole workouts & add/remove sets from individual workouts
function editWorkout(workout, templateObj, str, wrapper) {
  const htmlWorkouts = document.querySelectorAll(".template-workout");
  const htmlName = workout.querySelector(".template-name").innerText;

  //finds and sets index of htmlName to later remove from templateObj
  for (var i = 0; i < htmlWorkouts.length; i++) {
    let temp = htmlWorkouts[i].querySelector(".template-name").innerText;
    if (temp == htmlName && str == "removeWorkout") {
      //removes from document & obj
      templateObj.workouts.splice(i, 1);
      wrapper.querySelector(".template-workoutWrapper").removeChild(workout);
      return;
    }
    if (temp == htmlName && str == "addSet") {
      const setHTML = htmlWorkoutSetInPopup(
        templateObj.workouts[i][2].length + 1
      );

      addSetListeners(setHTML, templateObj, workout, i);

      workout
        .querySelector(".buttonWrapper")
        .insertAdjacentElement("beforebegin", setHTML);
      templateObj.workouts[i][2].push(["", ""]);
      //push a set array [lbs, reps] by default "" for both
      return;
    }
    if (temp == htmlName && str == "removeSet") {
      let x = workout.querySelectorAll(".template-info");
      if (x.length > 1) {
        workout.removeChild(x[x.length - 1]);
        templateObj.workouts[i][2].pop();
        return;
      }
    }
  }
}

function addSetListeners(setHTML, obj, workout, workoutIndex) {
  const setIndex = workout.querySelectorAll(".template-info").length - 1;
  const lbsInput = setHTML.querySelectorAll("input")[0];
  const repsInput = setHTML.querySelectorAll("input")[1];

  lbsInput.addEventListener("input", (event) => {
    obj.workouts[workoutIndex][2][setIndex][0] = event.target.value;
  });

  repsInput.addEventListener("input", (event) => {
    obj.workouts[workoutIndex][2][setIndex][1] = event.target.value;
  });
}
