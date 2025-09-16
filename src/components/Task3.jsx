import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const dummyData = [
  {
    id: 1,
    name: 'Gilman Thomas Patrick',
    img: 'https://flagcdn.com/w20/in.png',
    country: 'India',
    points: 100200,
    rank: 7,
  },
  {
    id: 2,
    name: 'Gilman Thomas Patrick',
    img: 'https://flagcdn.com/w20/in.png',
    country: 'India',
    points: 100200,
    rank: 8,
  },
  {
    id: 3,
    name: 'Gilman Thomas Patrick',
    img: 'https://flagcdn.com/w20/in.png',
    country: 'India',
    points: 100200,
    rank: 9,
  },
];

const Task3 = () => {
  //* FlatList hamesha renderItem function ko ek object deta hai as a parameter jisme item aur index property hoti hai.
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.flatListContainer}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.infoRow}>
            <Image source={{ uri: item.img }} style={styles.flag} />
            <Text style={styles.country}>{item.country}</Text>
            <Text style={styles.points}> | {item.points} pts</Text>
          </View>
        </View>

        <View>
          <Text style={styles.rank}>
            #{item.rank.toString().padStart(2, '0')}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.upperContent}>
          <Text style={styles.tabText}>GR</Text>
          <Text style={styles.tabText}>FS</Text>
          <Text style={styles.tabText}>WW</Text>
        </View>

        <View style={styles.kgSection}>
          <Text style={styles.arrow}>&lt;</Text>

          <Text style={styles.kgText}>57Kg</Text>
          <Text style={[styles.kgText, styles.activeKg]}>61Kg</Text>
          <Text style={styles.kgText}>65Kg</Text>
          <Text style={styles.kgText}>70Kg</Text>
          <Text style={styles.kgText}>74Kg</Text>

          <Text style={styles.arrow}>&gt;</Text>
        </View>

        <FlatList
          data={dummyData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Task3;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34349b',
    margin: 10,
    padding: 15,
    marginTop: 50,
    borderRadius: 8,
  },
  innerContainer: {
    borderWidth: 1,
    borderColor: '#8d8d8d7d',
    borderRadius: 6,
    overflow: 'hidden',
  },
  upperContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 5,
  },
  tabText: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#8d8d8d7d',
    paddingVertical: 6,
  },
  kgSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#8d8d8d7d',
    paddingVertical: 8,
  },
  kgText: {
    color: '#fff',
    marginHorizontal: 8,
  },
  activeKg: {
    color: 'orange',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: 'orange',
  },
  arrow: {
    color: '#fff',
    fontSize: 18,
    paddingHorizontal: 10,
  },
  flatListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: '#8d8d8d7d',
  },
  name: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  flag: {
    width: 18,
    height: 18,
    borderRadius: 50,
    marginRight: 6,
  },
  country: {
    color: '#fff',
    fontSize: 12,
  },
  points: {
    color: '#ccc',
    fontSize: 12,
    marginLeft: 4,
  },
  rank: {
    color: '#ff6a00',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
