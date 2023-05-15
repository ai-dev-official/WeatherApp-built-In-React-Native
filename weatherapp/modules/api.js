export const API_KEY = 'c7f71a08081d47819df200210230805';
export const API_BASE_URL = 'http://api.weatherapi.com/v1';
export const WEATHER_ICON_NIGHT =
  'https://cdn.weatherapi.com/weather/64x64/night';
export const WEATHER_ICON_DAY = 'https://cdn.weatherapi.com/weather/64x64/day';

export const fetchWeatherData = async location => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/current.json?key=${API_KEY}&q=${location}&aqi=no`,
    );
    const data = await response.json();
    return data; // return current weather data
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchForecastData = async location => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&aqi=no`,
    );
    const data = await response.json();
    return data; // return current weather data
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export let weatherIconUrl = '';
export let conditionCode = '';
export let forecastData = [];
export let locationName = '';

export const updateWeatherInfo = weatherData => {
  if (weatherData && weatherData.current) {
    weatherIconUrl = `https:${weatherData.current.condition.icon}`;
    conditionCode = weatherData.current.condition.code;
  }

  if (weatherData && weatherData.forecast && weatherData.forecast.forecastday) {
    forecastData = weatherData.forecast.forecastday;
  }

  if (weatherData && weatherData.location) {
    locationName = weatherData.location.name;
  }
};

// Call the updateWeatherInfo function with weatherData to update the variables

export const LocationName = {
  sunny: 'Istanbul',
  cloudy: 'Toronto',
  rainy: 'My Location',
  stormy: 'London',
  snowy: 'Nuuk',
};

export const backgroundStyles = {
  Clear: {backgroundColor: '#f48d25'},
  Sunny: {backgroundColor: '#f48d25'},
  Cloudy: {backgroundColor: '#282168'},
  Rainy: {backgroundColor: '#41536e'},
  Stormy: {backgroundColor: '#ea4c89'},
  Snowy: {backgroundColor: '#2e76dc'},
  Overcast: {backgroundColor: '#f48d25'},
  Foggy: {backgroundColor: '#282168'},
  Drizzly: {backgroundColor: '#ea4c89'},
  Thundry: {backgroundColor: '#2e76dc'},
  'Light rain': {backgroundColor: '#41536e'},
  'Patchy rain': {backgroundColor: '#41536e'},
  'Light rain shower': {backgroundColor: '#41536e'},
  'Patchy rain possible': {backgroundColor: '#282168'},
  'Partly cloudy': {backgroundColor: '#282168'},
  'Patchy light rain with thunder': {backgroundColor: '#ea4c89'},
  'Moderate or heavy rain with thunder': {backgroundColor: '#ea4c89'}
};

export const backGrounds = {
  Clear: {backgroundColor: '#f48d25'},
  Sunny: {backgroundColor: '#f48d25'},
  Cloudy: {backgroundColor: '#282168'},
  Rainy: {backgroundColor: '#41536e'},
  Stormy: {backgroundColor: '#ea4c89'},
  Snowy: {backgroundColor: '#2e76dc'},
  Overcast: {backgroundColor: '#f48d25'},
  Foggy: {backgroundColor: '#282168'},
  Drizzly: {backgroundColor: '#ea4c89'},
  Thundry: {backgroundColor: '#2e76dc'},
  'Light rain': {backgroundColor: '#41536e'},
  'Patchy rain': {backgroundColor: '#41536e'},
  'Light rain shower': {backgroundColor: '#41536e'},
  'Patchy rain possible': {backgroundColor: '#282168'},
  'Partly cloudy': {backgroundColor: '#282168'},
  'Moderate or heavy rain with thunder': {backgroundColor: '#ea4c89'},
  'Patchy light rain with thunder': {backgroundColor: '#ea4c89'},
};

export const imageStyles = {
  Clear: require('../assets/a4.webp'),
  Sunny: require('../assets/a4.webp'),
  Partly : require('../assets/a7.webp'),
  Cloudy: require('../assets/a5.webp'),
  Overcast: require('../assets/a5.webp'),
  Foggy: require('../assets/a7.webp'),
  Rainy: require('../assets/a3.webp'),
  Snowy: require('../assets/a2.webp'),
  Drizzly: require('../assets/a1.webp'),
  Thundery: require('../assets/a6.webp'),
  Stormy: require('../assets/a9.webp'),
  'Light rain': require('../assets/a3.webp'),
  'Patchy rain': require('../assets/a3.webp'),
  'Light rain shower': require('../assets/a3.webp'),
  'Patchy rain possible': require('../assets/a3.webp'),
  'Partly cloudy': require('../assets/a5.webp'),
  'Patchy light rain with thunder': require('../assets/a6.webp'),
  'Moderate or heavy rain with thunder': require('../assets/a6.webp'),
};

export const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const getNowWeather = weatherData => {
  if (weatherData) {
    const {condition} = weatherData.current;
    let nowWeather = '';
    switch (condition.code) {
      case 1000:
        nowWeather = 'sunny';
        break;
      case 1003:
        nowWeather = 'partly-cloudy';
        break;
      case 1006:
      case 1009:
        nowWeather = 'cloudy';
        break;
      case 1030:
      case 1135:
        nowWeather = 'foggy';
        break;
      case 1063:
      case 1180:
      case 1183:
      case 1186:
        nowWeather = 'rainy';
        break;
      case 1066:
      case 1114:
      case 1210:
      case 1213:
      case 1216:
      case 1219:
      case 1222:
      case 1225:
        nowWeather = 'snowy';
        break;
      case 1240:
      case 1243:
        nowWeather = 'drizzly';
        break;
      case 1273:
      case 1276:
      case 1279:
      case 1282:
        nowWeather = 'thundery';
        break;
      default:
        nowWeather = 'stormy';
        break;
    }
    return nowWeather;
  }
  return '';
};

