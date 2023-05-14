import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
// import format  from 'date-fns';


const WeatherTime = () => {
  const [weatherTime, setWeatherTime] = useState('');
//   const date = new Date('2023-05-09 19:29');
//   const daysOfWeek = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//   ];
//   const monthNames = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
//   ];

//   const today = new Date();
//   const yesterday = new Date(today);
//   yesterday.setDate(today.getDate() - 1);

//   let formattedDate = '';
//   if (date.toDateString() === today.toDateString()) {
//     formattedDate = 'Today';
//   } else if (date.toDateString() === yesterday.toDateString()) {
//     formattedDate = 'Yesterday';
//   } else {
//     const dayOfWeek = daysOfWeek[date.getDay()];
//     const month = monthNames[date.getMonth()];
//     const dayOfMonth = date.getDate();
//     formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;
//   }

//   console.log(formattedDate);

//   useEffect(() => {
//     if (weatherData) {
//       const localTime = new Date(weatherData.location.localtime);
//       const formattedLocalTime = format(localTime, "'Today,' d MMM");
//       setWeatherTime(formattedLocalTime);
//     }
//   }, [weatherData]);

// useEffect(() => {
//   if (weatherData) {
//     const localTime = new Date(weatherData.location.localtime);
//     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const dayOfWeek = days[localTime.getDay()];
//     const dayOfMonth = localTime.getDate();
//     const month = months[localTime.getMonth()];
//     const formattedLocalTime = `Today, ${dayOfMonth} ${month}`;
//     setWeatherTime(formattedLocalTime);
//   }
// }, [weatherData]);


  return (
    <View>
      <Text>WeatherTime</Text>
    </View>
  );
};

export default WeatherTime;

const styles = StyleSheet.create({});




 // function getClosestMatch(conditionCode) {
  //   switch (conditionCode) {
  //     case 1000:
  //       return 'sunny';
  //     case 1003:
  //       return 'partly-cloudy';
  //     case 1006:
  //     case 1009:
  //       return 'cloudy';
  //     case 1030:
  //     case 1135:
  //       return 'foggy';
  //     case 1063:
  //     case 1180:
  //     case 1183:
  //     case 1186:
  //       return 'rainy';
  //     case 1066:
  //     case 1114:
  //     case 1210:
  //     case 1213:
  //     case 1216:
  //     case 1219:
  //     case 1222:
  //     case 1225:
  //       return 'snowy';
  //     case 1240:
  //     case 1243:
  //       return 'drizzly';
  //     case 1273:
  //     case 1276:
  //     case 1279:
  //     case 1282:
  //       return 'thundery';
  //     default:
  //       // If no exact match, return the closest match based on condition code
  //       if (conditionCode >= 1000 && conditionCode < 1003) {
  //         return 'sunny';
  //       } else if (conditionCode >= 1003 && conditionCode < 1006) {
  //         return 'partly-cloudy';
  //       } else if (conditionCode >= 1009 && conditionCode < 1030) {
  //         return 'cloudy';
  //       } else if ((conditionCode >= 1030 && conditionCode < 1063) || (conditionCode >= 1135 && conditionCode < 1180)) {
  //         return 'foggy';
  //       } else if (conditionCode >= 1180 && conditionCode < 1240) {
  //         return 'rainy';
  //       } else if (conditionCode >= 1240 && conditionCode < 1273) {
  //         return 'drizzly';
  //       } else if (conditionCode >= 1273 && conditionCode < 1300) {
  //         return 'thundery';
  //       } else {
  //         return 'stormy';
  //       }
  //   }
  // }

  // // const weatherImage = imageStyles[getClosestMatch];
  // // assuming the conditionCode is available in the state
  // const conditionCode = this.state.conditionCode;
  // weatherCondition = getClosestMatch(conditionCode);
  // const weatherImage = imageStyles[weatherCondition];

  // const weatherImage = <Image source={imageStyles[getClosestMatch(condition.code)]} style={styles.image} />;


// const imageStyles = {
  //   sunny: source={SunPng},
  //   cloudy: source={CloudPng},
  //   rainy: source={RainPng},
  //   stormy: source={StormPng},
  //   snowy: source={SnowPng},
  // };

  //   const imageStyles = {
  //   sunny: require('../assets/a4.webp'),
  //   cloudy: require('../assets/a5.webp'),
  //   rainy: require('../assets/a3.webp'),
  //   stormy: require('../assets/a6.webp'),
  //   snowy: require('../assets/a2.webp'),
  // };

  // const weatherImage = imageStyles[weatherCondition];


