<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Wetter</router-link> |
      <router-link to="/at-home">Im Haus</router-link>
    </div>
    <router-view />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <GameField />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  position: relative;
}

.field {
  width: 100%;
}
</style>
