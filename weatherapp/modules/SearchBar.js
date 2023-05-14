import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import SearchIcons from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
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
} from './api';

export function SearchBar({ setCurrentWeather, setForecast }) {
  const [query, setQuery] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [weatherTime, setWeatherTime] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState('');

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await fetchWeatherData(searchLocation);
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };
    if (searchLocation) {
      getWeatherData();
    }
  }, [searchLocation]);
  

  const weatherImage = imageStyles[weatherCondition];

  const navigation = useNavigation();
  const handleSearch = () => {
    navigation.navigate('MyLocationScreen', {
      location: searchLocation,
      weatherCondition,
    });
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a city"
          placeholderTextColor="#838b8d"
          onChangeText={(text) => setSearchLocation(text)} // Update to setSearchLocation
          value={searchLocation}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.icon}>
          <SearchIcons name="search1" size={20} color="grey" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    height: 50,
    borderWidth: 0.2,
    borderColor: '#eef2f5',
    borderRadius: 15,
    backgroundColor: '#eef2f5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 20,
  },
  searchWrapper: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    padddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 20,
    color: '#000000',
    backgroundColor: '#eef2f5',
    borderRadius: 10,
  },
  icon: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});
