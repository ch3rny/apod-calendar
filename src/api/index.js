import axios from 'axios';

const key = "eqChXIA7leBtsPcJVvOBVq0v4QkE3C8jXki9Pdvl";
export const getMonthlyApod = (startDate, endDate) => axios
  .get(
    `https://api.nasa.gov/planetary/apod?api_key=${key}&start_date=${startDate}&end_date=${endDate}`
  )

export const getDailyApod = (date) => axios.get(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`)