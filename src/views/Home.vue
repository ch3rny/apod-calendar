<template>
  <div class="content">
    <v-loader v-if="loading"/>
    <v-error
      v-if="error"
      :code="errorResponse.response.data.code"
      :message="errorResponse.response.data.msg"
    />
    <div v-if="!loading && !error" class="calendar">
      <div v-for="day in days" class="day" :key="day">{{day}}</div>
      <!--  -->
      <div
        v-for="(date, index) in dateArray"
        :class="{cell: true, another_month: date.month!=month }"
        :key="index"
        :style="styleObject(index)"
        @click="goToDetails(index)"
      >
        <div class="number">{{date.day}}</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { extractDate, getYouTubeThumbnail, getPictureThumbnail } from "@/utils";
import VLoader from "@/components/VLoader.vue";
import VError from "@/components/VError.vue";
import { getMonthlyApod } from "@/api";
export default {
  name: "home",
  components: {
    VLoader,
    VError
  },
  data() {
    return {
      days: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      dateArray: [],
      nasaData: [],
      loading: true,
      error: false,
      errorResponse: {}
    };
  },
  computed: {},
  methods: {
    styleObject(index) {
      if (this.nasaData[index])
        if (this.nasaData[index].media_type == "image") {
          return {
            "background-image": `url(${this.nasaData[index].thumb})`,
            cursor: "pointer"
          };
        } else {
          return {
            "background-image": `url(${getYouTubeThumbnail(
              this.nasaData[index].url
            )})`,
            cursor: "pointer"
          };
        }
    },
    fillCalendar(year, month) {
      //очищаем календарь
      this.dateArray = [];
      //Узнаем в какой день начинается месяц
      let firstDay = new Date(year, month, 1).getDay() - 1;
      //Оптправляем воскресенье в конец недели
      if (firstDay < 0) {
        firstDay = 6;
      }
      //Узнаем с какого числа заполнять
      let startDate = new Date(year, month, 1, 12);
      startDate.setDate(startDate.getDate() - firstDay);
      //Последнее число в таблице
      let endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + 42);
      //заполняем таблицу днями
      let currentDate = new Date(startDate);
      while (currentDate < endDate) {
        let day = {
          day: currentDate.getDate(),
          month: currentDate.getMonth()
        };
        this.dateArray.push(day);
        currentDate.setDate(currentDate.getDate() + 1);
      }
      //узнаем первую и последнюю дату
      let startDateValue = extractDate(startDate);
      let endDateValue =
        endDate <= new Date() ? extractDate(endDate) : extractDate(new Date());
      //тянем данные по апи
      this.error = false;
      getMonthlyApod(startDateValue, endDateValue)
        .then(res => {
          this.nasaData = res.data.map(item => ({
            ...item,
            thumb: getPictureThumbnail(item.date)
          }));
          this.loading = false;
          // this.nasaData.forEach(item => {
          //   if (item.media_type != "image") {
          //     console.log(item.url);
          //   }
          // });
        })
        .catch(err => {
          this.error = true;
          this.loading = false;
          this.errorResponse = err;
        });
    },
    goToDetails(index) {
      if (this.nasaData[index]) {
        this.$router.push({
          name: "about",
          params: { date: this.nasaData[index].date }
        });
      }
    },
    setDate(month, year) {
      (this.month = month), (this.year = year);
      this.loading = true;
      this.fillCalendar(year, month);
    }
  },
  mounted() {
    //if
    this.fillCalendar(this.year, this.month);
  },
  created() {
    this.$eventHub.$on("changeDate", this.setDate);
    if (this.$route.query.year) {
      this.year = this.$route.query.year;
    }
    if (this.$route.query.month) {
      this.month = this.$route.query.month;
    }
  },

  beforeDestroy() {
    this.$eventHub.$off("changeDate");
  }
};
</script>
<style lang="scss" scoped>
.content {
  height: calc(100% - 64px);
}
.calendar {
  display: grid;
  grid-template-columns: repeat(7, auto);
  grid-template-rows: 30px repeat(6, auto) 1px;
  grid-column-gap: 4px;
  grid-row-gap: 6px;
  height: 100%;
  max-width: 1140px;
  max-height: 800px;
  margin: auto auto;
  width: 100%;
}
.cell {
  border: 1px solid #eaeaea;
  border-radius: 12px;
  background-position: center;
  background-size: cover;
  background-image: url(../assets/thumb.jpg);
}
.day {
  line-height: 30px;
}
.another_month {
  background-color: #eaeaea;
  opacity: 0.33;

  .number {
    color: #aaa;
    background-color: rgba(127, 127, 127, 0.25);
  }
}
.number {
  height: 24px;
  width: 24px;
  color: #fff;
  text-align: center;
  line-height: 24px;
  margin: 2px 0 0 2px;
  border-radius: 50%;
  background-color: rgba(127, 127, 127, 0.25);
}
</style>

