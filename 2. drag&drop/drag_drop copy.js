Vue.createApp({
  data: () => ({
    title: "Manage your tasks",
    placeholder: "New task",
    inputValue: "",
    tasks: ["Task", "Vue"]
  }),
  methods: {
    // add&remove task
    addTask(){
      if (this.inputValue !== "") {
        this.tasks.push(this.inputValue) // py append
      this.inputValue = "" // to clear input field
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1) // to delete 1 el-t with index
    },

    // drag&drop: task
    dragStart(event) {
      event.dataTransfer.setData('text/plain', event.target.id) // saves task.id in API
      event.target.classList.add('hold') // our el-t dissapears, thats why we need delay
      setTimeout(() => event.target.classList.add('hide'), 0) // callback func
      // el-t dissapears only in to-do col
    },
    dragEnd(event) {
      console.log ("drag end", event.target)
      event.target.classList.remove('hold', 'hide') // or ->
      // event.target.className = "item"
    },

    // drag&drop: placeholder
    dragOver(event) { 
      event.preventDefault() // el-t doesn't come back in to-do
    },
    dragEnter(event) {
      event.target.classList.add('hovered')
      console.log ("drag enter", event.target)
    }, 
    dragLeave(event) {
      event.target.classList.remove('hovered')
    },
    dragDrop(event) {
      event.target.classList.remove('hovered')

      // get the draggable element
      const id = event.dataTransfer.getData('text/plain'); // holt task.id aus API raus
      const draggable = document.getElementById(id);

      event.target.append(draggable) // el-t stays in new placeholder
      // event.target.append(document.querySelector(".hold")) // el-t stays in new placeholder      
    }
  },
  watch: { // we can monitor changes in variables
    inputValue(value) {
      if (value.length > 10) { // validation
        this.inputValue = ""
      }
      console.log("inputValue changed", value)
    }
  }
}).mount('#app')


