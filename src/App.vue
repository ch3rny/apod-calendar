<template>
  <div id="app">
    <div id="nav">
      <router-view name="navbar"/>
    </div>
    <router-view/>
  </div>
</template>
<script>
//
window.onresize = function() {
  document.body.height = window.innerHeight;
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};
window.onresize();
//

export default {
  name: "App"
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700&subset=cyrillic");

body {
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: "Open Sans", sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
}
#nav {
  height: 64px;
  //background-color: #845ec2;
  background-color: #af8cff;
  line-height: 64px;
  font-size: 24px;

  a {
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
