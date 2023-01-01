class Excercise {
  constructor(name, bodyPart, equipment, instructions, imgURL) {
    //all of these are required!
    this.name = name;
    this.bodyPart = bodyPart;
    this.equipment = equipment;
    this.instructions = instructions;
    this.imgURL = imgURL;
  }
}

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
