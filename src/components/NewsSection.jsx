import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const newsData = [
  {
    id: 1,
    title: 'Sushil, Geeta, Sakshi: 5 Indians to Watch in Pro Wrestling League',
    date: 'Sep 13, 2022',
    time: '5 min',
    image: { uri: 'https://i.ibb.co/mzFkgzP/news1.jpg' },
  },
  {
    id: 2,
    title: 'Stunning Performance by Team India in Wrestling Championship',
    date: 'Oct 2, 2022',
    time: '3 min',
    image: { uri: 'https://i.ibb.co/2nZ0Ywv/news2.jpg' },
  },
  {
    id: 3,
    title: 'Young Talent Rising in Wrestling Academies',
    date: 'Nov 10, 2022',
    time: '4 min',
    image: { uri: 'https://i.ibb.co/4Ws9H3C/news3.jpg' },
  },
];

const NewsSection = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>News</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal Scroll */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {newsData.map(item => (
          <View key={item.id} style={styles.card}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="cover"
            />
            <Text numberOfLines={2} style={styles.title}>
              {item.title}
            </Text>
            <View style={styles.footer}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.time}>⏱ {item.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default NewsSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  viewAll: {
    fontSize: 14,
    color: 'orange',
  },
  card: {
    backgroundColor: '#222',
    borderRadius: 5,
    marginRight: 12,
    width: 280,
    padding: 8,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 6,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 6,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 12,
    color: '#bbb',
  },
  time: {
    fontSize: 12,
    color: '#f90',
  },
});
