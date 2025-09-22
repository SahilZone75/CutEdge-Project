import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
  const [input, setInput] = useState('');
  const [customHeader, setCustomHeader] = useState(false);

  return (
    <View>
      {customHeader ? (
        // ===== Custom Header =====
        <View style={styles.customHeader}>
          {/* Upper Section */}
          <View style={styles.upper}>
            <View>
              <Text style={styles.welcomeText}>Welcome Back !</Text>
              <Text style={styles.profileText}>Olivia Rhhye</Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnTxt}>Complete Profile</Text>
            </TouchableOpacity>
          </View>

          {/* Lower Section */}
          <View style={styles.lower}>
            {/* Search Input */}
            <View style={styles.lower1}>
              <Icon
                name="magnify"
                size={30}
                color="#fff"
                style={styles.searchIcon}
              />
              <TextInput
                placeholder="Search here...."
                placeholderTextColor="#fff"
                value={input}
                onChangeText={setInput}
                style={styles.textInput}
              />
            </View>

            {/* Notification Icon */}
            <View style={styles.lower2}>
              <Icon
                name="bell-outline"
                size={25}
                color="#ff7f27"
                style={styles.bellIcon}
              />
            </View>
          </View>
        </View>
      ) : (
        // ===== Original Header =====
        <View style={styles.container}>
          <TouchableOpacity onPress={() => setCustomHeader(true)}>
            <Image
              source={{ uri: 'https://listwr.com/SMxHpI' }}
              style={styles.imageIcon}
            />
          </TouchableOpacity>

          <View style={styles.icons}>
            <Icon name="magnify" size={30} color="white" />
            <Icon name="bell-outline" size={25} color="white" />
          </View>
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  // ===== Original Header Styles =====
  container: {
    backgroundColor: '#252579',
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageIcon: {
    height: 45,
    width: 45,
    resizeMode: 'contain',
  },
  icons: {
    flexDirection: 'row',
    gap: 20,
  },

  // ===== Custom Header Styles =====
  customHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#3636b054',
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
  },
  upper: {
    flexDirection: 'row',
    gap: 100,
    alignItems: 'center',
    marginTop: 20,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileText: {
    color: 'gray',
    fontSize: 14,
  },
  btn: {
    padding: 10,
    backgroundColor: '#ed6001ff',
    borderRadius: 6,
  },
  btnTxt: {
    color: 'white',
    fontWeight: '500',
  },

  // ===== Lower Section =====
  lower: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    gap: 10,
  },
  lower1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 305,
    paddingVertical: 4,
    paddingHorizontal: 5,
    borderRadius: 4,
    backgroundColor: '#f0f0f01d',
  },
  lower2: {
    backgroundColor: '#f0f0f01d',
    padding: 10,
    borderRadius: 4,
  },
  searchIcon: {
    backgroundColor: '#f0f0f01b',
    padding: 6,
    borderRadius: 4,
    marginRight: 10,
    textAlign: 'center',
  },
  bellIcon: {
    fontWeight: '800',
  },
  textInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
});
