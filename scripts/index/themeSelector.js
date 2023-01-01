//theme change
const themeButton = document.getElementById("themeChange");
const cssTag = document.getElementById("darkModeCSS");

themeButton.addEventListener("click", () => {
  switch (themeButton.innerText) {
    case "☀️":
      themeButton.innerText = "🌚";
      cssTag.href = "";
      break;
    case "🌚":
      themeButton.innerText = "☀️";
      cssTag.href = "./styles/darkModeStyles.css";
      break;
    //all these bottom cases have a 0 width unicode char adjacent to them for all the redirect cases
    case "🌚​":
      themeButton.innerText = "☀️​";
      cssTag.href = "../styles/darkModeStyles.css";
      break;
    case "☀️​":
      themeButton.innerText = "🌚​";
      cssTag.href = "";
      break;
  }
});
