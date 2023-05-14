import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import RightPng from '../assets/a2.webp';

const LocationUpper = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.textA}>Nuuk</Text>
      <Text style={styles.textB}>Today, 7 Sep</Text>
      <Image source={RightPng} style={styles.image}/>
        <Text style={styles.textC}>-6°</Text>
      <Text style={styles.textD}>Snowy</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        top: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        height: '60%',
    },
    textA: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 700,
        marginBottom: 10,
    },
    textB: {
        color: '#ffffff',
        fontWeight: 500,
    },
    image:{
        height: 280,
        width: 280,
        marginTop: -20
    },
    textC:{
        fontSize: 50,
        color: '#ffffff',
        fontWeight: 600,
        marginBottom: 10,
        marginTop: -20
    },
    textD : {
        color: '#ffffff',
        fontWeight: 500,
    }
});
export default LocationUpper;


