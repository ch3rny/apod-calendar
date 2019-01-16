export const extractDate = (date) => (date.toISOString().substr(0, 10));

export const getYouTubeThumbnail = (url) => (
    `https://img.youtube.com/vi/${url.slice(30, 41)}/default.jpg`
)
export const getPictureThumbnail = (str) => (
    //console.log(str.slice(2, 3))
    `https://apod.nasa.gov/apod/calendar/S_${str.slice(2, 4)}${str.slice(5, 7)}${str.slice(8)}.jpg`
)
//"https://www.youtube.com/embed/iRL268cXaqk?rel=0"
//2019-01-07
//S_190111