// html elements
const bodyEl = document.body;
const linkEls = document.getElementsByTagName("a");
const lightDarkToggle = document.querySelector("#light-dark-mode-toggle");

// setup
let isLightMode = false;
let isLightModeFromStorage = JSON.parse(localStorage.getItem("isLightMode"));
if (isLightModeFromStorage != null && isLightModeFromStorage) {
  toggleLightDarkMode();
}

// listen for click
lightDarkToggle.addEventListener("click", () => toggleLightDarkMode());

// function definition
function toggleLightDarkMode() {
  bodyEl.classList.toggle("light-mode");
  Array.prototype.forEach.call(linkEls, (link) =>
    link.classList.toggle("light-mode")
  );

  isLightMode = !isLightMode;
  localStorage.setItem("isLightMode", JSON.stringify(isLightMode));
}
