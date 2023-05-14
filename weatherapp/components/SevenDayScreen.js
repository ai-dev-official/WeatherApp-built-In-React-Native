import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet, FlatList
} from 'react-native';
import LocationGradient from '../modules/LocationGradient'; // Import the LocationGradient component
import DotsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from '../modules/SearchBar'; // Import the SearchBar component

export function SevenDayScreen () {
  const [locationList, setLocationList] = useState([]);

  const handleNavigation = weatherType => {
    // Handle navigation to a specific location based on weatherType
  };

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

          {/* Render the location list dynamically */}
          <FlatList
            data={locationList}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => handleNavigation(item.weatherType)}>
                <LocationGradient
                  nowWeather={item.weatherType}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.location}>
                  <View style={styles.text}>
                    <Text style={styles.textA}>{item.name}</Text>
                    <Text style={styles.textB}>{item.conditionText}</Text>
                    <Text style={styles.textC}>{item.temperature}°</Text>
                  </View>
                  <View style={styles.imgcontainer}>
                    <Image
                      source={item.weatherImage ? item.weatherImage : null}
                      style={styles.image}
                    />
                  </View>
                </LocationGradient>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View>
    </>
  );
};
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



// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TouchableOpacity,
//   StatusBar,
//   TextInput,
//   Image,
//   FlatList,
// } from 'react-native';
// import React, {useState, useEffect, useRef} from 'react';
// import DotsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// // import SearchIcons from 'react-native-vector-icons/AntDesign';
// // import RainCloud from '../assets/a3.webp';
// import SunShine from '../assets/a4.webp';
// import SnowFlake from '../assets/a2.webp';
// import MoonCloud from '../assets/a5.webp';
// // import LinearGradient from 'react-native-linear-gradient';
// import {useNavigation} from '@react-navigation/native';
// import LocationGradient from '../modules/LocationGradient';
// // import {fetchWeatherData} from './weatherAPI';
// // import {TouchableHighlight} from 'react-native-gesture-handler';
// import {SearchBar} from '../modules/SearchBar';
// // import {API_KEY, API_BASE_URL} from '../modules/api';
// // import {weatherImage} from './MyLocationScreen';
// import {
//   fetchWeatherData,
//   LocationName,
//   backgroundStyles,
//   backGrounds,
//   imageStyles,
//   WEEK_DAYS,
//   months,
//   days,
//   weatherCondition,
//   weatherIconUrl,
//   conditionCode,
//   forecastData,
//   locationName,
// } from '../modules/api';

// const SearchScreen = () => {
//   const [query, setQuery] = useState('');
//   const [isFocused, setIsFocused] = useState(false);
//   const [forecast, setForecast] = useState(null);
//   const [nowWeather, setNowWeather] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [location, setLocation] = useState('Libreville');
//   const [weatherTime, setWeatherTime] = useState('');
//   const [weatherCondition, setWeatherCondition] = useState('');
//   const [locationList, setLocationList] = useState([]);

//   useEffect(() => {
//     const getWeatherData = async () => {
//       try {
//         const data = await fetchWeatherData(location);
//         setWeatherData(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     if (location) {
//       getWeatherData();
//     }
//   }, [location]);

//   const navigation = useNavigation();

//   const handleNavigation = weatherCondition => {
//     navigation.navigate('MyLocationScreen', {  location: location,
//       weatherCondition,});
//   };

//   const handleTomorrow = () => {
//     navigation.navigate('TomorrowScreen');
//   };

 
  

//   const weatherIconUrl = weatherData?.current?.condition?.icon;

//   const weatherImage = imageStyles[nowWeather];

 

//   return (
//     <>
//       <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
//       <View style={styles.container}>
//         <ScrollView
//           verticalScroll={true}
//           horizontal={false}
//           pagingEnabled={true}
//           showsHorizontalScrollIndicator={false}>
//           <View style={styles.tabbar}>
//             <Text style={styles.tabtext}>Weather</Text>
//             <TouchableOpacity onPress={() => handleTomorrow()}>
//               <DotsIcon name="dots-horizontal" size={30} style={styles.icon1} />
//             </TouchableOpacity>
//           </View>
//           <SearchBar />

