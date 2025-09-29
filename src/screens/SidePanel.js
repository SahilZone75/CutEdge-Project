// SidePanel.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import Login from '../components/LoginPage'

export default function SidePanel({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatarWrapper}>
          <Image
            source={require('../assests/Images/spl2.png')}
            style={styles.avatar}
          />
        </View>
        <View style={styles.textFont}>
          <Text style={styles.welcome1}>Welcome to</Text>
          <Text style={styles.welcome2}>Dangal Arena!</Text>
        </View>
      </View>

      <View style={styles.menuSection}>
        <MenuItem
          icon={
            <Ionicons
              name="information-circle-outline"
              size={22}
              color="#fff"
            />
          }
          label="About Us"
        />
        <MenuItem
          icon={<Ionicons name="help-circle-outline" size={22} color="#fff" />}
          label="FAQ's"
        />
        <MenuItem
          icon={
            <MaterialCommunityIcons
              name="file-document-outline"
              size={22}
              color="#fff"
            />
          }
          label="Terms & Condition"
        />
        <MenuItem
          icon={<Feather name="lock" size={22} color="#fff" />}
          label="Privacy Policy"
        />
        <MenuItem
          icon={<Feather name="share-2" size={22} color="#fff" />}
          label="Share App"
        />
        <MenuItem
          icon={<Ionicons name="star-outline" size={22} color="#fff" />}
          label="Share App"
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('Login')}
      >
        <Ionicons name="log-in-outline" size={18} color="#fff" />
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function MenuItem({ icon, label }) {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuIcon}>{icon}</View>
      <Text style={styles.menuLabel}>{label}</Text>
      <Ionicons
        name="chevron-forward"
        size={20}
        color="#fff"
        style={{ marginLeft: 'auto' }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#241E78',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 15,
    justifyContent: 'flex-start',
  },
  header: {
    alignItems: 'center',
    marginBottom: 22,
    flexDirection: 'row',
    gap: 20,
  },
  avatarWrapper: {
    backgroundColor: '#fff',
    borderRadius: 36,
    padding: 2,
    marginBottom: 8,
    width: 52,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    resizeMode: 'cover',
  },
  welcome1: {
    color: '#fff',
    fontSize: 13,
  },
  welcome2: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 2,
  },
  menuSection: {
    flex: 1,
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    borderBottomWidth: 0.5,
    borderColor: '#ffffff29',
    marginRight: 8,
  },
  menuIcon: {
    marginRight: 17,
    backgroundColor: 'transparent',
  },
  menuLabel: {
    color: '#fff',
    fontSize: 15,
    flex: 1,
  },
  loginBtn: {
    backgroundColor: '#FE8B1B',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 23,
    paddingVertical: 9,
    borderRadius: 6,
    marginTop: 12,
    position: 'absolute',
    bottom: 22,
    left: 19,
  },
  loginText: {
    fontSize: 15,
    color: '#fff',
    marginLeft: 7,
    fontWeight: '700',
  },
});
