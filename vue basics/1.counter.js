const App = { // is an object
  data() {   // this method helps to create data for work with vue 
    return { // in this method we need to return object
      counter: 0 // we create an object key
    }
  },
  methods: {
    decrement() {
      this.counter--
      this.setLocalCounter()
    },
    setLocalCounter() {
      localStorage.counter = this.counter
    }
  },
  mounted() {
    if (localStorage.counter) {
      this.counter = Number(localStorage.counter) 
      // because data in local storage are strings or:
      // this.counter = +localStorage.counter
    }
  }
}


Vue.createApp(App).mount('#app') // connect with html