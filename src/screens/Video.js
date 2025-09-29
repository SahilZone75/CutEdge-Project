import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Video = ({ navigation }) => {
  // Card Component
  const Card = ({ title, imgSource }) => (
    <View style={styles.cardWrapper}>
      {/* Title with arrow */}
      <View style={styles.titleRow}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Icon name="chevron-right" size={22} color="#fff" />
      </View>

      <View style={styles.card}>
        <Image source={imgSource} style={styles.cardImage} />

        {/* Play button overlay */}
        <View style={styles.playBtnContainer}>
          <Icon name="play" size={24} color="white" />
        </View>

        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>
            Nitin Panwar & Mukesh | Best Players | Umaid Hawks vs Hadoti
            Challengers
          </Text>

          {/* icons row */}
          <View style={styles.metaRow}>
            <View style={styles.metaGroup}>
              <Icon name="calendar" size={14} color="#f26b00" />
              <Text style={styles.metaText}>28 January,2022</Text>
            </View>

            <View style={styles.metaGroup}>
              <Icon name="clock-outline" size={14} color="#f26b00" />
              <Text style={styles.metaText}>5 min</Text>
            </View>

            <View style={styles.metaGroup}>
              <Icon name="share-variant" size={14} color="#f26b00" />
              <Text style={styles.metaText}>Share</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <Card
          title="Diet & Nutrition"
          imgSource={require('../assests/Images/Video1.png')}
        />
        <Card
          title="Training"
          imgSource={require('../assests/Images/Video2.png')}
        />
        <Card
          title="Wrestling"
          imgSource={require('../assests/Images/Video1.png')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Video;

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

  // Cards
  cardWrapper: {
    marginBottom: 20,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 8,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#1b1f6d',
    borderRadius: 6,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ffffff2e',
    marginHorizontal: 8,
    marginTop: 6,
  },
  cardImage: {
    width: 350,
    height: 140,
    marginLeft: 10,
    marginTop: 10,
  },
  playBtnContainer: {
    position: 'absolute',
    top: '35%',
    left: '45%',
    backgroundColor: '#b75200ff',
    borderRadius: 30,
    padding: 10,
  },
  cardTextContainer: {
    padding: 10,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  metaGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    color: '#ffffff69',
    fontSize: 12,
  },
});
