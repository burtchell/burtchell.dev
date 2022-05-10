// html elements
const bodyEl = document.body;
const linkEls = document.getElementsByTagName("a");
const darkModeToggleBtn = document.querySelector("#dark-mode-toggle");

// setup
let isDarkMode = true;
let isDarkModeFromStorage = JSON.parse(localStorage.getItem("isDarkMode"));
if (isDarkModeFromStorage != null && !isDarkModeFromStorage) {
  toggleDarkMode();
}

// listen for click
darkModeToggleBtn.addEventListener("click", function () {
  toggleDarkMode();
});

// function definition
function toggleDarkMode() {
  bodyEl.classList.toggle("dark-mode");
  Array.prototype.forEach.call(linkEls, function (link) {
    link.classList.toggle("dark-mode");
  });

  isDarkMode = !isDarkMode;
  localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
}
