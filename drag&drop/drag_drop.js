const item = document.querySelector(".item")
const placeholders = document.querySelectorAll(".placeholder")

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

for (p of placeholders) {
  // console.log(p)
  p.addEventListener('dragover', dragOver) // when el-t is over placeholder
  p.addEventListener('dragenter', dragEnter) // when el-t is in placeholders area
  p.addEventListener('dragleave', dragLeave) // when el-t is out placeholders area
  p.addEventListener('drop', dragDrop) // wann wir el-t losgelassen haben

}

function dragStart(event) {
  console.log ("drag start", event.target)
  event.target.classList.add('hold')
  // our el-t dissapears, thats why we need delay
  setTimeout(() => event.target.classList.add('hide'), 0) // callback func
  // el-t dissapears only in to-do col
 
}

function dragEnd(event) {
  console.log ("drag end", event.target)
  console.log ("drag end")
  event.target.classList.remove('hold', 'hide') // or ->
  // event.target.className = "item"
}

function dragOver(event) { 
  // console.log('over')
  event.preventDefault() // el-t doesn't come back in to-do
}
function dragEnter(event) {
  // console.log('enter')
  event.target.classList.add('hovered')
}
function dragLeave(event) {
  // console.log('leave')
  event.target.classList.remove('hovered')
}
function dragDrop(event) {
  // console.log('drop')
  event.target.classList.remove('hovered')
  event.target.append(item) // el-t stays in new placeholder
}