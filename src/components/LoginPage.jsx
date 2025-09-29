import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <View style={styles.inputWrapper}>
        <Icon
          name="email-outline"
          size={22}
          color="white"
          style={styles.icon}
        />
        <TextInput
          placeholder="example@gmail.com"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>
      {/* Password */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          style={styles.input}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={22}
            color="#aaa"
            style={styles.iconRight}
          />
        </TouchableOpacity>
      </View>

      {/* //* Remember Me */}
      <TouchableOpacity
        style={styles.rememberMe}
        onPress={() => setRemember(!remember)}
      >
        <Text style={styles.checkbox}>{remember ? '✔' : '◯'}</Text>
        <Text style={styles.rememberText}>Remember me</Text>
      </TouchableOpacity>

      {/* //* Log In Button */}
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('RootDrawer')} //Home
      >
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      {/* //* Lines etc */}
      <View style={styles.containerLine}>
        <View style={styles.line} />
        <Text style={styles.textLine}>or</Text>
        <View style={styles.line} />
      </View>

      <Text
        style={{
          color: '#ad4500ff',
          textAlign: 'center',
          marginBottom: 20,
          fontWeight: 'bold',
          fontSize: 16,
        }}
        onPress={() => navigation.navigate('EmailVerificationScreen')}
      >
        Forgot password?
      </Text>
      {/* ─── Bottom Text ────────────────────────────────── */}
      <Text style={styles.bottomText}>
        Don't have an account yet ?{' '}
        <Text
          style={{ color: '#ffffffff', fontSize: 15 }}
          onPress={() => navigation.navigate('Register')} // Sign up
        >
          Sign up
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#252579',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 35,
    textAlign: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.1)',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 55,
    color: '#fff',
  },
  icon: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    marginLeft: 10,
  },
  checkbox: {
    color: 'limegreen',
    fontSize: 18,
  },
  rememberText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 15,
  },
  loginBtn: {
    backgroundColor: '#ff7f27',
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginTop: 100,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#c4bcbc45',
  },
  textLine: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#ffffffff',
  },
  bottomText: {
    fontSize: 16,
    color: '#aba4a4e4',
    fontWeight: 400,
    textAlign: 'center',
    marginBottom: 20,
  },
});
