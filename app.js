const App = { // is an object
  data() {   // this method helps to create data for work with vue 
    return { // in this method we need to return object
      counter: 0 // we create an object key
    }
  }
}


Vue.createApp(App).mount('#app') // connect with html