// useEffect(() => {
  //   const fetchForecastData = async () => {
  //     const response = await fetch(
  //       `https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=${location}&days=1&aqi=no&alerts=no`,
  //     );
  //     const data = await response.json();
  //     setForecastData(data);
  //   };

  //   fetchForecastData();
  // }, [location]);

  // useEffect(() => {
  //   const fetchForecastData = async () => {
  //     const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=c7f71a08081d47819df200210230805&q=${location}&days=1`);
  //     const data = await response.json();
  //     setForecast(data.forecast.forecastday[0].hour);
  //   };
  
  //   fetchForecastData();
  // }, [location]);

  //  useEffect(() => {
  //   const { weatherCondition } = route.params;
  //   setWeatherCondition(weatherCondition);
  // }, []);



// useEffect(() => {
//   if (weatherData) {
//     const localTime = new Date(weatherData.location.localtime);
//     const formattedLocalTime = format(localTime, "'Today,' d MMM");
//     setWeatherTime(formattedLocalTime);
//   }
// }, [weatherData]);


// useEffect(() => {
  //   // fetch weather data from API and set weatherCondition accordingly
  //   // for example:
  //   // const weatherData = await fetchWeatherData();
  //   // setWeatherCondition(weatherData.condition);
  //   setNowWeather('stormy');
  // }, []);

  // handleOnChange = async searchData => {
  //   const location = searchData.value;

  //   try {
  //     const currentWeatherFetch = fetch(
  //       `http://api.weatherapi.com/v1/current.json?key=c7f71a08081d47819df200210230805&q=${location}&aqi=no&units=metric`,
  //     );
  //     const forecastWeatherFetch = fetch(
  //       `http://api.weatherapi.com/v1/forecast.json?key=c7f71a08081d47819df200210230805&q=${location}&days=7&aqi=no&alerts=no&units=metric`,
  //     );

  //     const [currentWeatherResponse, forecastWeatherResponse] =
  //       await Promise.all([currentWeatherFetch, forecastWeatherFetch]);
  //     const currentWeatherData = await currentWeatherResponse.json();
  //     const forecastWeatherData = await forecastWeatherResponse.json();

  //     setCurrentWeather({city: location, ...currentWeatherData});
  //     setForecast({city: location, ...forecastWeatherData});
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // console.log(currentWeather);
  // console.log(forecast);

  // const handleQueryChange = text => {
  //   setQuery(text);
  // };

  // const handleInputFocus = () => {
  //   setIsFocused(true);
  // };

  // const handleInputBlur = () => {
  //   setIsFocused(false);
  // };

  // const dayInaWeek = new Date().getDay();
  // const foreCastDays = WEEK_DAYS.slice(dayInaWeek, WEEK_DAYS.length).concat(
  //   WEEK_DAYS.slice(0, dayInaWeek),
  // );

  // console.log(foreCastDays);



// const handleSearch = async () => {
  //   try {
  //     const response = await fetch(
  //       `http://api.weatherapi.com/v1/current.json?key=c7f71a08081d47819df200210230805&q=${location}&aqi=no`,
  //     );
  //     const data = await response.json();
  //     setWeatherData(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


 useEffect(() => {
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
      setNowWeather(nowWeather);
    }
  }, [weatherData]);



  import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { weatherCondition, imageStyles } from './utils/weatherConditions';
import { fetchWeather } from './utils/api';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchWeather();
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, []);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  if (!weatherData) {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>Loading...</Text>
      </View>
    );
  }

  const conditionCode = weatherData.current.condition.code;
  const weatherIconUrl = `https:${weatherData.current.condition.icon}`;
