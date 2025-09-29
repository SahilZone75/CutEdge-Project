import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';

const wrestlersData = [
  {
    id: '1',
    name: 'Bajrang Punia',
    weight: '57 Kg',
    location: 'Haryana',
    avatar: 'https://tinyurl.com/mr3hwzsd',
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    weight: '70 Kg',
    location: 'Haryana',
    avatar: '',
  },
  {
    id: '3',
    name: 'Rajesh Kumar',
    weight: '65 Kg',
    location: 'Haryana',
    avatar: '',
  },
  {
    id: '4',
    name: 'Rajesh Kumar',
    weight: '78 Kg',
    location: 'Haryana',
    avatar: '',
  },
  {
    id: '5',
    name: 'Rajesh Kumar',
    weight: '',
    location: 'Haryana',
    avatar: '',
  },
];

const Wrestlers = ({ navigation }) => {
  const [ageCategory, setAgeCategory] = useState('');
  const [style, setStyle] = useState('');
  const [weight, setWeight] = useState('');

  const renderWrestler = ({ item, index }) => (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>
          {index + 1} {item.name}
        </Text>
        <View style={styles.row}>
          <Text style={styles.detail}>{item.weight}</Text>
          <Icon name="map-marker" color="#fc853f" size={16} />
          <Text style={styles.detail}>{item.location}</Text>
        </View>
      </View>
      {item.avatar ? (
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
      ) : (
        <View style={styles.avatarPlaceholder}>
          <Icon name="account" size={30} color="#fff" />
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBar}>
        <Icon
          name="arrow-left"
          size={22}
          color="#fff"
          onPress={() => navigation.goBack()}
        />
        <Image
          source={{ uri: 'https://listwr.com/SMxHpI' }}
          style={styles.logo}
        />
        <View style={styles.iconWrapper}>
          <Icon name="magnify" size={22} color="#fff" />
          <Icon name="bell-outline" size={22} color="#fff" />
        </View>
      </View>

      <Text style={styles.mainHeader}>wrestlers</Text>

      <View style={styles.dropdowns}>
        <Picker
          selectedValue={ageCategory}
          style={styles.dropdown}
          onValueChange={setAgeCategory}
          dropdownIconColor="#fff"
        >
          <Picker.Item label="Select Age category" value="" />
          <Picker.Item label="Under 18" value="u18" />
          <Picker.Item label="Adult" value="adult" />
        </Picker>
        <View style={styles.doubleDropdown}>
          <Picker
            selectedValue={style}
            style={styles.smallDropdown}
            onValueChange={setStyle}
            dropdownIconColor="#fff"
          >
            <Picker.Item label="Select Style" value="" />
            <Picker.Item label="Freestyle" value="freestyle" />
            <Picker.Item label="Greco" value="greco" />
          </Picker>
          <Picker
            selectedValue={weight}
            style={styles.smallDropdown}
            onValueChange={setWeight}
            dropdownIconColor="#fff"
          >
            <Picker.Item label="Select Weight" value="" />
            <Picker.Item label="57 Kg" value="57" />
            <Picker.Item label="65 Kg" value="65" />
          </Picker>
        </View>
      </View>

      <FlatList
        data={wrestlersData}
        renderItem={renderWrestler}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 40 }}
        style={styles.list}
      />
    </SafeAreaView>
  );
};

export default Wrestlers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#201c5a',
    paddingHorizontal: 12,
  },
  headerBar: {
    marginTop: Platform.OS === 'android' ? 18 : 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    borderRadius: 30,
    paddingVertical: 0,
    backgroundColor: '#201c5a',
  },
  logo: {
    height: 48,
    width: 48,
    resizeMode: 'contain',
    borderRadius: 24,
    backgroundColor: '#241d55',
    borderWidth: 2,
    borderColor: '#ff904c',
  },
  iconWrapper: {
    flexDirection: 'row',
    gap: 18,
  },
  mainHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 12,
    marginBottom: 10,
    marginHorizontal: 2,
    letterSpacing: 0.2,
  },
  dropdowns: {
    marginBottom: 20,
  },
  dropdown: {
    backgroundColor: '#272269',
    color: 'white',
    borderRadius: 15,
    marginBottom: 10,
    paddingHorizontal: 8,
    fontSize: 15,
  },
  doubleDropdown: {
    flexDirection: 'row',
    gap: 12,
  },
  smallDropdown: {
    backgroundColor: '#272269',
    color: 'white',
    borderRadius: 15,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
  },
  list: {
    marginTop: 40,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#272269',
    padding: 14,
    paddingVertical: 30,
    marginBottom: 12,
    borderRadius: 6,
    justifyContent: 'space-between',
    shadowColor: '#19153d',
    shadowOpacity: 0.11,
    shadowRadius: 3,
    elevation: 3,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
    gap: 5,
  },
  detail: {
    color: '#d0c6f3',
    fontSize: 13,
    marginRight: 2,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#ff904c',
    backgroundColor: '#29246a',
  },
  avatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginLeft: 10,
    backgroundColor: '#393573',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
