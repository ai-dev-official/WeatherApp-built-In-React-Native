import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import SnowIcon from '../assets/snow.png';
import SunIcon from '../assets/sun.png';
import DropIcon from '../assets/drop.png';
import WindIcon from '../assets/wind.png';

const LocationLower = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tableup}>
        <View
          style={[
            styles.cellcontainer,
            {
              borderRightWidth: 0.2,
              borderRightColor: '#f2f2f2',
              paddingHorizontal: 15,
            },
          ]}>
          <View style={[styles.cellup, {}]}>
            <Image
              source={SunIcon}
              style={[styles.icon, {tintColor: '#bed7f9'}]}
            />
            <Text style={[styles.text, {fontSize: 12}]}>UV INDEX</Text>
          </View>
          <View>
            <Text style={[styles.text, {fontSize: 20, marginTop: 5}]}>1</Text>
          </View>
        </View>
        <View
          style={[
            styles.cellcontainer,
            {
              borderRightWidth: 0.2,
              borderRightColor: '#f2f2f2',
              paddingHorizontal: 15,
            },
          ]}>
          <View style={[styles.cellup, {}]}>
            <Image
              source={WindIcon}
              style={[styles.icon, {tintColor: '#96aff1'}]}
            />
            <Text style={[styles.text, {fontSize: 12}]}>WIND</Text>
          </View>
          <View>
            <Text style={[styles.text, {fontSize: 20, marginTop: 5}]}>
              1 m/s
            </Text>
          </View>
        </View>
        <View style={[styles.cellcontainer, {paddingHorizontal: 15}]}>
          <View style={styles.cellup}>
            <Image
              source={DropIcon}
              style={[styles.icon, {tintColor: '#6ab9fe'}]}
            />
            <Text style={[styles.text, {fontSize: 12}]}>HUMIDITY</Text>
          </View>
          <View>
            <Text style={[styles.text, {fontSize: 20, marginTop: 5}]}>91%</Text>
          </View>
        </View>
      </View>
      <View style={styles.tabledown}>
        <View style={styles.cellcol}>
          <Text style={[styles.text, {fontSize: 12, marginBottom: 10}]}>NOW</Text>
          <Image
            source={WindIcon}
            style={[styles.icon, {tintColor: '#bed7f9'}]}
          />
          <Text style={[styles.text, {fontSize: 20, marginTop: 5}]}>-6°</Text>
        </View>
        <View style={styles.cellcol}>
          <Text style={[styles.text, {fontSize: 12, marginBottom: 10}]}>6.00 PM</Text>
          <Image
            source={WindIcon}
            style={[styles.icon, {tintColor: '#bed7f9'}]}
          />
          <Text style={[styles.text, {fontSize: 20, marginTop: 5}]}>-6°</Text>
        </View>
        <View style={styles.cellcol}>
          <Text style={[styles.text, {fontSize: 12, marginBottom: 10}]}>7.00 PM</Text>
          <Image
            source={SnowIcon}
            style={[styles.icon, {tintColor: '#bed7f9'}]}
          />
          <Text style={[styles.text, {fontSize: 20, marginTop: 5}]}>-5°</Text>
        </View>
        <View style={styles.cellcol}>
          <Text style={[styles.text, {fontSize: 12, marginBottom: 10}]}>8.00 PM</Text>
          <Image
            source={SnowIcon}
            style={[styles.icon, {tintColor: '#bed7f9'}]}
          />
          <Text style={[styles.text, {fontSize: 20, marginTop: 5}]}>-5°</Text>
        </View>
        <View style={styles.cellcol}>
          <Text style={[styles.text, {fontSize: 12, marginBottom: 10}]}>9.00 PM</Text>
          <Image
            source={SnowIcon}
            style={[styles.icon, {tintColor: '#bed7f9',}]}
          />
          <Text style={[styles.text, {fontSize: 20, marginTop: 5}]}>-4°</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 5,
  },
  tableup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2575e3',
    borderRadius: 25,
    marginBottom: 20,
  },
  cellcontainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellup: {
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
    height: 15,
    width: 15,
    tintColor: '#ffffff',
    marginRight: 5,
  },
  text: {
    color: '#ffffff',
  },
  tabledown: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#1967de',
    borderRadius: 25,
    marginBottom: 20,
  },
  cellcol: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default LocationLower;
