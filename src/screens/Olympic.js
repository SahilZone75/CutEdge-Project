import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Platform } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const olympicEvents = [
  {
    id: '1',
    sport: 'Athletics',
    country: 'India',
    medal: '🥇',
    athlete: 'Neeraj Chopra',
    flag: 'https://flagcdn.com/in.png',
    year: '2024',
  },
  {
    id: '2',
    sport: 'Wrestling',
    country: 'USA',
    medal: '🥈',
    athlete: 'John Smith',
    flag: 'https://flagcdn.com/us.png',
    year: '2020',
  },
  {
    id: '3',
    sport: 'Swimming',
    country: 'Australia',
    medal: '🥉',
    athlete: 'Emma McKeon',
    flag: 'https://flagcdn.com/au.png',
    year: '2024',
  },
];

const Olympic = ({ navigation }) => {

  const renderOlympicCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image source={{ uri: item.flag }} style={styles.flag} />
        <Text style={styles.sport}>{item.sport}</Text>
        <Text style={styles.medal}>{item.medal}</Text>
      </View>
      <Text style={styles.athlete}>{item.athlete}</Text>
      <View style={styles.cardFooter}>
        <Icon name="calendar" color="#fc853f" size={15} />
        <Text style={styles.footerText}>{item.year}</Text>
        <Icon name="map-marker" color="#fc853f" size={15} style={{ marginLeft: 8 }} />
        <Text style={styles.footerText}>{item.country}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBar}>
        <Icon name="arrow-left" size={22} color="#fff" onPress={() => navigation.goBack()} />
        <Image source={{ uri: 'https://listwr.com/SMxHpI' }} style={styles.logo} />
        <View style={styles.iconWrapper}>
          <Icon name="magnify" size={22} color="#fff" />
          <Icon name="bell-outline" size={22} color="#fff" />
        </View>
      </View>
      <Text style={styles.mainHeader}>Olympic</Text>
      <FlatList
        data={olympicEvents}
        renderItem={renderOlympicCard}
        keyExtractor={item => item.id}
        style={styles.list}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </SafeAreaView>
  );
};

export default Olympic;

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
    fontSize: 20,
    marginTop: 12,
    marginBottom: 10,
    marginHorizontal: 2,
    letterSpacing: 0.2,
  },
  list: {
    marginTop: 6,
  },
  card: {
    backgroundColor: '#272269',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#19153d',
    shadowOpacity: 0.13,
    shadowRadius: 3,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  flag: {
    width: 28,
    height: 18,
    borderRadius: 4,
    marginRight: 7,
    borderWidth: 1,
    borderColor: '#fff',
  },
  sport: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    marginRight: 10,
    flex: 1,
  },
  medal: {
    fontSize: 17,
    marginLeft: 8,
  },
  athlete: {
    color: '#fc853f',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  footerText: {
    color: '#dcc8fa',
    fontSize: 13,
    marginLeft: 2,
    marginRight: 5,
  },
});
