import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {fetchWeatherData, fetchForecastData} from '../modules/api';

const TomorrowScreen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const location = 'London';

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await fetchWeatherData(location);
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getWeatherData();
  }, [location]);

  useEffect(() => {
    const getForecastData = async () => {
      try {
        const data = await fetchForecastData(location);
        setForecastData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getForecastData();
  }, [location]);

  let weatherIconUrl = '';
  if (weatherData && weatherData.current.condition) {
    weatherIconUrl = `https:${weatherData.current.condition.icon}`;
  }
  const ImageUrl = '//cdn.weatherapi.com/v4/images/weatherapi_logo.png';
  
  return (
    <View style={styles.container}>
      {weatherData && weatherData.current && (
        <View>
          <Text style={styles.text}>Location: {weatherData.location.name}</Text>
          <Text style={styles.text}>Region: {weatherData.location.region}</Text>
          <Text style={styles.text}>
            Country: {weatherData.location.country}
          </Text>
          <Text style={styles.text}>Latitude: {weatherData.location.lat}</Text>
          <Text style={styles.text}>Longitude: {weatherData.location.lon}</Text>
          <Text style={styles.text}>
            Timezone ID: {weatherData.location.tz_id}
          </Text>
          <Text style={styles.text}>
            Local Time: {weatherData.location.localtime}
          </Text>
        </View>
      )}
      {weatherData && weatherData.current && (
        <View>
          <Text style={styles.text}>
            Temperature (Celsius): {weatherData.current.temp_c} C
          </Text>
          <Text style={styles.text}>
            Temperature (Fahrenheit): {weatherData.current.temp_f} F
          </Text>
          <Text style={styles.text}>
            Last Updated: {weatherData.current.last_updated}
          </Text>
          <Text style={styles.text}>
            Condition: {weatherData.current.condition.text}
          </Text>
          <Text style={styles.text}>
            Wind Speed (mph): {weatherData.current.wind_mph} mph
          </Text>
          <Text style={styles.text}>
            Wind Speed (kph): {weatherData.current.wind_kph} kph
          </Text>
          <Text style={styles.text}>
            Wind Degree: {weatherData.current.wind_degree}
          </Text>
          <Text style={styles.text}>
            Wind Direction: {weatherData.current.wind_dir}
          </Text>
          <Text style={styles.text}>
            Pressure (mb): {weatherData.current.pressure_mb} mb
          </Text>
          <Text style={styles.text}>
            Pressure (in): {weatherData.current.pressure_in} in
          </Text>
          <Text style={styles.text}>
            Precipitation (mm): {weatherData.current.precip_mm} mm
          </Text>
          <Text style={styles.text}>
            Precipitation (in): {weatherData.current.precip_in} in
          </Text>
          <Text style={styles.text}>
            Humidity: {weatherData.current.humidity}%
          </Text>
          <Text style={styles.text}>Cloud: {weatherData.current.cloud}%</Text>
          <Text style={styles.text}>
            Feels Like (Celsius): {weatherData.current.feelslike_c} C
          </Text>
          <Text style={styles.text}>
            Feels Like (Fahrenheit): {weatherData.current.feelslike_f} F
          </Text>
          <Text style={styles.text}>
            Visibility (km): {weatherData.current.vis_km} km
          </Text>
          <Text style={styles.text}>
            Visibility (miles): {weatherData.current.vis_miles} miles
          </Text>
          <Text style={styles.text}>UV Index: {weatherData.current.uv}</Text>
          <Text style={styles.text}>
            Gust Speed (mph): {weatherData.current.gust_mph} mph
          </Text>
          <Text style={styles.text}>
            Gust Speed (kph): {weatherData.current.gust_kph} kph
          </Text>
          <Text style={styles.text}>
            Country: {weatherData.location.country}
          </Text>
          <Text style={styles.text}>
            Time: {weatherData.location.localtime}
          </Text>
          
         <Image source={{ uri: `https:${weatherData.current.condition.icon}` }} style={{ width: 24, height: 24 }} />
         {forecastData && forecastData.forecast && (
         <Image source={{ uri: `https:${forecastData.forecast.forecastday[0]?.hour[0]?.condition.icon}` }} style={{ width: 24, height: 24 }} />

         )}
        </View>
      )}
      {forecastData && forecastData.forecast && (
       <Text>Forecast Temp: {forecastData.forecast.forecastday[0]?.hour[0]?.temp_c}
        </Text>  )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    margin: 50,
  },
  text: {
    fontSize: 16,
  },
});
export default TomorrowScreen;
