import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EmailVerificationScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  return (
    <ImageBackground
      source={require('../assests/Images/spl.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Please enter your Registered email ID</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          We will send a verification code to your registered email ID
        </Text>

        {/* Email Label */}
        <Text style={styles.label}>Email</Text>

        {/* Email Input */}
        <View style={styles.inputWrapper}>
          <Icon
            name="email-outline"
            size={22}
            color="#aaa"
            style={styles.icon}
          />
          <TextInput
            placeholder="example@gmail.com"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('OtpScreen')}
        >
          <Text style={styles.buttonText}>Send Verification Code</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default EmailVerificationScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 80,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
    marginHorizontal: 15,
  },
  subtitle: {
    fontSize: 14,
    color: '#bbafafd0',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 40,
    marginHorizontal: 35,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
    marginLeft: 3,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 10,
    height: 50,
    marginBottom: 60,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: '#fff',
  },
  button: {
    backgroundColor: '#f5731dff',
    borderRadius: 12,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
