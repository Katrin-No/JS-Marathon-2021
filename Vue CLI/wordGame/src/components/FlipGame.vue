<template lang="pug">
  .field
    .row(v-for="row in flipper")
      .square(v-for="icon in row")
        img(:src="icon.src" @click="flip")
        .text.hide(@click="flap" v-html="icon.text")
    
</template>

<script>
export default {
  name: "FlipGame",
  data: () => ({
    flipper: [
      [
        {
          src: require("@/assets/bericht.jpg"),
          text: "<p></p><p>Der Wetterbericht</p>",
        },
        {
          src: require("@/assets/sonne.jpg"),
          text: "<p></p><p>Es ist sonnig.</p><p>Die Sonne scheint.</p>",
        },
        {
          src: require("@/assets/wolken.jpg"),
          text: "<p></p><p>Es ist bewölkt.<p/>",
        },
        {
          src: require("@/assets/gewitter.jpg"),
          text: "<p></p><p>Das Gewitter:</p><p>Es blitzt</p><p> und donnert.</p>",
        },
        {
          src: require("@/assets/nebel.jpg"),
          text: "<p></p><p>Es ist neblig.</p>",
        },
      ],
      [
        {
          src: require("@/assets/wind.jpg"),
          text: "<p></p><p>Es ist windig.</p>",
        },
        {
          src: require("@/assets/regen.jpg"),
          text: "<p></p><p>Es regnet.</p>",
        },
        {
          src: require("@/assets/rschirm.jpg"),
          text: "<p></p><p>Der Regenschirm</p>",
        },
        {
          src: require("@/assets/rbogen.jpg"),
          text: "<p></p><p>Der Regenbogen</p>",
        },
        {
          src: require("@/assets/schnee.jpg"),
          text: "<p></p><p>Es schneit.</p>",
        },
      ],
      [
        {
          src: require("@/assets/mond.jpg"),
          text: "<p></p><p>Der Mond scheint.</p>",
        },
        {
          src: require("@/assets/warm.jpg"),
          text: "<p></p><p>Es ist warm.</p>",
        },
        {
          src: require("@/assets/kalt.jpg"),
          text: "<p></p><p>Es ist kalt.</p>",
        },
      ],
    ],
  }),
  methods: {
    flip() {
      console.log("flip", event.target);
      event.target.classList.add("hide");
      event.target.nextSibling.classList.add("show");
    },
    flap() {
      console.log("flap", event.target);
      event.target.classList.remove("show");
      event.target.previousElementSibling.classList.remove("hide");
    },
  },
};
</script>

<style scoped>
.field {
  flex-direction: column;
}

.field,
.row {
  display: flex;
  margin-bottom: 0.5rem;
}

img {
  padding: 0 15px;
}

img,
.text,
.square {
  width: 198px;
  height: 168px;
  margin: 0.5rem 0;
}

.hide {
  display: none;
}
.show {
  display: block;
}
</style>
