import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

const dummyData = [
  {
    id: 1,
    name: 'Bajrang Punia',
    weight: '57 Kg',
    location: 'Haryana',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSKrrycsggQYtoztUmhDDEt_b0gV79NY2L6wAYFUpazC6o5MvvbhWxLW_J2yrMIBDuWu_NBnHjjo5jtil1EbJWTeHbidiB-uzZf_vbQRYhkw',
    medal: 'https://cdn-icons-png.flaticon.com/512/2583/2583344.png',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    weight: '70 Kg',
    location: 'Haryana',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww',
    medal: 'https://cdn-icons-png.flaticon.com/512/2583/2583316.png',
  },
  {
    id: 3,
    name: 'Rajesh Kumar',
    weight: '65 Kg',
    location: 'Haryana',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww',
    medal: 'https://cdn-icons-png.flaticon.com/512/2583/2583309.png',
  },
  {
    id: 4,
    name: 'Rajesh Kumar',
    weight: '78 Kg',
    location: 'Haryana',
    img: 'https://images.unsplash.com/photo-1543132220-3ec99c6094dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D',
    medal: 'https://cdn-icons-png.flaticon.com/512/2583/2583336.png',
  },
  {
    id: 5,
    name: 'Rajesh Kumar',
    weight: '78 Kg',
    location: 'Haryana',
    img: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2Zlc3Npb25hbCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D',
    medal: 'https://cdn-icons-png.flaticon.com/512/2583/2583336.png',
  },
];

const Task4 = () => {
  return (
    <ScrollView style={styles.container}>
      {dummyData.map((item, index) => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.rank}>{item.id}</Text>

          <View style={styles.details}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.row}>
              <Text style={styles.subText}>{item.weight}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 8,
                }}
              >
                <Image
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
                  }} // location icon
                  style={{
                    width: 16,
                    height: 16,
                    tintColor: 'orange',
                    marginRight: 4,
                  }}
                />
                <Text style={styles.subText}>{item.location}</Text>
              </View>
            </View>
          </View>

          {/* Image + Medal Overlay */}
          <View style={styles.imageWrapper}>
            <Image source={{ uri: item.img }} style={styles.avatar} />
            <Image source={{ uri: item.medal }} style={styles.medal} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Task4;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#34349bff',
    padding: 10,
    marginTop: 25,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3c3c9d',
    marginBottom: 12,
    padding: 12,
    paddingVertical: 30,
    borderRadius: 8,
    borderColor: '#8d8d8d7d',
    borderWidth: 2,
  },
  rank: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
    fontWeight: 'bold',
  },
  details: {
    flex: 1,
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subText: {
    color: '#ddd',
    fontSize: 16,
  },
  imageWrapper: {
    position: 'relative',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  medal: {
    width: 20,
    height: 20,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
