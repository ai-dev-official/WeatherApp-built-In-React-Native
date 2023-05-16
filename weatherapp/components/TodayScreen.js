import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import LocationUpper from '../modules/LocationUpper';
import GradientBackground from '../modules/Gradient';
import LocationLower from '../modules/LocationLower';

const TodayScreen = () => {
  const navigation = useNavigation();

  const [weatherCondition, setWeatherCondition] = useState('');
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollViewRef = useRef();

  useEffect(() => {
    setWeatherCondition('Snowy');
  }, []);

  const handleNavigation = () => {
    navigation.navigate('LandingScreen');
  };

  

  const {width} = Dimensions.get('window');

  const handleScroll = event => {
    const slide = Math.ceil(event.nativeEvent.contentOffset.x / width);
    if (slide !== activeSlide) {
      setActiveSlide(slide);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const newIndex = activeSlide === 2 ? 0 : activeSlide + 1;
      setActiveSlide(newIndex);
      scrollViewRef.current.scrollTo({x: newIndex * width, animated: false});
    }, 900000);

    return () => clearInterval(timer);
  }, [activeSlide]);

  const renderDots = () => {
    return (
      <View style={styles.dotContainer}>
        {[...Array(3)].map((_, i) => (
          <Text
            key={i}
            style={[styles.dot, activeSlide === i && styles.activeDot]}></Text>
        ))}
      </View>
    );
  };


  return (
    <GradientBackground weatherCondition={weatherCondition}>
      <View onPress={handleNavigation} style={styles.container}>
        <LocationUpper />
        <LocationLower />
      </View>
    </GradientBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontWeight: 700,
    fontSize: 24,
  },
});
export default TodayScreen;
