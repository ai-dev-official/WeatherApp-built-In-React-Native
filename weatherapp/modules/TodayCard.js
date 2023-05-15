import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import RightPng from '../assets/right.png';
import {useNavigation} from '@react-navigation/native';

const TodayCard = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollViewRef = useRef();

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

  const navigation = useNavigation();
  
    const handleNavigation1 = () => {
        navigation.navigate('SearchScreen')
    }

    const handleNavigation = () => {
      const newIndex = activeSlide === 2 ? 0 : activeSlide + 1;
      setActiveSlide(newIndex);
      scrollViewRef.current.scrollTo({ x: newIndex * width, animated: true });
    };
  

  return (
    <View style={styles.slideStyle}>
      {renderDots()}
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}>
        <View style={styles.slide}>
          <View style={styles.textContainer}>
            <Text style={styles.textBig}>Weather App</Text>
            <Text style={styles.textSmall}>Discover the weather in your</Text>
            <Text style={styles.textSmall}>city and plan your day</Text>
            <Text style={styles.textSmall}>correctly</Text>
          </View>
          <View style={styles.bigbuttonA}>
            <TouchableOpacity onPress={handleNavigation} syle={styles.button}>
              <View style={styles.bigbutton}>
                <Image source={RightPng} style={styles.image} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.slide}>
          <View style={styles.textContainer}>
            <Text style={styles.textBig}>Be prepared</Text>
            <Text style={styles.textSmall}>
              Stay prepared for any weather
            </Text>
            <Text style={styles.textSmall}>with our accurate forecasts</Text>
            <Text style={styles.textSmall}>
              Get real-time updates on weather,
            </Text>
          </View>
          <View style={styles.bigbuttonA}>
            <TouchableOpacity onPress={handleNavigation} syle={styles.button}>
              <View style={styles.bigbutton}>
                <Image source={RightPng} style={styles.image} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.slide}>
          <View style={styles.textContainer}>
            <Text style={styles.textBig}>Weather Forecast</Text>
            <Text style={styles.textSmall}>
              Get real-time weather updates
            </Text>
            <Text style={styles.textSmall}>
              and plan your activities accordingly
            </Text>
            <Text style={styles.textSmall}>with our reliable weather app</Text>
          </View>
          <View style={styles.bigbuttonA}>
            <TouchableOpacity onPress={handleNavigation1} syle={styles.button}>
              <View style={styles.bigbutton}>
                <Image source={RightPng} style={styles.image} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  slideStyle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    height: '47%',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 50,
    marginBottom: 30,
  },
  slide: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 240,
    width: 370,
  },

  textContainer: {
    width: 350,
    height: 240,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 35,
  },
  textBig: {
    fontSize: 32,
    marginVertical: 30,
    fontWeight: 700,
  },
  textSmall: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 700,
  },
  bigbutton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 50,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: '#438bea',
  },
  bigbuttonA: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    height: 65,
    borderRadius: 50,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: '#438bea',
    backgroundColor: '#438bea',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderColor: 'blue',
    zIndex: 999999,
  },
  image: {
    tintColor: '#ffffff',
    width: 50,
    height: 50,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 5,
    // marginVertical: 5,
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: '#eef1f4',
    borderColor: '#eef1f4',
    borderWidth: 2,
  },
  activeDot: {
    backgroundColor: '#0084fd',
    borderColor: '#0084fd',
  },
});
export default TodayCard;
