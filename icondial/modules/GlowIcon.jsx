import React, { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import ANTICON from 'react-native-vector-icons/AntDesign';
// import Icon from './IconsButtons';
import Icon from 'react-native-vector-icons/AntDesign';


const GlowIcon = ({ name, color, size, isActive }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: isActive ? 1 : 0,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [animatedValue, isActive]);

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 0.8],
  });

  const glowingColor = `rgba(${color}, ${opacity})`;
//   const icon = Icon.icon;
  return (
    <Animated.View style={{ opacity }}>
      {/* <Icon name={name} size={size} color={glowingColor} /> */}
      <ANTICON name={name} size={28} color={glowingColor} />
    </Animated.View>
  );
};

export default GlowIcon;
