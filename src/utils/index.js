export const extractDate = date => date.toISOString().substr(0, 10);

export const getYouTubeThumbnail = url =>
  `https://img.youtube.com/vi/${url.slice(30, 41)}/default.jpg`;

export const getPictureThumbnail = str =>
  `https://apod.nasa.gov/apod/calendar/S_${str.slice(2, 4)}${str.slice(
    5,
    7
  )}${str.slice(8)}.jpg`;

export const getMonth = date => date.slice(5, 7) - 1;
export const getYear = date => date.slice(0, 4);
//"https://www.youtube.com/embed/iRL268cXaqk?rel=0"
//2019-01-07
//S_190111

//"https://player.vimeo.com/video/284290238?portrait=0"
//"//player.vimeo.com/video/108650530?title=0&byline=0&portrait=0&badge=0&color=ffffff"