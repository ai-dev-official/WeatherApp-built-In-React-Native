import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientBackground = ({children, weatherCondition}) => {
  let colors = [];

  switch (weatherCondition) {
    case' Clear':
    case 'Sunny':
      colors = ['#eebe17', '#f48d25'];
      break;
    case 'Rainy':
    case 'Drizzly':
    case 'Light rain':
    case 'Patchy rain':
    case 'Light rain shower':
    case 'Patchy rain possible':
    case 'Patchy light rain with thunder':
      colors = ['#6f8496', '#41536e'];
      break;
    case 'Cloudy':
    case 'Foggy':
    case 'Overcast':
    case 'Partly cloudy':
      colors = ['#8364a0', '#282168'];
      break;
    case 'Stormy':
    case 'Windy':
    case 'Thundry':
      colors = ['#f4a5c3', '#eb5690'];
      break;
      case 'Snowy':
      colors = ['#74bdfd', '#2a71dd'];
      break;
    default:
      colors = ['#52c5fc', '#fecf3c'];
      break;
  }


  //#6f8496 #41536e,  #8364a0  #282168, #eebe17 #f48d25, #7cbaf4 #2e76dc
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <LinearGradient colors={colors} style={styles.container}>
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

export default GradientBackground;
