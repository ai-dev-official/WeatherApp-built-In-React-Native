import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TodayScreen from '../components/TodayScreen';
import TomorrowScreen from '../components/TomorrowScreen';
// import SevenDayScreen from '../components/SevenDayScreen';
import LandingScreen from '../components/LandingScreen';
import SearchScreen from '../components/SearchScreen';
import MyLocationScreen from '../components/MyLocationScreen';


const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingScreen">
           <Stack.Screen
            name="MyLocationScreen"
            component={MyLocationScreen}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{headerShown: false}}
          />
           <Stack.Screen
            name="LandingScreen"
            component={LandingScreen}
            options={{headerShown: false}}
          />
        <Stack.Screen
            name="TodayScreen"
            component={TodayScreen}
            options={{headerShown: false}}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
const styles = StyleSheet.create({});
export default Navigation;