`https://cdn.weatherapi.com/weather/64x64/night/143.png`
  return (
    <View style={[styles.container, { backgroundColor: imageStyles[weatherCondition(conditionCode)].backgroundColor }]}>
      <View style={styles.headerContainer}>
        <Image style={styles.headerImage} source={{ uri: weatherIconUrl }} />
        <Text style={styles.tempText}>{weatherData.current.temp_c}°C</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{weatherData.location.name}</Text>
        <Text style={styles.subtitle}>{weatherCondition(conditionCode)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 20,
    color: 'red',
  },
  loading: {
    fontSize: 20,
    color: 'black',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  tempText: {
    fontSize: 20,
  },
  bodyContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
  },
});


 // handleOnChange = async searchData => {
  //   const location = searchData.value;

  //   try {
  //     const currentWeatherFetch = fetch(
  //       `http://api.weatherapi.com/v1/current.json?key=c7f71a08081d47819df200210230805&q=${location}&aqi=no&units=metric`,
  //     );
  //     const forecastWeatherFetch = fetch(
  //       `http://api.weatherapi.com/v1/forecast.json?key=c7f71a08081d47819df200210230805&q=${location}&days=7&aqi=no&alerts=no&units=metric`,
  //     );

  //     const [currentWeatherResponse, forecastWeatherResponse] =
  //       await Promise.all([currentWeatherFetch, forecastWeatherFetch]);
  //     const currentWeatherData = await currentWeatherResponse.json();
  //     const forecastWeatherData = await forecastWeatherResponse.json();

  //     setCurrentWeather({city: location, ...currentWeatherData});
  //     setForecast({city: location, ...forecastWeatherData});
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // console.log(currentWeather);
  // console.log(forecast);

  // const handleQueryChange = text => {
  //   setQuery(text);
  // };

  // const handleInputFocus = () => {
  //   setIsFocused(true);
  // };

  // const handleInputBlur = () => {
  //   setIsFocused(false);
  // };

  // const dayInaWeek = new Date().getDay();
  // const foreCastDays = WEEK_DAYS.slice(dayInaWeek, WEEK_DAYS.length).concat(
  //   WEEK_DAYS.slice(0, dayInaWeek),
  // );

  // console.log(foreCastDays);


   const scrollViewRef = useRef(null);

  useEffect(() => {
    scrollToCurrentHour(scrollViewRef);
  }, []);
  
  useEffect(() => {
    // Scroll to current hour on component mount
    const scrollToCurrentHour = () => {
      if (scrollViewRef.current) {
        const currentHourCell = scrollViewRef.current.props.children.find(
          (child) => child.props.className === 'current-hour'
        );
        if (currentHourCell) {
          currentHourCell.measureLayout(
            scrollViewRef.current.getInnerViewNode(),
            (x, y) => {
              scrollViewRef.current.scrollTo({ x: 0, y, animated: true });
            }
          );
        }
      }
    };

    <!-- scrollToCurrentHour();

    // Update time to "Now" for current hour
    const updateCurrentHourTime = () => {
      const currentHourCell = document.querySelector('.current-hour');
      if (currentHourCell) {
        const timeElement = currentHourCell.querySelector('.hour');
        if (timeElement) {
          timeElement.textContent = 'Now';
        }
      }
    };

    updateCurrentHourTime();
  }, []); -->

working
 <Image source={{ uri: `https:${weatherData.current.condition.icon}` }} style={{ width: 24, height: 24 }} />

 <Image source={{ uri: `https:${forecastData.forecast.forecastday[0]?.hour[0]?.condition.icon}` }} style={{ width: 24, height: 24 }} />


 const scrollViewRef = useRef(null);
const currentHourCellRef = useRef(null);

useEffect(() => {
  scrollToCurrentHour();
}, []);

const scrollToCurrentHour = () => {
  if (currentHourCellRef.current && scrollViewRef.current) {
    const currentHourCell = currentHourCellRef.current;
    currentHourCell.measureLayout(
      findNodeHandle(scrollViewRef.current),
      (x, y) => {
        scrollViewRef.current.scrollTo({ x, y, animated: true });
      },
      () => {
        console.log('Failed to measure layout');
      }
    );
  }
};

