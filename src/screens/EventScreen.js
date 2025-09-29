import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';

const events = [
  {
    id: '1',
    category: 'Haryana',
    name: 'Haryana state championship',
    date: 'Sep 13, 2022',
    location: 'Rohtak',
  },
  {
    id: '2',
    category: 'Haryana',
    name: 'Haryana state championship',
    date: 'Sep 13, 2022',
    location: 'Rohtak',
  },
  {
    id: '3',
    category: 'Haryana',
    name: 'Haryana state championship',
    date: 'Sep 13, 2022',
    location: 'Rohtak',
  },
];

const EventScreen = ({ navigation }) => {
  const [championship, setChampionship] = useState('');
  const [national, setNational] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');

  const renderEvent = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.chip}>
        <Text style={styles.chipText}>{item.category}</Text>
      </View>
      <Text style={styles.eventName}>{item.name}</Text>
      <View style={styles.infoRow}>
        <Icon
          name="calendar"
          color="#fc853f"
          size={17}
          style={{ marginRight: 2 }}
        />
        <Text style={styles.infoText}>{item.date}</Text>
        <Icon
          name="map-marker"
          color="#fc853f"
          size={17}
          style={{ marginLeft: 8, marginRight: 2 }}
        />
        <Text style={styles.infoText}>{item.location}</Text>
      </View>
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
      <Text style={styles.mainHeader}>Events</Text>
      <View style={styles.dropdowns}>
        <View style={styles.row}>
          <Picker
            selectedValue={championship}
            style={styles.smallDropdown}
            onValueChange={setChampionship}
            dropdownIconColor="#fff"
          >
            <Picker.Item label="Select Championship" value="" />
          </Picker>
          <Picker
            selectedValue={national}
            style={styles.smallDropdown}
            onValueChange={setNational}
            dropdownIconColor="#fff"
          >
            <Picker.Item label="Select National" value="" />
          </Picker>
        </View>
        <View style={styles.row}>
          <Picker
            selectedValue={state}
            style={styles.smallDropdown}
            onValueChange={setState}
            dropdownIconColor="#fff"
          >
            <Picker.Item label="Select State" value="" />
          </Picker>
          <Picker
            selectedValue={district}
            style={styles.smallDropdown}
            onValueChange={setDistrict}
            dropdownIconColor="#fff"
          >
            <Picker.Item label="Select District" value="" />
          </Picker>
        </View>
      </View>
      <FlatList
        data={events}
        renderItem={renderEvent}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={{ paddingBottom: 50 }}
      />
    </SafeAreaView>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#201c5a', paddingHorizontal: 12 },
  headerBar: {
    marginTop: Platform.OS === 'android' ? 18 : 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    borderRadius: 30,
    backgroundColor: '#201c5a',
  },
  logo: {
    height: 48,
    width: 48,
    borderRadius: 24,
    resizeMode: 'contain',
    backgroundColor: '#241d55',
    borderWidth: 2,
    borderColor: '#fc853f',
  },
  iconWrapper: { flexDirection: 'row', gap: 18 },
  mainHeader: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 12,
    marginBottom: 10,
  },
  dropdowns: { marginBottom: 18 },
  row: { flexDirection: 'row', gap: 12, marginBottom: 10 },
  smallDropdown: {
    backgroundColor: '#272269',
    color: 'white',
    borderRadius: 15,
    flex: 1,
    fontSize: 15,
  },
  list: { marginTop: 6 },
  card: {
    backgroundColor: '#272269',
    borderRadius: 6,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ffffff3b',
    paddingVertical: 24,
    marginBottom: 10,
    shadowColor: '#19153d',
    shadowOpacity: 0.13,
    shadowRadius: 3,
    elevation: 2,
  },
  chip: {
    backgroundColor: '#fc853f',
    alignSelf: 'flex-start',
    paddingHorizontal: 11,
    paddingVertical: 2,
    borderRadius: 13,
    marginBottom: 6,
    marginTop: 2,
  },
  chipText: { color: '#fff', fontSize: 13, fontWeight: '700' },
  eventName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 2,
  },
  infoRow: { flexDirection: 'row', alignItems: 'center', marginTop: 2 },
  infoText: { color: '#dcc8fa', fontSize: 13, marginRight: 2 },
});
