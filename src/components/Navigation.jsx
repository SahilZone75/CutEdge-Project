import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MainTask from './MainTask';
import EventScreen from '../screens/EventScreen';
import LiveScreen from '../screens/LiveScreen';
import VideoScreen from '../screens/VideoScreen';
import MoreScreen from '../screens/MoreScreen';

import LoginPage from '../components/LoginPage';
import Splash from '../screens/Splash';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'white',
          headerShown: false,
          tabBarStyle: { backgroundColor: '#252579' },
          sceneContainerStyle: { backgroundColor: '#252579' },
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Event') iconName = 'calendar';
            else if (route.name === 'Live') iconName = 'radio';
            else if (route.name === 'Video') iconName = 'videocam';
            else if (route.name === 'More') iconName = 'ellipsis-horizontal';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        };
      }}
    >
      <Tab.Screen name="Home" component={MainTask} />
      <Tab.Screen name="Event" component={EventScreen} />
      <Tab.Screen name="Live" component={LiveScreen} />
      <Tab.Screen name="Video" component={VideoScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
}

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="MainTabs" component={TabNavigation} />
    </Stack.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
