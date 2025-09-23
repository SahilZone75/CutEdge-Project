import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  {
    id: '1',
    title: "Day 4 of 69th Senior National Men's Kabaddi Championship",
    image: require('../assests/Images/Gallery4.png'),
  },
  {
    id: '2',
    title: "Day 3 of 69th Senior National Men's Kabaddi Championship",
    image: require('../assests/Images/Gallery1.png'),
  },
  {
    id: '3',
    title: 'Vivo Pro Kabaddi Player Auction - Meet the Retained Heroes!',
    image: require('../assests/Images/Gallery2.png'),
  },
  {
    id: '4',
    title: '47th Junior National Kabaddi Championship: Day 4',
    image: require('../assests/Images/Gallery3.png'),
  },
];

export default function GalleryScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      {/* Left Image */}
      <Image source={item.image} style={styles.cardImage} />
      {/* Right Text */}
      <View style={styles.cardTextBox}>
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

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

      <Text style={styles.header}>Photos Gallery</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

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
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1d2375',
    borderRadius: 5,
    marginVertical: 8,
    overflow: 'hidden',
    padding: 8,
    // paddingVertical: 20,
    borderColor: '#ffffff2c',
    borderWidth: 1,
  },
  cardImage: {
    width: 100,
    height: 120,
    borderRadius: 2,
  },
  cardTextBox: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  cardTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
});
