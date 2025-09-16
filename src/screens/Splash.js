import React, { useEffect } from 'react';
import { StyleSheet, ImageBackground, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Make sure this name matches your stack screen
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../assests/Images/spl.png')} // check folder spelling
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.haloWrapper}>
        <View style={[styles.haloCircle, { width: 900, height: 900, borderRadius: 450, borderColor: 'rgba(255, 255, 255, 0.07)' }]} />
        <View style={[styles.haloCircle, { width: 750, height: 750, borderRadius: 400, borderColor: 'rgba(255, 255, 255, 0.07)' }]} />
        <View style={[styles.haloCircle, { width: 600, height: 600, borderRadius: 350, borderColor: 'rgba(255, 255, 255, 0.07)' }]} />
        <View style={[styles.haloCircle, { width: 450, height: 450, borderRadius: 300, borderColor: 'rgba(255, 255, 255, 0.07)' }]} />
        <View style={[styles.haloCircle, { width: 300, height: 300, borderRadius: 300, borderColor: 'rgba(255, 255, 255, 0.07)' }]} />

        <Image
          source={require('../assests/Images/spl2.png')} // check folder spelling
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  haloWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  haloCircle: {
    position: 'absolute',
    borderWidth: 1,
  },
  logo: {
    width: 200,
    height: 200,
  },
});
