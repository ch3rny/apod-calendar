<template>
  <div class="flex">
    <div class="title">
      This page is
      lost in SPACE
    </div>
    <div class="wrap">
      <div class="moon">🌑</div>
      <div class="sparcles" id="sparcle1">✨</div>
      <div class="sparcles" id="sparcle2">✨</div>
      <div class="sparcles" id="sparcle3">✨</div>
      <div class="sparcles" id="sparcle4">✨</div>
      <div class="sparcles" id="sparcle5">✨</div>
    </div>
    <div class="code">404</div>

    <div class="home_button" :to="about">
      <router-link :to="{ name: 'home' }">🚀 GO HOME</router-link>
    </div>
  </div>
  <!-- 🛰️ -->
</template>

<script>
export default {
  name: "p404"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped >
.flex {
  background-color: #2f2b4b;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.moon {
  height: 192px;
  width: 192px;
  font-size: 142px;
  top: calc(50% - 70px);
  left: calc(50% - 96px);
}
.sparcle {
  font-size: 92px;
}
.wrap div {
  position: absolute;
}
.wrap {
  position: relative;
  width: 60vh;
  height: 50vh;
}
.title,
.code {
  font-size: 24px;
  font-weight: 400;
  color: white;
  margin: 20px;
}
.code {
  font-size: 18px;
}
.home_button {
  font-size: 18px;
  padding: 10px 30px;
  border: 2px white solid;
  border-radius: 25px;
  cursor: pointer;

  a {
    color: white;
    text-decoration: none;
  }
}
.home_button:hover {
  background-color: #fff;
  a {
    color: #2f2b4b;
    text-decoration: none;
  }
}
.sparcles {
  animation: starshine 4s linear alternate infinite;
}
#sparcle1 {
  font-size: 93px;
  animation-delay: 2s;
}
#sparcle2 {
  top: 70%;
  left: 15%;
  font-size: 73px;
  animation-delay: 7s;
}
#sparcle3 {
  top: 20%;
  left: 63%;
  font-size: 63px;
  animation-delay: -4s;
}
#sparcle4 {
  top: 75%;
  left: 73%;
  font-size: 43px;
}
#sparcle5 {
  top: 0%;
  left: 90%;
  font-size: 23px;
  animation-delay: 3.3s;
}
@keyframes starshine {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

