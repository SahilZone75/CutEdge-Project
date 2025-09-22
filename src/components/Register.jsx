import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Register = ({ navigation }) => {
  // ─── States ─────────────────────────────────────────────
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* ─── Title / Subtitle ───────────────────────────── */}
      <Text style={styles.title}>Create an Account</Text>
      <Text style={styles.para}>
        Create an account to save your team, club & league preferences.
      </Text>

      {/* ─── Name ───────────────────────────────────────── */}
      <Text style={styles.label}>Name</Text>
      <TextInput
        placeholder="type here"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
        style={styles.inputName}
      />

      {/* ─── Email ──────────────────────────────────────── */}
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

      {/* ─── Password ───────────────────────────────────── */}
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

      {/* ─── Sign In Button ─────────────────────────────── */}
      <TouchableOpacity style={styles.signIn}>
        <Text style={styles.signIntext}>Sign in</Text>
      </TouchableOpacity>

      {/* ─── Divider Line ───────────────────────────────── */}
      <View style={styles.containerLine}>
        <View style={styles.line} />
        <Text style={styles.textLine}>or</Text>
        <View style={styles.line} />
      </View>

      {/* ─── Bottom Text ────────────────────────────────── */}
      <Text style={styles.bottomText}>
        Already have an account?{' '}
        <Text
          style={{ color: '#ffffffff', fontSize: 15 }}
          onPress={() => navigation.navigate('Login')}
        >
          Log In
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default Register;

// ─── Styles ─────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    paddingTop: 60,
    backgroundColor: '#252579',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  para: {
    color: '#aea6a6ff',
    fontSize: 15,
    fontWeight: 600,
    textAlign: 'center',
    marginHorizontal: 40,
    marginBottom: 35,
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  inputName: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    borderColor: '#666',
    height: 55,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
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
  signIn: {
    backgroundColor: '#ff7f27',
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
  },
  signIntext: {
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
