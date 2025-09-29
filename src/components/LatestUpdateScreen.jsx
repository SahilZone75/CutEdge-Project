// LatestUpdateScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '1',
    title: 'Sushil, Geeta, Sakshi: 5 Indians to Watch in Pro Wrestling League',
    date: 'Sep 13, 2022',
    time: '5 min',
    image: require('../assests/Images/Latest2.png'),
  },
  {
    id: '2',
    title:
      'Asian Wrestling Championships serve purpose for Indian wrestlers in busy year',
    date: 'Sep 13, 2022',
    time: '5 min',
    image: require('../assests/Images/Latest1.png'),
  },
  {
    id: '3',
    title: 'Sushil, Geeta, Sakshi: 5 Indians to Watch in Pro Wrestling League',
    date: 'Sep 13, 2022',
    time: '5 min',
    image: require('../assests/Images/Latest2.png'),
  },
];

const LatestUpdateScreen = () => {
  const navigation = useNavigation();

  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* <Image source={{ uri: item.image }} style={styles.cardImage} /> */}
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.metaRow}>
        <Text style={styles.meta}>{item.date}</Text>
        <Text style={styles.meta}> • {item.time}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <Icon
          name="arrow-left"
          size={25}
          color="white"
          onPress={() => navigation.goBack()}
        />

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

      <Text style={styles.header}>News</Text>

      {/* Filters */}
      <View style={styles.filterRow}>
        <View style={styles.pickerBox}>
          <Picker
            selectedValue={district}
            onValueChange={val => setDistrict(val)}
            dropdownIconColor="white"
            style={{ color: 'white' }}
          >
            <Picker.Item label="Select by District" value="" />
            <Picker.Item label="Delhi" value="delhi" />
            <Picker.Item label="Mumbai" value="mumbai" />
          </Picker>
        </View>
        <View style={styles.pickerBox}>
          <Picker
            selectedValue={state}
            onValueChange={val => setState(val)}
            dropdownIconColor="white"
            style={{ color: 'white' }}
          >
            <Picker.Item label="Select by State" value="" />
            <Picker.Item label="UP" value="up" />
            <Picker.Item label="Maharashtra" value="mh" />
          </Picker>
        </View>
      </View>

      {/* News List */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121858', paddingHorizontal: 12 },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  pickerBox: {
    flex: 1,
    backgroundColor: '#1a1f6b',
    marginRight: 8,
    borderRadius: 8,
  },
  card: {
    backgroundColor: '#1a1f6b',
    borderRadius: 12,
    padding: 10,
    marginTop: 15,
  },
  cardImage: {
  width: '100%', 
  height: 150,
  borderRadius: 10,
  marginBottom: 10,
},
  title: { color: 'white', fontSize: 16, fontWeight: '600' },
  metaRow: { flexDirection: 'row', marginTop: 5 },
  meta: { color: '#ccc', fontSize: 12 },

  containerHeader: {
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
});

export default LatestUpdateScreen;
