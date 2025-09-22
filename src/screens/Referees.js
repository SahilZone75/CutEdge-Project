import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const myData = [
  {
    id: 1,
    image: require('../assests/Images/Referees1.png'),
    name: 'Sharafat Ali',
    desig: 'Technical officer',
  },
  {
    id: 2,
    image: require('../assests/Images/Referees2.png'),
    name: 'Abdul Jabbar',
    desig: 'Physical Instructor',
  },
  {
    id: 3,
    image: require('../assests/Images/Referees3.png'),
    name: 'Sunil Kumar',
    desig: 'Technical officer',
  },
  {
    id: 4,
    image: require('../assests/Images/Referees4.png'),
    name: 'S Raju',
    desig: 'Engineer at shree cement',
  },
  {
    id: 5,
    image: require('../assests/Images/Referees5.png'),
    name: 'Vikram',
    desig: 'Technical officer',
  },
  {
    id: 6,
    image: require('../assests/Images/Referees6.png'),
    name: 'Angrej Singh',
    desig: 'Punjab Kabaddi Association',
  },
  {
    id: 7,
    image: require('../assests/Images/Referees1.png'),
    name: 'Sudham Mishra',
    desig: 'Tennis Coach',
  },
  {
    id: 8,
    image: require('../assests/Images/Referees4.png'),
    name: 'Patel Rathore',
    desig: 'Engineer at shree cement',
  },
];

const Referees = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.desig}>{item.desig}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.containerHeader}>
        <Icon
          name="arrow-left"
          size={25}
          color="white"
          onPress={() => navigation.goBack()}
        />

        <TouchableOpacity>
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

      <Text style={styles.header}>Referees</Text>

      <FlatList
        data={myData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        key={2} // yaha same value as numColumns
        contentContainerStyle={styles.flatListContent}
      />
    </SafeAreaView>
  );
};

export default Referees;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121858',
    paddingHorizontal: 12,
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
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#212973',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#ffffff36',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  desig: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center',
  },
});
