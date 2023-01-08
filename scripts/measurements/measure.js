const mainContent = document.querySelector(".measurement-main");

let info = document.createElement("div"); //append this when logged in
info.classList.add("info");
info.innerHTML = `
<p>General Info</p>
<ul>
  <li>Weight (lbs)<input type="number" id="weight"/></li>
  <li>Body Fat % <input id="BodyFat%" type="number"></li>
  <li>
    Caloric Intake (kcal)
    <input type="number" id="CaloricIntake">
  </li>
</ul>

<p>Body Parts</p>
<ul>
  <li>Neck (in) <input type="number" id="Neck"></li>
  <li>Shoulders (in)<input type="number" id="Shoulders"></li>
  <li>Chest (in)<input type="number" id="Chest"></li>
  <li>Left Bicep (in)<input id="LeftBicep" type="number"></li>
  <li>Right Bicep (in)<input id="RightBicep" type="number"></li>
  <li>Left Forearm (in)<input id="LeftForearm" type="number"></li>
  <li>
    Right Forearm (in)
    <input id="RightForearm" type="number">
  </li>
  <li>Upper Abs (in)<input id="UpperAbs" type="number"></li>
  <li>Waist (in)<input id="Waist" type="number"></li>
  <li>Lower Abs (in)<input id="LowerAbs" type="number"></li>
  <li>Hips (in)<input id="Hips" type="number"></li>
  <li>Left Thigh (in)<input id="LeftThigh" type="number"></li>
  <li>Right Thigh (in)<input id="RightThigh" type="number"></li>
  <li>Left Calf (in)<input id="LeftCalf" type="number"></li>
  <li>Right Calf (in)<input id="RightCalf" type="number"></li>
</ul>
`;

const inputArr = info.querySelectorAll("input");
for (var i = 0; i < inputArr.length; i++) {
  inputArr[i].addEventListener("input", (event) => {
    console.log(event.target.id);
  });
}
