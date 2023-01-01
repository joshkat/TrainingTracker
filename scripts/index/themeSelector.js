//theme change
const themeButton = document.getElementById("themeChange");
const cssTag = document.getElementById("darkModeCSS");
//default theme is dark

//for index
if (
  localStorage.getItem("currentTheme") == "light" &&
  themeButton.innerText.length == 2
) {
  cssTag.href = "";
  themeButton.innerText = "🌚";
}

//for redirects
if (
  localStorage.getItem("currentTheme") == "light" &&
  themeButton.innerText.length == 3
) {
  cssTag.href = "";
  themeButton.innerText = "🌚​";
}

themeButton.addEventListener("click", () => {
  switch (themeButton.innerText) {
    case "☀️": //dark to light
      themeButton.innerText = "🌚";
      cssTag.href = "";
      localStorage.setItem("currentTheme", "light");
      break;
    case "🌚": //light to dark
      themeButton.innerText = "☀️";
      cssTag.href = "./styles/darkModeStyles.css";
      localStorage.setItem("currentTheme", "dark");
      break;
    //all these bottom cases have a 0 width unicode char adjacent to them for all the redirect cases
    case "🌚​":
      themeButton.innerText = "☀️​";
      cssTag.href = "../styles/darkModeStyles.css";
      localStorage.setItem("currentTheme", "dark");
      break;
    case "☀️​":
      themeButton.innerText = "🌚​";
      cssTag.href = "";
      localStorage.setItem("currentTheme", "light");
      break;
  }
});
