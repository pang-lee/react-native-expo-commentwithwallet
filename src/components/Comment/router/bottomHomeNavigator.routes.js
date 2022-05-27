import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import Foundation from "react-native-vector-icons/Foundation";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeStackScreen from './home.routes';
import DiscoveryScreen from "../screens/DiscoveryScreen";
import CreatePostScreen from "../screens/CreatePostScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const BottomHomeNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Home') {
          return <Foundation name="home" size={size} color={color} />;
        }
        if (route.name === 'Discovery') {
          return <Feather name="search" size={size} color={color} />;
        }
        if (route.name === 'Post') {
          return <Feather name="plus-square" size={size} color={color} />;
        }
        if (route.name === 'Notifications') {
          return <AntDesign name="hearto" size={size} color={color} />;
        }
        if (route.name === 'Profile') {
          return <Ionicons name="person-outline" size={size} color={color} />;
        }
      },
      "tabBarActiveTintColor": "#000",
      "tabBarInactiveTintColor": "gray",
      "tabBarShowLabel": false,
      "tabBarStyle": [
        {
          "display": "flex"
        },

        null
      ]
    })}
  >
    <Tab.Screen name="Home" component={HomeStackScreen} options={{headerShown: false}} />
    <Tab.Screen name="Discovery" component={DiscoveryScreen} options={{headerShown: false}} />
    <Tab.Screen name="Post" component={CreatePostScreen} options={{headerShown: false}} />
    <Tab.Screen name="Notifications" component={NotificationsScreen} options={{headerShown: false}} />
    <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}} />
  </Tab.Navigator>
)

export default BottomHomeNavigator;
