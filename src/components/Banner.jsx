import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const Banner = () => {
  const banners = [
    // uri: 'https://picsum.photos/800/300?random=5'
    { id: '1', src: require('../assests/Images/MainHome.png') },
    { id: '2', src: require('../assests/Images/MainHome.png') },
    { id: '3', src: require('../assests/Images/MainHome.png') },
    { id: '4', src: require('../assests/Images/MainHome.png') },
    { id: '5', src: require('../assests/Images/MainHome.png') },
  ];

  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        autoplayTimeout={3}
        showsPagination={true}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        // paginationStyle={styles.paginationStyle} //used for styling of this dot container
      >
        {banners.map(item => (
          <Image
            key={item.id}
            source={item.src}
            style={styles.bannerImage}
          />
        ))}
      </Swiper>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252579',
    overflow: 'hidden',
    height: 230,
    paddingTop: 5,
    paddingBottom: 15,
    paddingHorizontal: 20,
    marginTop:10,
  },
  bannerImage: {
    width: width,
    height: 230,
    resizeMode: 'cover',
    borderRadius: 16,
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 3,
  },
});

//* Manual Swipe
{
  /* <Swiper
  showsPagination={true}
  dotStyle={styles.dot}
  activeDotStyle={styles.activeDot}
>
  {banners.map((item) => (
    <Image key={item.id} source={{ uri: item.uri }} style={styles.bannerImage} />
  ))}
</Swiper> */
}

//npm install react-native-swiper
