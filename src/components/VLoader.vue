<template>
  <div class="flex">
    <div class="loader">
      <div class="satellite">🌑</div>
      <div class="earth"></div>
      <div>loading...</div>
    </div>
  </div>
  <!-- 🛰️ -->
</template>

<script>
export default {
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped >
.earth {
  position: relative;
  top: -140px;
  left: -8px;
  width: 64px;
  height: 64px;
  font-size: 64px;
  animation: planet 1.5s linear infinite;
}
.earth::before {
  content: "🌎";
  animation: planet 1.5s linear infinite;
}
.satellite {
  width: 192px;
  height: 192px;
  animation: moon 3s linear infinite;
}
.loader div {
  position: relative;
  margin: 0 auto;
}
.flex {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
@keyframes planet {
  0% {
    content: "🌎";
  }
  33% {
    content: "🌍";
  }
  66% {
    content: "🌏";
  }
}
@keyframes moon {
  100% {
    transform: rotate(360deg);
  }
}
</style>

