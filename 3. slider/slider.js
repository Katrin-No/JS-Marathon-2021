const up = document.querySelector(".up-button")
const down = document.querySelector(".down-button")

const sideBar = document.querySelector(".sidebar") // divs with text
const mainSlide = document.querySelector(".main-slide") // divs with imgs
const container = document.querySelector(".container") // alles

let activeSlideIndex = 0
const slidesCount = mainSlide.querySelectorAll("div").length

up.addEventListener("click", () => {
  changeSlide("up")
})
down.addEventListener("click", () => {
  changeSlide("down")
})

sideBar.style.top = `-${(slidesCount - 1) * 100}vh` // 100vh = 100% screen
/* because of reverse sequence (1st slide + last text)
   1st slide 0vh, 2nd +100 > 100vh
   0vh 5th slide, 1:4, 2:3, 3:3, 4:2, 5:1 */

function changeSlide(direction) {
  if (direction === "down") {
    activeSlideIndex++
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0
    }
  }else if(direction === "up") {
    activeSlideIndex--
    if (activeSlideIndex <0) {
      activeSlideIndex = slidesCount-1
    }
  }

  const height = container.clientHeight
  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
  sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`
  /* because moving is in two different directions: 
     pictures from top to bottom, text b->top */
}

// https://jsfiddle.net/katrin_n/d2k51cu3/5/