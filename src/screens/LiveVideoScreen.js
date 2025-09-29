import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const videoList = [
  {
    id: '1',
    image: require('../assests/Images/LiveVideo3.png'),
    highlighted: true,
  },
  {
    id: '2',
    image: require('../assests/Images/LiveVideo2.png'),
    highlighted: false,
  },
  {
    id: '3',
    image: require('../assests/Images/Gallery3.png'),
    highlighted: false,
  },
];

const LiveVideoScreen = ({ navigation }) => {
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

      <Text style={styles.header}>Live Videos</Text>

      {/* Scrollable Cards */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {videoList.map(video => (
          <View
            style={[styles.card, video.highlighted && styles.cardHighlighted]}
            key={video.id}
          >
            <Image source={video.image} style={styles.innerImage} />

            {/* Badges in one row */}
            <View style={styles.badgeRow}>
              <View style={styles.liveBadge}>
                <Text style={styles.liveBadgeText}>LIVE</Text>
              </View>
              <View style={styles.viewerBadge}>
                <Icon name="eye" size={14} color="#fff" />
                <Text style={styles.viewerBadgeText}>456</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LiveVideoScreen;

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
    backgroundColor: '#1d2375',
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 7,
    borderWidth: 2,
    borderColor: '#ffffff28',
  },
  innerImage: {
    width: '100%',
    height: 200,
    borderRadius: 3,
    resizeMode: 'contain',
    backgroundColor: '#000',
  },
  badgeRow: {
    position: 'absolute',
    top: 15,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    zIndex: 2,
  },
  liveBadge: {
    backgroundColor: '#f24a4a',
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 9,
  },
  liveBadgeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    letterSpacing: 1,
  },
  viewerBadge: {
    backgroundColor: '#313866',
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  viewerBadgeText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 3,
  },
});
