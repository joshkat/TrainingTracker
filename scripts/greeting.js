//set greeting @ header
const d = new Date();
let hour = d.getHours();
const welcomeTag = document.getElementById("welcome");

if (hour < 12 && hour >= 0) {
  welcomeTag.innerText = "Good Morning!";
} else if (hour >= 12 && hour < 17) {
  welcomeTag.innerText = "Good Afternoon!";
} else {
  welcomeTag.innerText = "Good Evening!";
}
