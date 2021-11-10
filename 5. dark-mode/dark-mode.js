var toggleSwitch = document.querySelector('.toggle-theme input[type="checkbox"]');
var ThemeText = document.querySelector(".text");
var ThemeIcon = document.querySelector(".fas");
var DarkMode = "Darkmode"
var LightMode = "Lightmode"
var currentTheme = "light"

// use Local Storage for keep dark theme after reload
currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    ThemeIcon.classList.toggle("fa-sun")
    ThemeText.innerHTML = LightMode
  }
  else{
    ThemeText.innerHTML = DarkMode
  }
}

// toggle button self
  function switchTheme(event) {
  t = event.target
  ThemeIcon.classList.toggle("fa-sun")
  // if (t.parentNode.parentElement.className.includes("toggle-theme")){
  if (t.checked) {
    document.documentElement.setAttribute('theme', 'dark');
    localStorage.setItem('theme', 'dark');
    ThemeText.innerHTML = LightMode
  }
  else {        
    document.documentElement.setAttribute('theme', 'light');
    localStorage.setItem('theme', 'light');
    ThemeText.innerHTML = DarkMode
  }   
  // }
}
toggleSwitch.addEventListener('change', switchTheme, false);