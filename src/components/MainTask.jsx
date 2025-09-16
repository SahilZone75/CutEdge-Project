// Home Screen
import { StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Category from './Category';
import NewsBanner from './NewsBanner';
import NewsSection from './NewsSection';
import { SafeAreaView } from 'react-native-safe-area-context';

const MainTask = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Banner />
        <Category />
        <NewsBanner />
        <NewsSection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252579',
  },
});
