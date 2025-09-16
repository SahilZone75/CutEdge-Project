import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';

const Task5 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the App</Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.unsplash.com/photo-1543332164-6e82f355badc?w=600&auto=format&fit=crop&q=60',
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('button is pressed')}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Task5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1666cfff',
    justifyContent: 'center', //vertically
    alignItems: 'center', //horizontally
    paddingHorizontal: 20,
    gap: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
    letterSpacing: 2,
    textTransform: 'uppercase',
    textShadowColor: 'rgba(0,0,0,10)',
    textShadowOffset: { width: 2, height: 2 }, //shadow position
    textShadowRadius: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 16,
  },
  button: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 6,
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    letterSpacing: 6,
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: '600',
  },
});

//! TouchableOpacity
//* TouchableOpacity in React Native is a pressable component that works like a button.
//? When the user taps on it, the view’s opacity decreases slightly, giving a fade effect.
//? It’s mainly used to create custom buttons with your own styles (background color, border, icons, etc.).
