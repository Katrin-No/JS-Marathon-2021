const App = {
  data() {
    return {
      title: "Notizenliste",
      placeholder: "Tipp Notizentitel",
      inputValue: "Neue Notiz",
      notes: ["1. Notiz", "2.Notiz"] // will keep our notes 
    }
  },
  methods: {
    inputTitle(event){ // we will become native event
      console.log("inputChangeHandler", event.target.value) 
        // wil show how many times func was called + what we typed
      this.inputValue = event.target.value // this - keyword to call data
        // change value to what we typed in input field
    },
    addNote(){
      this.notes.push(this.inputValue) // py append
      this.inputValue = "" // to clear input field
    },
    inputKeypress(event){
      // if (event.key === "Enter"()
    }
  }
}


Vue.createApp(App).mount('#app') // connect with html