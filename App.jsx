import React from 'react';
import { StyleSheet, View } from 'react-native';
import Splash from './src/screens/Splash';
import LoginPage from './src/components/LoginPage';
import Navigation from './src/components/Navigation';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Splash /> */}
      {/* <LoginPage /> */}
      <Navigation/>
    </View>
  );
};

export default App;
