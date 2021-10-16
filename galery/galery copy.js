Vue.createApp({
  // data() {
  //   return {}
  // } or
  data: () => ({
    title: "🧭 Read this thrilling adventure novels by Jules Verne!",
    slides: [
      {
        name: "20 000 Leagues under the sea (1869)",
        style: "background-image: url(verne-20000.png);"
      }, {
        name: "The misterious island (1875)",
        style: "background-image: url(mi.jpg);"
      }, {
        name: "Around the world in 80 days (1873)",
        style: "background-image: url(aw2.jpg);"
      },{
        name: "From the earth to the moon (1865)",
        style: "background-image: url(em.jpg);"
      },{
        name: "All around the moon (1870)",
        style: "background-image: url(am.jpeg);"
      },{
        name:"Five weeks in a balloon (1863)",
        style: "background-image: url(fw.jpg);"
      }
    ]
  }),
  methods: {
    // active(index) {
    //   this.slides[index].classList.add(".active")
      // this.slides.forEach((slide) => {
        //   slide.classList.remove("active")
        //})
      
    // }
  }
}).mount('#app')

// https://jsfiddle.net/katrin_n/4mh8youc/15/

// slidesPlugin(activeSlide) {
//   const slides = document.querySelectorAll(".slide")
//   slides[activeslide].classList.add(".active")

//   for (const slide of slides) {
//     slide.addEventListener("click", () => {
//       removeActiveClasses()
//       slide.classList.add("active")
//     })
//   }

//   function removeActiveClasses() {
//     slides.forEach((slide) => {
//       slide.classList.remove("active")
//     })
//   }
// }
// slidesPlugin(2)
