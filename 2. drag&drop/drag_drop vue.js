Vue.createApp({
  data: () => ({
    title: "Manage your tasks",
    placeholder: "New task",
    inputValue: "",
    
    board: {
      "To do": ["Task 1", "Vue", "Task 2"],
      "In Progress": ["Wurst"],
      "Review": [],
      "Done": []
    },
  }),
  methods: {
    longestLane(){
      let longest = 0
      // for (let i = 0; i <= this.board.length; i++) {
      for (let i of Object.keys(this.board)) {
        longest = this.board[i].length > longest ? this.board[i].length : longest
      }
      return longest
    },
    // add&remove task
    addTask(){
      if (this.inputValue !== "") {
        this.board[0].push(this.inputValue) // py append
      this.inputValue = "" // to clear input field
      }
    },
    removeTask(index) {
      this.board[0].splice(index, 1) // to delete 1 el-t with index
    },

    // drag&drop: task
    dragStart(event, colName, rowIndex) {
      let j = JSON.stringify({colName, rowIndex})
      event.dataTransfer.setData('text/plain', j) // saves task.id in API
      event.target.classList.add('hold') // our el-t dissapears, thats why we need delay
      setTimeout(() => event.target.classList.add('hide'), 0) // callback func
      // el-t dissapears only in to-do col
    },
    dragEnd(event) {
      event.target.classList.remove('hold', 'hide') // or ->
      // event.target.className = "item"
    },

    // drag&drop: placeholder
    dragOver(event) { 
      event.preventDefault() // el-t doesn't come back in to-do
    },
    dragEnter(event) {
      event.target.classList.add('hovered')
    }, 
    dragLeave(event) {
      event.target.classList.remove('hovered')
    },
    dragDrop(event, colName, rowIndex) {
      event.target.classList.remove('hovered')

      // get the draggable element
      const j = JSON.parse(event.dataTransfer.getData('text/plain')); // holt task.id aus API raus
      console.log("salamipizza", j, colName, rowIndex)
      
      let task = this.board[j.colName][j.rowIndex]
      this.board[j.colName].splice(j.rowIndex, 1)
      this.board[colName].splice(rowIndex, 0, task)
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


