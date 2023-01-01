function htmlTemplate(obj) {
  let returnDiv = document.createElement("div");
  returnDiv.classList.add("workout-wrapper");
  returnDiv.innerHTML = `
  <img src="${obj.imageURL}" alt=""/>
  <div class="workout-info">
    <h5>${obj.name}</h5>
    <span>Muscle Worked: ${obj.bodyPart}</span>
    <span id="equipment">Equipment: ${obj.equipment}</span>
  </div>
  `;
  return returnDiv;
}

const instructionsPopUp = document.querySelector(".popUp");
function openInstructions(obj) {
  let popup = createInstructions(obj);
  instructionsPopUp.innerHTML = ""; //clear board
  instructionsPopUp.classList.toggle("hidden"); //show board

  popup.querySelector("button").addEventListener("click", () => {
    //close button functionality
    instructionsPopUp.classList.toggle("hidden");
  });

  instructionsPopUp.append(popup); //append instructions
}

function createInstructions(obj) {
  let returnDiv = document.createElement("div");
  returnDiv.innerHTML = `
  <button id="closeMenu">❌</button>
  <div class="imgContainer">
  <h3 style="text-align: center;">${obj.name} Instructions</h3>
  <img
    src="${obj.imageURL}"
    alt=""
    height="200px"
    class="popUpIMG"
  />
  </div>
  <ol>
  </ol>
  `;
  for (var i = 0; i < obj.grabInstructions.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerText = obj.grabInstructions[i];
    returnDiv.querySelector("ol").append(listItem);
  }
  return returnDiv;
}
