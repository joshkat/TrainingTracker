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

<p>Body Parts (inches)</p>
<ul>
  <li>Neck <input type="number" id="Neck"></li>
  <li>Shoulders <input type="number" id="Shoulders"></li>
  <li>Chest <input type="number" id="Chest"></li>
  <li>Left Bicep <input id="LeftBicep" type="number"></li>
  <li>Right Bicep <input id="RightBicep" type="number"></li>
  <li>Left Forearm <input id="LeftForearm" type="number"></li>
  <li>
    Right Forearm 
    <input id="RightForearm" type="number">
  </li>
  <li>Upper Abs <input id="UpperAbs" type="number"></li>
  <li>Waist <input id="Waist" type="number"></li>
  <li>Lower Abs <input id="LowerAbs" type="number"></li>
  <li>Hips <input id="Hips" type="number"></li>
  <li>Left Thigh <input id="LeftThigh" type="number"></li>
  <li>Right Thigh <input id="RightThigh" type="number"></li>
  <li>Left Calf <input id="LeftCalf" type="number"></li>
  <li>Right Calf <input id="RightCalf" type="number"></li>
</ul>
`;
