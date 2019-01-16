<template>
  <div class="content">
    <!-- <h1>This is an about pag of {{date}}</h1> -->
    <loader v-if="loading"/>
    <div v-else>
      <div class="image" v-if="apod.media_type=='image'">
        <a :href="apod.hdurl">
          <img :src="apod.url" :alt="apod.title">
        </a>
      </div>
      <div class="video" v-else>
        <div class="adaptive-wrap">
          <iframe :src="apod.url" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
      <div class="title">{{apod.title}}</div>
      <div class="explanation">{{apod.explanation}}</div>
    </div>
  </div>
</template>
<script>
import { getDailyApod } from "@/api";
import Loader from "@/components/Loader.vue";
export default {
  components: {
    Loader
  },
  data() {
    return {
      apod: {},
      loading: true
    };
  },
  computed: {
    date() {
      return this.$route.params.date;
    }
  },
  watch: {
    // эта функция запускается при любом изменении даты
    date: function() {
      this.loading = true;
      getDailyApod(this.date).then(res => {
        this.apod = res.data;
        this.loading = false;
      });
    }
  },
  mounted() {
    getDailyApod(this.date).then(res => {
      this.apod = res.data;
      this.loading = false;
    });
  }
};
</script>
<style lang="scss" scoped>
.adaptive-wrap {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.video {
  width: 95%;
  max-width: 800px;
  max-height: 480px;
  margin: 10px auto;
}
.image {
  margin: 10px auto;
  img {
    width: 95%;
    height: 40vh;
    object-fit: contain;
  }
}
.content {
  height: 100%;
}
.title {
  margin: 0 auto;
  font-size: 24px;
  font-weight: 700;
  width: 95%;
}
.explanation {
  font-family: "Courier New", Courier, monospace;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 400;
  width: 95%;
  text-align: justify;
}
</style>




