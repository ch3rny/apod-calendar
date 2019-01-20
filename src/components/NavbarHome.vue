<template>
  <div>
    <button @click="setPreviousMonth()">&lsaquo;</button>
    <span>{{monthNames[month]}} {{year}}</span>
    <button :disabled="disabled" @click="setNextMonth()">&rsaquo;</button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    };
  },
  computed: {
    disabled() {
      return (
        this.month == new Date().getMonth() &&
        this.year == new Date().getFullYear()
      );
    }
  },
  methods: {
    setPreviousMonth() {
      if (this.month > 0) {
        this.month = this.month - 1;
      } else {
        this.month = 11;
        this.year = this.year - 1;
      }
      this.$eventHub.$emit("changeDate", this.month, this.year);
    },
    setNextMonth() {
      if (this.month < 11) {
        this.month = this.month + 1;
      } else {
        this.month = 0;
        this.year = this.year + 1;
      }
      this.$eventHub.$emit("changeDate", this.month, this.year);
    }
  },
  created() {
    if (this.$route.query.year) {
      this.year = this.$route.query.year;
    }
    if (this.$route.query.month) {
      this.month = this.$route.query.month;
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
