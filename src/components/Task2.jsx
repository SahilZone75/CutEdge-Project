import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Task2 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assests/Images/image.jpg')}
        style={styles.img}
      />
      <Text style={styles.text}>Bajrang Punia</Text>
      <Text style={styles.description}>
        Bajrang Punia (born 26 February 1994) is an Indian freestyle wrestler
        and politician.
      </Text>
    </View>
  );
};

export default Task2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34349bff',
    alignItems: 'center',
    gap: 10,
    marginTop: 200,
  },
  img: {
    height: 210,
    width: 210,
    borderWidth: 7,
    borderColor: '#e97228ff',
    borderRadius: 200,
    marginTop: 25,
  },
  text: {
    marginTop: 10,
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  description: {
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 450,
  },
});
