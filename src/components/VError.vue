<template>
  <div class="flex">
    <div class="wrap">
      <div class="title">Oh No! Space Invaders
        <br>broke NASA server
      </div>
      <div class="invaders_wrap">
        <div class="invaders" id="line1">👾👾👾👾👾👾</div>
        <div class="invaders" id="line2">👾👾👾👾👾</div>
        <div class="invaders" id="line3">👾👾👾👾👾👾</div>
        <div class="invaders" id="line4">👾👾👾👾👾</div>
        <div class="invaders" id="line5">👾👾👾👾👾👾</div>
      </div>
      <div class="code">{{code}}</div>
      <div class="message">{{message}}</div>
    </div>
  </div>
  <!-- 🛰️ -->
</template>

<script>
export default {
  props: {
    code: Number,
    message: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped >
.wrap {
  margin-top: -96px;
}
.invaders_wrap {
  width: 256px;
  font-size: 24px;
  margin: 10px auto;
  padding: 20px;
}
.flex {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #2f2b4b;
  color: white;
}
.invaders {
  position: relative;
  animation: invaders 4s linear infinite;
}
.title {
  font-size: 24px;
  font-weight: 400;
}
.code,
.message {
  font-size: 18px;
  font-weight: 400;
}

@keyframes invaders {
  25% {
    left: 12px;
    top: 12px;
  }

  50%,
  0%,
  100% {
    left: 0px;
    top: 0px;
  }
  75% {
    left: -12px;
    top: 12px;
  }
}
</style>

