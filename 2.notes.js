const App = {
  data() {
    return {
      title: "Notizenliste",
      placeholder: "Tipp Notizentitel",
      inputValue: "Neue Notiz",
      notes: ["Notiz", "Notiz"] // will keep our notes 
    }
  },
  methods: {
    addNote(){
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue) // py append
      this.inputValue = "" // to clear input field
      }
    },
    makesUpper(item) {
      return item.toUpperCase()
    },
    removeNote(index) {
      this.notes.splice(index, 1) // to delete 1 el-t with index
    }
  },
  computed: { // vi4eslyaemie // getter setter
    doubleCount(){ // is a getter
      return this.notes.length * 2 
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
}


Vue.createApp(App).mount('#app') // connect with html


/* 
1.
  inputKeypress(event){
    if (event.key === "Enter") {
      this.addNote()
    }
    v-on:keypress="inputKeypress" in view
    }
    or just v-on:keypress.enter="addNote"

2.
  doubleCount(){
    console.log("doubleCount")
    return notes.length * 2 
  }
  will be called so many times, how many chars you tipped
  -> for more productivity we use 'computed:' 

3.
  inputTitle(event){ // we will become native event
    console.log("inputTitle", event.target.value) 
      // wil show how many times func was called + what we typed
    this.inputValue = event.target.value // this - keyword to call data
      // change value to what we typed in input field
  }, 
  v-bind:value="inputValue"
  v-on:input="inputTitle"

  // or just one string in view:
  v-model="inputValue"
    
*/