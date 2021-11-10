const App = {
  data() {
    return {
      mode: "Darkmode",
      themeIcon: "fa-moon"
    } 
  },
  methods: {
    switchTheme(event) {
      this.themeIcon = "fa-sun"
      if (event.target.checked) {
        document.documentElement.setAttribute('theme', 'dark');
        localStorage.setItem('theme', 'dark');
        this.mode = "LightMode"
      }
      else {        
        document.documentElement.setAttribute('theme', 'light');
        localStorage.setItem('theme', 'light');
        this.mode = "DarkMode"
        this.themeIcon = "fa-moon"
      }
    }
  }
}


Vue.createApp(App).mount('#app')

var toggleSwitch = document.querySelector('.toggle-theme input[type="checkbox"]');
var ThemeText = document.querySelector(".text");
var ThemeIcon = document.querySelector(".fas");
var DarkMode = "Darkmode"
var LightMode = "Lightmode"
var currentTheme = "light"

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