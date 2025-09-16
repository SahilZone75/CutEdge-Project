import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';

const Task1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.Btn}>
          <Text style={styles.txtBtn}>Haryana</Text>
        </TouchableOpacity>
        <Text style={styles.txt}>Haryana state championship</Text>
        <View style={styles.belowContainer}>
          <Image
            source={require('../assests/Images/img-2.png')}
            style={{
              width: 20,
              height: 20,
            }}
          />
          <Text style={styles.dateText}>{new Date().toDateString()}</Text>
          <Image
            source={require('../assests/Images/img-1.png')}
            style={{
              width: 20,
              height: 20,
            }}
          />
          <Text style={styles.locationText}>Rohtak</Text>
        </View>
      </View>
    </View>
  );
};

export default Task1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34349bff',
    margin: 10,
    padding: 15,
    marginTop: 220,
  },
  innerContainer: {
    borderWidth: 2,
    borderColor: '#8d8d8d7d',
    borderRadius: 6,
  },
  Btn: {
    backgroundColor: '#ec6009ff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 120,
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 25,
    marginHorizontal: 15,
  },
  txtBtn: {
    color: 'white',
    fontWeight: 'bold',
  },
  txt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 10,
  },
  belowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginHorizontal: 10,
    marginTop: 15,
    marginBottom: 30,
  },
  dateText: {
    color: '#9b9999ff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  locationText: {
    color: '#9b9999ff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
