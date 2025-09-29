import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import MainTask from './MainTask';
import EventScreen from '../screens/EventScreen';
import LiveScreen from '../screens/LiveScreen';
import VideoScreen from '../screens/VideoScreen';
import MoreScreen from '../screens/MoreScreen';

import LoginPage from '../components/LoginPage';
import Splash from '../screens/Splash';
import LatestUpdateScreen from './LatestUpdateScreen';
import Register from './Register';
import Coaches from '../screens/Coaches';
import Referees from '../screens/Referees';
import EmailVerificationScreen from '../screens/EmailVerificationScreen';
import OtpScreen from '../screens/OtpScreen';
import ResetPassword from '../screens/ResetPassword';
import Dangal from '../screens/Dangal';
import GalleryScreen from '../screens/GalleryScreen';
import Video from '../screens/Video';
import LiveVideoScreen from '../screens/LiveVideoScreen';
import SidePanel from '../screens/SidePanel';
import Academies from '../screens/Academies';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function TabNavigation({ navigation }) {
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
            else if (route.name === 'Menu') iconName = 'ellipsis-horizontal';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        };
      }}
    >
      <Tab.Screen name="Home" component={MainTask} />
      <Tab.Screen name="Event" component={EventScreen} />
      <Tab.Screen name="Live" component={LiveVideoScreen} />
      <Tab.Screen name="Video" component={Video} />

      {/* Last tab sirf drawer open karne ke liye */}
      <Tab.Screen
        name="Menu"
        component={MainTask} // dummy component hain, render nahi hoga
        listeners={{
          tabPress: e => {
            e.preventDefault(); // screen change na ho
            navigation.openDrawer(); // drawer open k liye
          },
        }}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerStyle: { width: 300, height: 840 },
      }}
      drawerContent={props => <SidePanel {...props} />}
    >
      <Drawer.Screen name="MainTabs" component={TabNavigation} />
    </Drawer.Navigator>
  );
}

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Register" component={Register} />

      {/* Stack me ab DrawerNavigation render hoga */}
      <Stack.Screen name="MainTabs" component={DrawerNavigation} />
      {/* <Stack.Screen name="RootDrawer" component={DrawerNavigation} /> */}


      <Stack.Screen name="LatestUpdate" component={LatestUpdateScreen} />
      <Stack.Screen name="Coaches" component={Coaches} />
      <Stack.Screen name="Referees" component={Referees} />
      <Stack.Screen
        name="EmailVerificationScreen"
        component={EmailVerificationScreen}
      />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Dangal" component={Dangal} />
      <Stack.Screen name="GalleryScreen" component={GalleryScreen} />
      <Stack.Screen name="Academies" component={Academies} />
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
