import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import Navigation from './modules/Navigation';

const App = () => {
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <Navigation />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#ffffff",
  }
});

export default App;

