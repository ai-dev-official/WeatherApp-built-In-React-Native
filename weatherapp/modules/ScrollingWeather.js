import React, {useState, useEffect, useRef} from 'react';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';
import {
  fetchWeatherData,
  LocationName,
  backgroundStyles,
  backGrounds,
  imageStyles,
  WEEK_DAYS,
  months,
  days,
  weatherIconUrl,
  conditionCode,
  forecastData,
  locationName,
  updateWeatherInfo,
  weatherConditionCode,
  getClosestMatch,
  fetchForecastData,
  WEATHER_ICON_NIGHT,
  getCurrentTime,
  currentHour,
  forecastHours,
  now,
  hours,
  minutes,
  period,
  formatTime,
  getWeatherIconNight,
  getWeatherIconDay,
} from './api';

const ScrollingWeather = ({forecastData, formatTime, getWeatherIconNight}) => {
  const scrollViewRef = useRef(null);
  const [background, setBackground] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [weatherCondition, setWeatherCondition] = useState('');
  const [weatherTime, setWeatherTime] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('London');

  const scrollToCol = colIndex => {
    const cellWidth = 100; // Adjust this value to match your cell width
    const offset = colIndex * cellWidth;
    scrollViewRef.current.scrollTo({x: offset, animated: true});
  };

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

  return (
    <View style={[styles.tabledown, backGrounds[weatherCondition]]}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollViewContent}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}>
        {forecastData &&
          forecastData.forecast &&
          forecastData.forecast.forecastday[0].hour.map((hourData, index) => (
            <View key={index} style={styles.cellcol}>
              <Text style={[styles.text, {fontSize: 12, marginBottom: 10}]}>
                {formatTime(hourData.time)}
              </Text>
              <Image
                source={{
                  uri: getWeatherIconNight(hourData.condition.code),
                }}
                style={[styles.icon, {}]}
              />
              <Text style={[styles.text, {fontSize: 20, marginTop: 5}]}>
                {hourData.temp_c}°
              </Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontWeight: 700,
    fontSize: 24,
  },
  upcontainer: {
    top: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60%',
  },
  textA: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 700,
  },
  textB: {
    color: '#ffffff',
    fontWeight: 500,
    marginBottom: -20,
    marginTop: 15,
  },
  image: {
    height: 260,
    width: 260,
    marginTop: 15,
    marginBottom: 15,
  },
  textC: {
    fontSize: 50,
    color: '#ffffff',
    fontWeight: 600,
    marginBottom: 10,
    marginTop: -20,
  },
  textD: {
    color: '#ffffff',
    fontWeight: 500,
    marginBottom: 10,
    marginBottom: -20,
  },
  locontainer: {
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
  },
  tableup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 25,
    marginBottom: 20,
  },
  cellcontainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellup: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    height: 15,
    width: 15,
    tintColor: '#ffffff',
    marginRight: 5,
  },
  icon1: {
    height: 15,
    width: 15,
    tintColor: '#ffffff',
    marginRight: 5,
  },
  text: {
    color: '#ffffff',
  },
  tabledown: {
    width: 345,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#1967de',
    borderRadius: 25,
    marginBottom: 20,
  },
  cellcol: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ScrollingWeather;
