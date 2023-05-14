import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {SCREEN_WIDTH} from '../modules/ScreenDimensions';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import Icon from '../modules/IconsButtons';
import IconIndicator from '../modules/Indicators';

const CIRCLE_SIZE = SCREEN_WIDTH * 0.9;
const BUTTON_SIZE = CIRCLE_SIZE / 3;

export type IconName =
  | 'home'
  | 'search1'
  | 'staro'
  | 'pluscircleo'
  | 'setting'
  | 'arrowleft';

export const icons: {name: IconName; screen: string}[] = [
  {name: 'home', screen: 'HomeScreen'},
  {name: 'search1', screen: 'SearchScreen'},
  {name: 'staro', screen: 'FavoritesScreen'},
  {name: 'pluscircleo', screen: 'AddScreen'},
  {name: 'setting', screen: 'SettingsScreen'},
  {name: 'arrowleft', screen: 'BackScreen'},
];

const DialButton = () => {
  const scale = useSharedValue(0);
  const open = useSharedValue(0);
  const selectedIcon = useSharedValue(0);

  const circleAStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  const navigation = useNavigation();

  const handlePress = () => {
    if (scale.value === 0) {
      scale.value = withTiming(1, {duration: 700}, finished => {
        if (finished) {
          open.value = 1;
        }
      });
    } else {
      scale.value = withTiming(0, {duration: 700}, finished => {
        if (finished) {
          open.value = 0;
        }
      });
    }
  };

  const handleIconPress = (index: number) => {
    selectedIcon.value = withTiming(index);
    navigation.navigate('CorrectionScreen');
  };

  const buttonContainerAStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(
        scale.value,
        [0, 1],
        [CIRCLE_SIZE / 2.6, CIRCLE_SIZE / 2.2],
      ),
      height: interpolate(
        scale.value,
        [0, 1],
        [CIRCLE_SIZE / 2.6, CIRCLE_SIZE / 2.2],
      ),
      borderRadius: CIRCLE_SIZE / 2.2,
    };
  });

  const handleNavigation = () => {
    navigation.navigate('HomeScreen');
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.text1}>Icon Dialodrome!</Text>
      </View>
      <View style={styles.parent}>
        <Animated.View style={[styles.buttonContainer, buttonContainerAStyle]}>
          <View style={styles.buttonBorder}>
            <Pressable style={styles.button} onPress={handlePress}>
              <IconIndicator selectedIcon={selectedIcon} />
            </Pressable>
          </View>
        </Animated.View>
        <Animated.View style={[styles.circle, circleAStyle]}>
          {icons.map((icon, i) => (
            <Icon
              selectedIcon={selectedIcon}
              onPress={() => handleIconPress(i)}
              open={open}
              icon={icon}
              key={i}
              index={i}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};

export default DialButton;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  parent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    marginTop: 20,
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    backgroundColor: '#7dd3fc',
  },
  buttonContainer: {
    zIndex: 1,
    backgroundColor: '#7dd3fc',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  buttonBorder: {
    backgroundColor: '#38bdf8',
    alignItems: 'center',
    justifyContent: 'center',
    width: CIRCLE_SIZE / 2.6,
    height: CIRCLE_SIZE / 2.6,
    borderRadius: CIRCLE_SIZE / 2.6,
  },
  button: {
    backgroundColor: '#e11d48',
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  gradient: {
    flex: 1,
    paddingBottom: 20,
    paddingHorizontal: 20,
    // borderRadius: 18,
    alignContent: 'flex-start',
    justifyContent: 'flex-end',
  },
  text: {
    width: CIRCLE_SIZE,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginBottom: -70,
  },
  text1: {
    fontSize: 24,
    fontWeight: 700,
    color: '#ffffff',
    alignSelf: 'center',
  },
});
