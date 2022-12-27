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
  }
});