//           <TouchableOpacity onPress={() => handleNavigation('rainy')}>
//             <LocationGradient
//               nowWeather="rainy"
//               start={{x: 0, y: 0}}
//               end={{x: 1, y: 0}}
//               style={styles.location}>
//               {weatherData && weatherData.current && (
//                 <View style={styles.text}>
//                   <Text
//                     numberOfLines={1}
//                     ellipsizeMode="tail"
//                     style={styles.textA}>
//                     {weatherData.location.name}
//                   </Text>
//                   <Text
//                     numberOfLines={1}
//                     ellipsizeMode="tail"
//                     style={styles.textB}>
//                     {weatherData.current.condition.text}
//                   </Text>

//                   <Text style={styles.textC}>
//                     {weatherData.current.temp_c}°
//                   </Text>
//                 </View>
//               )}
//               <View style={styles.imgcontainer}>
//                 <Image
//                   source={weatherImage ? weatherImage : null}
//                   style={styles.image}
//                 />
//               </View>
//             </LocationGradient>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={() => handleNavigation('cloudy')}>
//             <LocationGradient
//               nowWeather="cloudy"
//               start={{x: 0, y: 0}}
//               end={{x: 1, y: 0}}
//               style={styles.location}>
//               <View style={styles.text}>
//                 <Text style={styles.textA}>Toronto</Text>
//                 <Text style={styles.textB}>Partly Cloudy</Text>
//                 <Text style={styles.textC}>17°</Text>
//               </View>
//               <View style={styles.imgcontainer}>
//                 <Image source={MoonCloud} style={styles.image} />
//               </View>
//             </LocationGradient>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => handleNavigation('sunny')}>
//             <LocationGradient
//               nowWeather="sunny"
//               start={{x: 0, y: 0}}
//               end={{x: 1, y: 0}}
//               style={styles.location}>
//               <View style={styles.text}>
//                 <Text style={styles.textA}>Istanbul</Text>
//                 <Text style={styles.textB}>Sunny</Text>
//                 <Text style={styles.textC}>24°</Text>
//               </View>
//               <View style={styles.imgcontainer}>
//                 <Image source={SunShine} style={styles.image} />
//               </View>
//             </LocationGradient>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => handleNavigation('snowy')}>
//             <LocationGradient
//               nowWeather="snowy"
//               start={{x: 0, y: 0}}
//               end={{x: 1, y: 0}}
//               style={styles.location}>
//               <View style={styles.text}>
//                 <Text style={styles.textA}>Nuuk</Text>
//                 <Text style={styles.textB}>Snowy</Text>
//                 <Text style={styles.textC}>-6°</Text>
//               </View>
//               <View style={styles.imgcontainer}>
//                 <Image source={SnowFlake} style={styles.image} />
//               </View>
//             </LocationGradient>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => handleNavigation('rainy')}>
//             <LocationGradient
//               nowWeather="rainy"
//               start={{x: 0, y: 0}}
//               end={{x: 1, y: 0}}
//               style={styles.location}>
//               <View style={styles.text}>
//                 <Text style={styles.textA}>London</Text>
//                 <Text style={styles.textB}>Snowyy</Text>
//                 <Text style={styles.textC}>-6°</Text>
//               </View>
//               <View style={styles.imgcontainer}>
//                 <Image source={SnowFlake} style={styles.image} />
//               </View>
//             </LocationGradient>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>
//     </>
//   );
// };
// //#6f8496 #41536e,  #8364a0  #282168, #eebe17 #f48d25, #7cbaf4 #2e76dc
// export default SearchScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     marginTop: 40,
//   },
//   tabbar: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   icon1: {
//     backgroundColor: '#eef2f5',
//     borderRadius: 20,
//   },
//   tabtext: {
//     fontSize: 32,
//     fontWeight: 700,
//     color: '#000000',
//   },

//   text: {
//     alignSelf: 'center',
//   },
//   imgcontainer: {
//     width: 120,
//     height: 120,
//   },
//   image: {
//     width: 144,
//     height: 144,
//     padding: 5,
//     marginLeft: -20,
//     marginTop: -18,
//   },
//   location: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginHorizontal: 10,
//     borderRadius: 35,
//     paddingHorizontal: 20,
//     paddingVertical: 8,
//     // borderWidth: 2,
//     // borderRightWidth: 1,
//     // borderColor: '#aebccb',
//     // borderRightColor: '#445873',
//     marginBottom: 22,
//   },
//   textA: {
//     fontSize: 24,
//     fontWeight: 700,
//     color: '#ffffff',
//     marginBottom: 2,
//   },
//   textB: {
//     fontSize: 18,
//     fontWeight: 500,
//     color: '#ffffff',
//   },
//   textC: {
//     fontSize: 48,
//     fontWeight: 700,
//     color: '#ffffff',
//   },
// });
