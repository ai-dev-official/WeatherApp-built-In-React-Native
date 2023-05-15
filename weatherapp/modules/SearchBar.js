import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import GradientBackground from '../modules/Gradient';
import SearchIcons from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import {
  fetchWeatherData,
  imageStyles,
  backGrounds,
} from './api';

export function SearchBar() {
  const [searchLocation, setSearchLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState('rainy');
  

  const locationCondition = weatherData?.current?.condition.text;

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const data = await fetchWeatherData(searchLocation);
        setWeatherData(data);
        setWeatherCondition(locationCondition);
      } catch (error) {
        console.error(error);
      }
    };
    if (searchLocation) {
      getWeatherData();
    }
  }, [searchLocation]);


  


  const weatherImage = imageStyles[weatherCondition];

  // const backgroundGradient = GradientBackground;

  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.navigate('MyLocationScreen', {
      location: searchLocation,
      weatherCondition:weatherCondition,
      weatherImage,
      backgroundGradient: backGrounds[weatherCondition],
    });
  };

  return (

    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a city"
          placeholderTextColor="#838b8d"
          onChangeText={(text) => setSearchLocation(text)}
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
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 20,
  },
  searchWrapper: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderWidth: 0.2,
    borderColor: '#eef2f5',
    borderRadius: 15,

    backgroundColor: '#eef2f5',
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
  weatherImage: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});
