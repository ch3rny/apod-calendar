<template>
  <div>
    <button @click="setPreviousDay(date)">&lsaquo;</button>
    <span>{{date}}</span>
    <button @click="setNextDay(date)" :disabled="disabled">&rsaquo;</button>
  </div>
</template>


<script>
import { extractDate } from "@/utils";
export default {
  data() {
    return {
      // year: new Date().getFullYear(),
      // month: new Date().getMonth()
    };
  },
  computed: {
    date() {
      return this.$route.params.date;
    },
    disabled() {
      return this.$route.params.date == extractDate(new Date());
    }
  },
  methods: {
    setPreviousDay(date) {
      let day = new Date(date);
      day.setDate(day.getDate() - 1);
      let prevDay = extractDate(day);
      this.$router.push({
        name: "about",
        params: { date: prevDay }
      });
    },
    setNextDay(date) {
      let day = new Date(date);
      day.setDate(day.getDate() + 1);
      let nextDay = extractDate(day);
      this.$router.push({
        name: "about",
        params: { date: nextDay }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
button {
  display: inline-block;
  height: 48px;
  border: none;
  background-color: transparent;
  font-size: 32px;
}
</style>
