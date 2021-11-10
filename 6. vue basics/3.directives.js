Vue.createApp({
  // data() {
  //   return {}
  // } or
  data: () => ({
    title: "Have a nice day!",
    myHtml: "<h2>Be positive!</h2>",
    person: {
      firstName: "Katrin",
      lastName: "N",
      emoji: "🐼"
    },
    items: [1, 2, 3] // 1:47:55
  }),
  methods: {}
}).mount('#app')