import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import TodayBannerImage from '../assets/a1.webp';

const TodayImage = () => {
  return (
    <View style={styles.imagecontainer}>
      <Image source={TodayBannerImage} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  imagecontainer: {
    display: 'flex',
    alignItems: 'center',
    height: '50%',
  },
  image: {
    width: 320,
    height: 320,
  },
});

export default TodayImage;