return (
  <ScrollView
    ref={scrollViewRef}
    horizontal={true}
    pagingEnabled={true}
    showsHorizontalScrollIndicator={false}
    onContentSizeChange={scrollToCurrentHour}
  >
    {Array.from({ length: 15 }).map((_, index) => {
      const hourData = forecastData?.forecast?.forecastday[0]?.hour[index];
      const uniqueId = hourData?.time || `placeholder_${index}`;

      return (
        <View
          key={uniqueId}
          style={styles.cellcol}
          onLayout={scrollToCurrentHour}
        >
          {hourData && (
            <Text style={[styles.text, { fontSize: 10, marginBottom: 10 }]}>
              {formatTime(hourData.time)}
            </Text>
          )}

          {hourData && (
            <Image
              source={{
                uri: `https:${hourData.condition.icon}`,
              }}
              style={{ width: 24, height: 24 }}
            />
          )}

          {hourData && (
            <Text style={[styles.text, { fontSize: 18, marginTop: 5 }]}>
              {Math.round(hourData.temp_c)}°
            </Text>
          )}

          <Text style={[styles.text, { fontSize: 12, marginTop: 5 }]}>
            Unique ID: {uniqueId}
          </Text>
        </View>
      );
    })}
  </ScrollView>
);



 // const loadOptions = inputValue => {
  //   return fetch(
  //     `${WEATHER_API_URL}/search.json?key=${WEATHER_API_KEY}&q=${inputValue}&lang=en&limit=10`,
  //   )
  //     .then(response => response.json())
  //     .then(response => {
  //       return {
  //         options: response.map(city => {
  //           return {
  //             value: `${city.lon},${city.lat}`,
  //             label: `${city.name}, ${city.region}, ${city.country}`,
  //           };
  //         }),
  //       };
  //     })
  //     .catch(err => console.error(err));
  // };

  // const handleOnChange = async searchData => {
  //   const location = searchData.value;

  //   try {
  //     const currentWeatherFetch = fetch(
  //       `${WEATHER_API_URL}/v1/current.json?key=${WEATHER_API_KEY}&q=${location}&aqi=no&units=metric`,
  //     );
  //     const forecastWeatherFetch = fetch(
  //       `${WEATHER_API_URL}/v1/forecast.json?key=${WEATHER_API_KEY}&q=${location}&days=7&aqi=no&alerts=no&units=metric`,
  //     );

  //     const [currentWeatherResponse, forecastWeatherResponse] =
  //       await Promise.all([currentWeatherFetch, forecastWeatherFetch]);
  //     const currentWeatherData = await currentWeatherResponse.json();
  //     const forecastWeatherData = await forecastWeatherResponse.json();

  //     setCurrentWeather({city: location, ...currentWeatherData});
  //     setForecast({city: location, ...forecastWeatherData});
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (selectedCity) {
  //     const fetchWeatherData = async () => {
  //       try {
  //         const currentWeatherResponse = await fetch(
  //           `${WEATHER_API_URL}/current.json?key=${WEATHER_API_KEY}&q=${selectedCity}&aqi=no&units=metric`,
  //         );
  //         const forecastWeatherResponse = await fetch(
  //           `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${selectedCity}&days=7&aqi=no&alerts=no&units=metric`,
  //         );
  //         const currentWeatherData = await currentWeatherResponse.json();
  //         const forecastWeatherData = await forecastWeatherResponse.json();
  //         setCurrentWeather({
  //           city: selectedCity,
  //           ...currentWeatherData,
  //         });
  //         setForecast({
  //           city: selectedCity,
  //           ...forecastWeatherData,
  //         });
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchWeatherData();
  //   }
  // }, [selectedCity]);
  const handleAddLocation = () => {
    // Check if the search result already exists in the list
    const isExistingLocation = locationList.find(
      item => item.name === weatherData.location.name,
    );

    if (!isExistingLocation) {
      // Create a new location object from the search result
      const newLocation = {
        name: weatherData.location.name,
        conditionText: weatherData.current.condition.text,
        temperature: weatherData.current.temp_c,
        weatherImage: weatherImage ? weatherImage : null,
      };

      // Update the location list state by adding the new location at the top
      setLocationList([newLocation, ...locationList]);
    }

    // Reset the query and forecast states
    setQuery('');
    setForecast(null);
  };

    {/* <PickerSelect
        placeholder={{
          label: 'Search for a city',
          value: null,
        }}
        onValueChange={handleOnChange}
        items={locations}
        value={null}
      /> */}


import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import DotsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import SearchIcons from 'react-native-vector-icons/AntDesign';
import RainCloud from '../assets/a3.webp';
import SunShine from '../assets/a4.webp';
import SnowFlake from '../assets/a2.webp';
import MoonCloud from '../assets/a5.webp';
// import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import LocationGradient from '../modules/LocationGradient';
// import {fetchWeatherData} from './weatherAPI';
// import {TouchableHighlight} from 'react-native-gesture-handler';
import {SearchBar} from '../modules/SearchBar';
// import {API_KEY, API_BASE_URL} from '../modules/api';
// import {weatherImage} from './MyLocationScreen';
import {
  fetchWeatherData,
  LocationName,
  backgroundStyles,
  backGrounds,
  imageStyles,
  WEEK_DAYS,
  months,
  days,
  weatherCondition,
  weatherIconUrl,
  conditionCode,
  forecastData,
  locationName,
} from '../modules/api';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [forecast, setForecast] = useState(null);
  const [nowWeather, setNowWeather] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('Dublin');
  const [weatherTime, setWeatherTime] = useState('');
  const [weatherCondition, setWeatherCondition] = useState('');
  const [locationList, setLocationList] = useState([]);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await fetchWeatherData(location);
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };
    if (location) {
      getWeatherData();
    }
  }, [location]);

  const navigation = useNavigation();


  const handleNavigation = (weatherCondition, selectedLocation) => {
    setLocation(selectedLocation);
    navigation.navigate('MyLocationScreen', {
      location: selectedLocation,
      weatherCondition,
    });
  };

  
  // const handleNavigation = weatherCondition => {
  //   navigation.navigate('MyLocationScreen', {
  //     location: location,
  //     weatherCondition,
  //   });
  // };

  const handleTomorrow = () => {
    navigation.navigate('TomorrowScreen');
  };

  const weatherIconUrl = weatherData?.current?.condition?.icon;

  const weatherImage = imageStyles[nowWeather];

  const locationData = [
    {
      id: '1',
      nowWeather: 'rainy',
      locationName: 'Dublin',
      imageSource: RainCloud,
    },
    {
      id: '2',
      nowWeather: 'cloudy',
      locationName: 'Toronto',
      imageSource: MoonCloud,
    },
    {
      id: '3',
      nowWeather: 'sunny',
      locationName: 'Istanbul',
      imageSource: SunShine,
    },
    {
      id: '4',
      nowWeather: 'snowy',
      locationName: 'Nuuk',
      imageSource: SnowFlake,
    },
    {
      id: '5',
      nowWeather: 'rainy',
      locationName: 'London',
      imageSource: SnowFlake,
    },
  ];

  return (
    <>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View style={styles.container}>
        <ScrollView
          verticalScroll={true}
          horizontal={false}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.tabbar}>
            <Text style={styles.tabtext}>Weather</Text>
            <TouchableOpacity onPress={() => handleTomorrow()}>
              <DotsIcon name="dots-horizontal" size={30} style={styles.icon1} />
            </TouchableOpacity>
          </View>
          <SearchBar />
          <FlatList
        data={locationData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          const locationWeatherData = weatherData?.locationData?.[item.locationName];

          return (
            <TouchableOpacity
              onPress={() => handleNavigation(item.nowWeather, item.locationName)}>
              <LocationGradient
                nowWeather={item.nowWeather}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.location}
              >
                <View style={styles.text}>
                  <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textA}>
                    {item.locationName}
                  </Text>
                  <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textB}>
                    {locationWeatherData ? locationWeatherData.condition.text : item.nowWeather === 'snowy' ? 'Snowy' : 'Partly Cloudy'}
                  </Text>
                  <Text style={styles.textC}>
                    {locationWeatherData ? locationWeatherData.temp_c : '-6'}°
                  </Text>
                </View>
                <View style={styles.imgcontainer}>
                  <Image source={item.imageSource} style={styles.image} />
                </View>
              </LocationGradient>
            </TouchableOpacity>
          );
        }}
      />
        </ScrollView>
      </View>
    </>
  );
};
//#6f8496 #41536e,  #8364a0  #282168, #eebe17 #f48d25, #7cbaf4 #2e76dc
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 40,
  },
  tabbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  icon1: {
    backgroundColor: '#eef2f5',
    borderRadius: 20,
  },
  tabtext: {
    fontSize: 32,
    fontWeight: 700,
    color: '#000000',
  },

  text: {
    alignSelf: 'center',
  },
  imgcontainer: {
    width: 120,
    height: 120,
  },
  image: {
    width: 144,
    height: 144,
    padding: 5,
    marginLeft: -20,
    marginTop: -18,
  },
  location: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    borderRadius: 35,
    paddingHorizontal: 20,
    paddingVertical: 8,
    // borderWidth: 2,
    // borderRightWidth: 1,
    // borderColor: '#aebccb',
    // borderRightColor: '#445873',
    marginBottom: 22,
  },
  textA: {
    fontSize: 24,
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: 2,
  },
  textB: {
    fontSize: 18,
    fontWeight: 500,
    color: '#ffffff',
  },
  textC: {
    fontSize: 48,
    fontWeight: 700,
    color: '#ffffff',
  },
});