export const getWeatherCode = code => {
  let nowWeather = '';
  switch (code) {
    case 1000:
      nowWeather = 'sunny';
      break;
    case 1003:
      nowWeather = 'partly-cloudy';
      break;
    case 1006:
    case 1009:
      nowWeather = 'cloudy';
      break;
    case 1030:
    case 1135:
      nowWeather = 'foggy';
      break;
    case 1063:
    case 1180:
    case 1183:
    case 1186:
      nowWeather = 'rainy';
      break;
    case 1066:
    case 1114:
    case 1210:
    case 1213:
    case 1216:
    case 1219:
    case 1222:
    case 1225:
      nowWeather = 'snowy';
      break;
    case 1240:
    case 1243:
      nowWeather = 'drizzly';
      break;
    case 1273:
    case 1276:
    case 1279:
    case 1282:
      nowWeather = 'thundery';
      break;
    default:
      nowWeather = 'stormy';
      break;
  }
  return nowWeather;
};

// export const get24HourForecast = async (latitude, longitude, apiKey) => {
//   apiKey = API_KEY;
//   const url = `${API_BASE_URL}/forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=1&aqi=no&alerts=no`;
//   const response = await fetch(url);
//   const data = await response.json();
//   const forecastData = data.forecast.forecastday[0].hour;
//   const forecastAt5pm = forecastData.find(
//     hour => hour.time.slice(11, 13) === '17',
//   );
//   const forecastAt6pm = forecastData.find(
//     hour => hour.time.slice(11, 13) === '18',
//   );
//   const forecastAt7pm = forecastData.find(
//     hour => hour.time.slice(11, 13) === '19',
//   );
//   const forecastAt8pm = forecastData.find(
//     hour => hour.time.slice(11, 13) === '20',
//   );
//   const forecastAt9pm = forecastData.find(
//     hour => hour.time.slice(11, 13) === '21',
//   );
//   const iconFor5pm = forecastAt5pm.condition.icon;
//   const iconFor6pm = forecastAt6pm.condition.icon;
//   const iconFor7pm = forecastAt7pm.condition.icon;
//   const iconFor8pm = forecastAt8pm.condition.icon;
//   const iconFor9pm = forecastAt9pm.condition.icon;
//   return {
//     forecastAt5pm,
//     forecastAt6pm,
//     forecastAt7pm,
//     forecastAt8pm,
//     forecastAt9pm,
//     iconFor5pm,
//     iconFor6pm,
//     iconFor7pm,
//     iconFor8pm,
//     iconFor9pm,
//   };
// };

export const weatherCondition = conditionCode => {
  switch (conditionCode) {
    case 1000:
      return 'sunny';
    case 1003:
      return 'cloudy';
    case 1063:
    case 1180:
    case 1183:
    case 1186:
      return 'rainy';
    case 1066:
    case 1114:
    case 1210:
    case 1213:
    case 1216:
    case 1219:
    case 1222:
    case 1225:
      return 'snowy';
    default:
      return 'cloudy';
  }
};

export const getClosestMatch = conditionCode => {
  switch (conditionCode) {
    case 122:
    case 113:
      return 'sunny';
    case 116:
      return 'partly-cloudy';
    case 119:
    case 122:
      return 'cloudy';
    case 143:
      return 'foggy';
    case 176:
      return 'rainy';
    case 179:
    case 182:
    case 185:
      return 'snowy';
    case 200:
    case 386:
    case 389:
    case 392:
    case 395:
      return 'thundery';
    default:
      // If no exact match, return the closest match based on condition code
      if (conditionCode >= 113 && conditionCode < 116) {
        return 'sunny';
      } else if (conditionCode >= 116 && conditionCode < 119) {
        return 'partly-cloudy';
      } else if (conditionCode >= 119 && conditionCode < 122) {
        return 'cloudy';
      } else if (conditionCode >= 122 && conditionCode < 143) {
        return 'foggy';
      } else if (conditionCode >= 143 && conditionCode < 176) {
        return 'rainy';
      } else if (conditionCode >= 176 && conditionCode < 179) {
        return 'snowy';
      } else if (conditionCode >= 179 && conditionCode < 200) {
        return 'thundery';
      } else {
        return 'stormy';
      }
  }
};

export const now = new Date();
export const hours = now.getHours();
export const minutes = now.getMinutes();
export const period = hours >= 12 ? 'PM' : 'AM';

export const getCurrentTime = () => {
  now = new Date();
  hours = now.getHours();
  minutes = now.getMinutes();
  period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  return `${formattedHours.toString().padStart(2, '0')}.${minutes
    .toString()
    .padStart(2, '0')} ${period}`;
};

export function formatTime(time) {
  const currentHour = new Date().getHours();
  const hour = new Date(time).getHours();
  const period = hour >= 12 ? 'PM' : 'AM';

  if (hour === currentHour) {
    return 'NOW';
  } else {
    const formattedHour = (hour % 12 || 12).toString().padStart(2, '0');
    const formattedTime = `${formattedHour}.00 ${period}`;
    return formattedTime;
  }
}

export const currentHour = new Date().getHours();
export const forecastHours = Array.from(
  {length: 23},
  (_, index) => currentHour + index + 1,
);

export function getWeatherIconNight(iconCode) {
  // Assuming the API provides the icon URL directly
  return `WEATHER_ICON_NIGHT/${iconCode}.png`;
}

export function getWeatherIconDay(iconCode) {
  // Assuming the API provides the icon URL directly
  return `WEATHER_ICON_DAY/${iconCode}.png`;
}
