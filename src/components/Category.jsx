import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Category = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.heading}>Category</Text>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.lineOne}>
          <View style={styles.item}>
            <Icon name="circle" size={30} color="#fff" style={styles.icons} 
              onPress={() => navigation.navigate('Olympic')}
            />
            <Text style={styles.label}>Olympic</Text>
          </View>

          <View style={styles.item}>
            <Icon
              name="users"
              size={30}
              color="#fff"
              style={styles.icons}
              onPress={() => navigation.navigate('Wrestlers')}
            />
            <Text style={styles.label}>Wrestler</Text>
          </View>
          <View style={styles.item}>
            <Icon
              name="user-circle"
              size={30}
              color="#fff"
              style={styles.icons}
              onPress={() => navigation.navigate('Coaches')}
            />
            <Text style={styles.label}>Coaches</Text>
          </View>

          <View style={styles.item}>
            <Icon
              name="user-secret"
              size={30}
              color="#fff"
              style={styles.icons}
              onPress={() => navigation.navigate('Referees')}
            />
            <Text style={styles.label}>Referee</Text>
          </View>
        </View>

        <View style={styles.lineTwo}>
          <View style={styles.item}>
            <Icon
              name="hand-rock"
              size={30}
              color="#fff"
              style={styles.icons}
              onPress={() => navigation.navigate('Dangal')}
            />
            <Text style={styles.label}>Dangal</Text>
          </View>

          <View style={styles.item}>
            <Icon
              name="image"
              size={30}
              color="#fff"
              style={styles.icons}
              onPress={() => navigation.navigate('GalleryScreen')}
            />
            <Text style={styles.label}>Photos</Text>
          </View>

          <View style={styles.item}>
            <Icon
              name="graduation-cap"
              size={30}
              color="#fff"
              style={styles.icons}
              onPress={() => navigation.navigate('Academies')}
            />
            <Text style={styles.label}>Academies</Text>
          </View>

          <View style={styles.item}>
            <Icon
              name="newspaper"
              size={30}
              color="#fff"
              style={styles.icons}
              onPress={() => navigation.navigate('LatestUpdate')}
            />
            <Text style={styles.label}>News</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#252579',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 24,
    color: '#fff',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  lineOne: {
    flexDirection: 'row',
  },
  lineTwo: {
    flexDirection: 'row',
  },
  item: {
    alignItems: 'center',
    paddingTop: 12,
    paddingHorizontal: 24,
  },
  label: {
    marginTop: 8,
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  icons: {
    backgroundColor: '#b2b6c31c',
    padding: 12,
    borderRadius: 50,
  },
});
