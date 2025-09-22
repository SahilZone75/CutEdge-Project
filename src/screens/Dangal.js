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
    image: require('../assests/Images/Dangal1.png'),
  },
  {
    id: '2',
    image: require('../assests/Images/Dangal2.png'),
  },
  {
    id: '3',
    image: require('../assests/Images/Dangal1.png'),
  },
];

const Dangal = () => {
  const navigation = useNavigation();
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* <Image source={{ uri: item.image }} style={styles.cardImage} /> */}
      <Image source={item.image} style={styles.cardImage} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
          marginLeft: 4,
        }}
      >
        <Image
          source={require('../assests/Images/img-1.png')}
          style={{ width: 20, height: 20 }}
        />
        <Text style={{ color: '#ffffffc0', marginLeft: 8 }}>
          United States, Missouri, St. Louis
        </Text>
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

      <Text style={styles.header}>Dangal</Text>

      {/* Filters */}
      <View style={styles.filterRow}>
        <View style={styles.pickerBox}>
          <Picker
            selectedValue={district}
            onValueChange={val => setDistrict(val)}
            dropdownIconColor="white"
            style={{ color: 'white' }}
          >
            <Picker.Item label="State" value="" />
            <Picker.Item label="UP" value="delhi" />
            <Picker.Item label="Maharashtra" value="mumbai" />
          </Picker>
        </View>
        <View style={styles.pickerBox}>
          <Picker
            selectedValue={state}
            onValueChange={val => setState(val)}
            dropdownIconColor="white"
            style={{ color: 'white' }}
          >
            <Picker.Item label="District" value="" />
            <Picker.Item label="Lucknow" value="up" />
            <Picker.Item label="Noida" value="mh" />
          </Picker>
        </View>
        <View style={styles.pickerBox}>
          <Picker
            selectedValue={state}
            onValueChange={val => setState(val)}
            dropdownIconColor="white"
            style={{ color: 'white' }}
          >
            <Picker.Item label="Date" value="" />
            <Picker.Item label="10-Sep-2025" value="up" />
            <Picker.Item label="12-Sep-2025" value="mh" />
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
    marginTop: 15,
    marginVertical: 15,
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
    borderColor: '#ffffff29',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginTop: 15,
    height: 280,
    justifyContent: 'center',
  },
  cardImage: {
    width: '100%',
    height: 220,
    borderRadius: 2,
    marginBottom: 10,
  },
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

export default Dangal;
