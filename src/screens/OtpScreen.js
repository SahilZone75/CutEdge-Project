// OtpScreen.js
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const OtpScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Verification Code</Text>
      <Text style={styles.subtitle}>
        We’ve sent an OTP verification code to your email
      </Text>

      <View style={styles.otpContainer}>
        <TextInput
          style={styles.otpInput}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={styles.otpInput}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={styles.otpInput}
          keyboardType="numeric"
          maxLength={1}
        />
        <TextInput
          style={styles.otpInput}
          keyboardType="numeric"
          maxLength={1}
        />
      </View>

      <TouchableOpacity style={styles.verifyButton} onPress={()=> navigation.navigate("ResetPassword") }>
        <Text style={styles.verifyText}>Verify</Text>
      </TouchableOpacity>

      <Text style={styles.resendText}>
        Didn’t receive code? <Text style={styles.resendLink}>Resend Code.</Text>
      </Text>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#252579',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    marginTop: 80,
  },
  subtitle: {
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 40,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 40,
  },
  otpInput: {
    width: 50,
    height: 55,
    borderWidth: 1,
    borderColor: '#ccc',
    color: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  verifyButton: {
    backgroundColor: '#FF7F2E',
    width: '80%',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  verifyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendText: {
    color: '#ccccccb1',
    marginTop: 400,
  },
  resendLink: {
    color: '#ffffffd2',
  },
});
