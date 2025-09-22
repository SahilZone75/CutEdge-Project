import React from 'react';
import { StyleSheet, View } from 'react-native';
import Splash from './src/screens/Splash';
import LoginPage from './src/components/LoginPage';
import Navigation from './src/components/Navigation';
import LatestUpdateScreen from './src/components/LatestUpdateScreen';
import Register from './src/components/Register';
import EmailVerificationScreen from './src/screens/EmailVerificationScreen';
import OtpScreen from './src/screens/OtpScreen';
import Coaches from './src/screens/Coaches';
import Referees from './src/screens/Referees';
import ResetPassword from './src/screens/ResetPassword';
import Dangal from './src/screens/Dangal';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navigation />
      {/* <LatestUpdateScreen/> */}
      {/* <Register/> */}
      {/* <EmailVerificationScreen/> */}
      {/* <OtpScreen/> */}
      {/* <Coaches/> */}
      {/* <Referees/> */}
      {/* <ResetPassword/> */}
      {/* <Dangal/> */}
    </View>
  );
};

export default App;
