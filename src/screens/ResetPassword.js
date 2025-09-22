import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ResetPassword = ({ navigation }) => {
  const [secure, setSecure] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subTitle}>
        Enter your new password to continue the app.
      </Text>

      {/* New Password */}
      <View style={styles.firstInputBox}>
        <Text style={{ color: 'white', fontSize: 16, marginTop: 50 }}>
          New Password
        </Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="●●●●●●●●"
            placeholderTextColor="gray"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secure}
            style={{ color: 'white', flex: 1 }}
          />
          <TouchableOpacity
            onPress={() => setSecure(!secure)}
            style={{ paddingLeft: 10 }}
          >
            <Icon name={secure ? 'eye-off' : 'eye'} size={25} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Confirm New Password */}
      <View style={styles.secondInputBox}>
        <Text style={{ color: 'white', fontSize: 16 }}>
          Confirm New Password
        </Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="●●●●●●●●"
            placeholderTextColor="gray"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={secure}
            style={{ color: 'white', flex: 1 }}
          />
          <TouchableOpacity
            onPress={() => setSecure(!secure)}
            style={{ paddingLeft: 10 }}
          >
            <Icon name={secure ? 'eye-off' : 'eye'} size={25} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>

      {/* Resend Code Text */}
      <TouchableOpacity style={styles.resendContainer}>
        <Text style={styles.resendText}>
          Didn’t receive code?{' '}
          <Text style={styles.resendLink}>Resend Code</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121858',
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 100,
  },
  title: {
    color: 'white',
    fontWeight: '600',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 15,
  },
  subTitle: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#ffffff10',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 20,
    borderRadius: 12,
    marginBottom: 20,
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
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  resendContainer: {
    marginTop: 220,
    alignItems: 'center',
  },
  resendText: {
    color: 'gray',
    fontSize: 16,
  },
  resendLink: {
    color: '#ffffffc5',
  },
});
