import {StyleSheet, Pressable, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import ANTICON from 'react-native-vector-icons/AntDesign';

import {SCREEN_WIDTH} from './ScreenDimensions';
import {IconName} from '../components/CenterButton';
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,

} from 'react-native-reanimated';

const VIEW_SIZE = 80;
const CIRCLE_SIZE = SCREEN_WIDTH * 0.9;
const CIRCLE_RADIUS = CIRCLE_SIZE / 2;
const ANGLE_PER_VIEW = Math.PI / 3;
const START_ANGLE = (-1 * Math.PI) / 2;
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type Props = {
  index: number;
  icon: IconName;
  open: Animated.SharedValue<number>;
  onPress: (index: number) => void;
  selectedIcon: Animated.SharedValue<number>;
  highlightIndex: number | undefined;
};

const Icon: React.FC<Props> = ({
  index,
  icon,
  open,
  onPress,
  selectedIcon,
  highlightIndex,
}) => {
  const angle = START_ANGLE + ANGLE_PER_VIEW * index;
  const angleFirstIcon = START_ANGLE;

  const progress = useSharedValue(0);
  const opacity = useSharedValue(0);
  const [iconColor, setIconColor] = useState('#ffffff');
  const [active, setActive] = useState(false);

  useAnimatedReaction(
    () => open.value,
    value => {
      if (value === 1) {
        opacity.value = withTiming(1, {duration: 300});
        progress.value = withTiming(1, {duration: 300});
      } else {
        progress.value = 0;
        opacity.value = 0;
      }
    },
  );

  const isHighlighted = highlightIndex === index;

  const animatedStyle = useAnimatedStyle(() => {
    const currentAngle =
      angleFirstIcon + progress.value * (angle - angleFirstIcon);
    const x =
      CIRCLE_RADIUS +
      (CIRCLE_RADIUS - VIEW_SIZE / 2) * Math.cos(currentAngle) -
      VIEW_SIZE / 2;
    const y =
      CIRCLE_RADIUS +
      (CIRCLE_RADIUS - VIEW_SIZE / 2) * Math.sin(currentAngle) -
      VIEW_SIZE / 2;

    return {
      transform: [{translateX: x}, {translateY: y}],
      opacity: progress.value,
    };
  });

  useAnimatedReaction(
    () => selectedIcon.value,
    value => {
      if (value === index) {
        runOnJS(setIconColor)('#393839');
      } else {
        runOnJS(setIconColor)('#ffffff');
      }
    },
  );

  const onPressIn = () => {
    runOnJS(setIconColor)('#393839');
  };

  const onPressOut = () => {
    if (selectedIcon.value !== index) {
      runOnJS(setIconColor)('#ffffff');
    }
  };

  const onPressIcon = () => {
    onPress(index);
  };

  return (
    
      <AnimatedPressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPressIcon}
      style={[styles.iconContainer, animatedStyle]}>
        <TouchableOpacity>
      <ANTICON name={icon} size={28} color={iconColor} />
      </TouchableOpacity>
      {isHighlighted && <View style={styles.highlight} />}
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    width: VIEW_SIZE,
    height: VIEW_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    overflow: 'hidden',
    borderRadius: 40,
  },
  highlight: {
    position: 'absolute',
    width: 28,
    height: 2,
    borderRadius: 2,
    backgroundColor: '#393839',
    bottom: 0,
  },
});

export default Icon;
