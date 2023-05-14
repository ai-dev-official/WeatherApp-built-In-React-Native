import {StyleSheet, ImageBackground, Text, View} from 'react-native';
import React from 'react';
import TodayCard from '../modules/TodayCard';
import GradientBackground from '../modules/Gradient';
import TodayImage from '../modules/TodayImage';

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <GradientBackground>
        <TodayImage />
        <TodayCard />
      </GradientBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default LandingScreen;
