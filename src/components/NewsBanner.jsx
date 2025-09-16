import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const NewsBanner = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assests/Images/India.png')}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

export default NewsBanner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252579',
    padding: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 8,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 6,
  },
});
