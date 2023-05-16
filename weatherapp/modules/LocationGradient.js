import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LocationGradient = ({ children, nowWeather, start, end, style }) => {
  let colors = [];

  switch (nowWeather) {
    case 'Sunny':
      case 'Clear':
        case 'Sunny':
          case 'Sunny':
            case 'Sunny':
      colors = ['#eebe17', '#f48d25'];
      break;
    case 'Rainy':
      colors = ['#6f8496', '#41536e'];
      break;
      case 'Cloudy':
      case 'Overcast':
    case 'Partly cloudy':
      colors = ['#8364a0', '#282168'];
      break;
    case 'Stormy':
      colors = ['#303F9F', '#1A237E'];
      break;
    case 'Snowy':
      colors = ['#74bdfd', '#2a71dd'];
      break;
    case 'Thundry':
    case 'Stormy': 
     colors = ['#ea4c89', '#ea4c89' ]
    default:
      colors = ['#52c5fc', '#fecf3c'];
      break;
  }

  // Clear: {backgroundColor: '#f48d25'},
  // Sunny: {backgroundColor: '#f48d25'},
  // Cloudy: {backgroundColor: '#282168'},
  // Rainy: {backgroundColor: '#41536e'},
  // Stormy: {backgroundColor: '#ea4c89'},
  // Snowy: {backgroundColor: '#2e76dc'},
  // Overcast: {backgroundColor: '#f48d25'},
  // Foggy: {backgroundColor: '#282168'},
  // Drizzly: {backgroundColor: '#ea4c89'},
  // Thundry: {backgroundColor: '#2e76dc'},
  // 'Light rain': {backgroundColor: '#41536e'},
  // 'Patchy rain': {backgroundColor: '#41536e'},
  // 'Light rain shower': {backgroundColor: '#41536e'},
  // 'Patchy rain possible': {backgroundColor: '#282168'},
  // 'Partly cloudy': {backgroundColor: '#282168'},
  // 'Moderate or heavy rain with thunder': {backgroundColor: '#ea4c89'},
  // 'Patchy light rain with thunder': {backgroundColor: '#ea4c89'},

  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <LinearGradient colors={colors} start={start} end={end} style={[styles.container, style]}>
        {children}
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LocationGradient;
