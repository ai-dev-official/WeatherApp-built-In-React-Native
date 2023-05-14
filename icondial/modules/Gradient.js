import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientBackground = ({children}) => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <LinearGradient colors={['#fb7185', '#6d28d9']} style={styles.container}>
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
