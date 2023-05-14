import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LocationGradient = ({ children, nowWeather, start, end, style }) => {
  let colors = [];

  switch (nowWeather) {
    case 'sunny':
      colors = ['#eebe17', '#f48d25'];
      break;
    case 'rainy':
      colors = ['#6f8496', '#41536e'];
      break;
    case 'cloudy':
      colors = ['#8364a0', '#282168'];
      break;
    case 'stormy':
      colors = ['#303F9F', '#1A237E'];
      break;
    case 'snowy':
      colors = ['#74bdfd', '#2a71dd'];
      break;
    default:
      colors = ['#52c5fc', '#fecf3c'];
      break;
  }

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
