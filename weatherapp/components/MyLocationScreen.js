import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  findNodeHandle,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import GradientBackground from '../modules/Gradient';
import Mysunicon from 'react-native-vector-icons/Ionicons';
import Mywindicon from 'react-native-vector-icons/FontAwesome5';
import Mydropicon from 'react-native-vector-icons/Fontisto';
import weatherIconMappingDay from '../modules/WeatherIconMappingDay';
import weatherIconMappingNight from '../modules/WeatherIconMappingNight';
import {
  fetchWeatherData,
  backgroundStyles,
  backGrounds,
  imageStyles,
  months,
  days,
  conditionCode,
  getClosestMatch,
  fetchForecastData,
  formatTime,
} from '../modules/api';

const MyLocationScreen = ({route}) => {
  const navigation = useNavigation();
  const [background, setBackground] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [weatherCondition, setWeatherCondition] = useState('');
  const [weatherTime, setWeatherTime] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [location, setLocation] = useState('London');
  const scrollViewRef = useRef();

  useEffect(() => {
    const {weatherCondition} = route.params || {};
    if (weatherCondition) {
      setWeatherCondition(weatherCondition);
    }
  }, [route.params]);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await fetchWeatherData(route.params?.location);
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getWeatherData();
  }, [route.params?.location]);

  // sunny wind blood-drop snowflake cloudy-gusts
  const nowWeather = route.params?.nowWeather || null;

  // Set weather condition from route params
  useEffect(() => {
    const {weatherCondition} = route.params || {};
    setWeatherCondition(weatherCondition);
  }, [route.params]);

  const weatherImage = imageStyles[weatherCondition];

  useEffect(() => {
    if (weatherData && weatherData.location) {
      const localTime = new Date(weatherData.location.localtime);
      const dayOfWeek = days[localTime.getDay()];
      const dayOfMonth = localTime.getDate();
      const month = months[localTime.getMonth()];
      const formattedLocalTime = `Today, ${dayOfMonth} ${month}`;
      setWeatherTime(formattedLocalTime);
    }
  }, [weatherData]);

  const handleNavigation = () => {
    navigation.navigate('LandingScreen');
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

  const handleScroll = event => {
    const slide = Math.ceil(
      event.nativeEvent.contentOffset.x / ((width - 53) / 5),
    );
    if (slide !== activeSlide) {
      setActiveSlide(slide);
    }
  };

  const {width} = Dimensions.get('window');

  useEffect(() => {
    const timer = setInterval(() => {
      const newIndex = activeSlide === 23 ? 0 : activeSlide + 1;
      setActiveSlide(newIndex);
      scrollViewRef.current.scrollTo({
        x: newIndex * ((width - 53) / 5),
        animated: true,
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [activeSlide]);

  const renderDots = () => {
    const scrollDurationInSeconds = 300; // Change this value as needed
    const dotCount = 4;
    const activeDotIndex = Math.floor((activeSlide * scrollDurationInSeconds) / (18 * dotCount)) % dotCount;
  
    return (
      <View style={styles.dotContainer}>
        {[...Array(dotCount)].map((_, i) => (
          <Text
            key={i}
            style={[styles.dot, activeDotIndex === i && styles.activeDot]}
          ></Text>
        ))}
      </View>
    );
  };
  
  
  

  return (
    <>
      <StatusBar backgroundColor="#74bdfd" barStyle="light-content" />
      <GradientBackground weatherCondition={weatherCondition}>
        <View onPress={handleNavigation} style={styles.container}>
          <View style={styles.upcontainer}>
            {weatherData && weatherData.current && (
              <Text style={styles.textA}>{weatherData.location.name}</Text>
            )}
            <Text style={styles.textB}>{weatherTime ? weatherTime : null}</Text>
            <Image
              source={weatherImage ? weatherImage : null}
              style={styles.image}
            />
            {weatherData && weatherData.current && (
              <Text style={styles.textC}> {Math.round(weatherData.current.temp_c)}°</Text>
            )}

            {weatherData && weatherData.current && (
              <Text style={styles.textD}>
                {weatherData.current.condition.text}
              </Text>
            )}
          </View>
          <View style={styles.locontainer}>
            <View style={[styles.tableup, backgroundStyles[weatherCondition]]}>
              <View
                style={[
                  styles.cellcontainer,
                  {
                    borderRightWidth: 0.2,
                    borderRightColor: '#f2f2f2',
                    paddingHorizontal: 15,
                  },
                ]}>
                <View style={[styles.cellup, {}]}>
                  <Mysunicon
                    name="sunny"
                    color={'#fccf05'}
                    size={15}
                    style={[styles.icon, {}]}
                  />
                  <Text style={[styles.text, {fontSize: 12}]}>UV INDEX</Text>
                </View>
                <View>
                  {weatherData && weatherData.current && (
                    <Text style={[styles.text, {fontSize: 20, marginTop: 5}]}>
                      {weatherData.current.uv}
                    </Text>
                  )}
                </View>
              </View>
              <View
                style={[
                  styles.cellcontainer,
                  {
                    borderRightWidth: 0.2,
                    borderRightColor: '#f2f2f2',
                    paddingHorizontal: 15,
                  },
                ]}>
                <View style={[styles.cellup, {}]}>
                  <Mywindicon
                    name="wind"
                    color={'#8e93f7'}
                    size={15}
                    style={[styles.icon, {}]}
                  />
                  <Text style={[styles.text, {fontSize: 12}]}>WIND</Text>
                </View>
                <View>
                  {weatherData && weatherData.current && (
                    <Text style={[styles.text, {fontSize: 20, marginTop: 5}]}>
                      {weatherData.current.wind_mph} m/h
                    </Text>
                  )}
                </View>
              </View>
              <View style={[styles.cellcontainer, {paddingHorizontal: 15}]}>
                <View style={styles.cellup}>
                  <Mydropicon
                    name="blood-drop"
                    color={'#268feb'}
                    size={15}
                    style={[styles.icon, {}]}
                  />

                  <Text style={[styles.text, {fontSize: 12}]}>HUMIDITY</Text>
                </View>
                <View>
                  {weatherData && weatherData.current && (
                    <Text style={[styles.text, {fontSize: 20, marginTop: 5}]}>
                      {weatherData.current.humidity} %
                    </Text>
                  )}
                </View>
              </View>
            </View>
            <View style={[styles.tabledown, backGrounds[weatherCondition]]}>
              <ScrollView
                ref={scrollViewRef}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={handleScroll}>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[0]?.time,
                      )}
                    </Text>
                  )}

                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[0]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}

                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[0]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[1]?.time,
                      )}
                    </Text>
                  )}
                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[1]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}
                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[1]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[2]?.time,
                      )}
                    </Text>
                  )}
                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[2]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}

                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[2]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[3]?.time,
                      )}
                    </Text>
                  )}

                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[3]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}
                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[3]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[4]?.time,
                      )}
                    </Text>
                  )}
                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[4]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}
                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[4]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[5]?.time,
                      )}
                    </Text>
                  )}
                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[5]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}
                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[5]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[6]?.time,
                      )}
                    </Text>
                  )}
                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[6]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}
                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[6]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[7]?.time,
                      )}
                    </Text>
                  )}
                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[7]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}

                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[7]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[8]?.time,
                      )}
                    </Text>
                  )}
                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[8]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}
                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[8]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[9]?.time,
                      )}
                    </Text>
                  )}
                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[9]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}
                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[9]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[10]?.time,
                      )}
                    </Text>
                  )}
                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[10]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}
                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[10]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[11]?.time,
                      )}
                    </Text>
                  )}
                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[11]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}
                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[11]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[12]?.time,
                      )}
                    </Text>
                  )}
                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[12]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}

                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[12]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[13]?.time,
                      )}
                    </Text>
                  )}
                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[13]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}
                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[13]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[14]?.time,
                      )}
                    </Text>
                  )}
                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[14]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}
                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[14]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[15]?.time,
                      )}
                    </Text>
                  )}
                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[15]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}
                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[15]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[16]?.time,
                      )}
                    </Text>
                  )}
                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[16]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}
                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[16]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[17]?.time,
                      )}
                    </Text>
                  )}
                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[17]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}

                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[17]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[18]?.time,
                      )}
                    </Text>
                  )}
                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[18]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}
                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[18]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[19]?.time,
                      )}
                    </Text>
                  )}
                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[19]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}
                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[19]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[20]?.time,
                      )}
                    </Text>
                  )}
                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[20]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}
                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[20]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[21]?.time,
                      )}
                    </Text>
                  )}
                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[21]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}
                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[21]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[22]?.time,
                      )}
                    </Text>
                  )}
                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[22]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}
                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[22]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
                <View style={styles.cellcol}>
                  {forecastData && forecastData.forecast && (
                    <Text
                      style={[styles.text, {fontSize: 10, marginBottom: 10}]}>
                      {formatTime(
                        forecastData.forecast?.forecastday[0]?.hour[23]?.time,
                      )}
                    </Text>
                  )}
                  {forecastData && forecastData.forecast && (
                    <Image
                      source={{
                        uri: `https:${forecastData.forecast.forecastday[0]?.hour[23]?.condition.icon}`,
                      }}
                      style={{width: 24, height: 24}}
                    />
                  )}
                  {forecastData && forecastData.forecast && (
                    <Text style={[styles.text, {fontSize: 18, marginTop: 5}]}>
                      {Math.round(
                        forecastData.forecast.forecastday[0]?.hour[23]?.temp_c,
                      )}
                      °
                    </Text>
                  )}
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
        {renderDots()}
      </GradientBackground>
    </>
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
    fontSize: 16,
  },
  upcontainer: {
    top: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60%',
    marginBottom: 20,
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
    fontSize: 60,
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
    height: '50%',
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
    paddingVertical: 25,
    paddingHorizontal: 20,
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
    width: 355,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingLeft: 6,
    backgroundColor: '#1967de',
    borderRadius: 25,
  },
  cellcol: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 68,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 5,
    marginBottom: 20,
    // marginVertical: 5,
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: '#eef1f4',
    borderColor: '#eef1f4',
    borderWidth: 2,
  },
  activeDot: {
    backgroundColor: '#0084fd',
    borderColor: '#0084fd',
    width: 18,
    height: 18,
  },
});
export default MyLocationScreen;
