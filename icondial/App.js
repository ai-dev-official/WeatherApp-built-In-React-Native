import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CenterButton from './components/CenterButton';
import GradientBackground from './modules/Gradient';
import RadialGradient from 'react-native-radial-gradient';



const App = () => {
  return (
    <View style={styles.container} >
       <GradientBackground>
      <CenterButton />
      </GradientBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default App;


