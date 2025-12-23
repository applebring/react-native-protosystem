import * as React from 'react';
import {
  createStaticNavigation,
  NavigationContainer,
} from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/pages/HomeScreen';
import ProfileScreen from './src/pages/ProfileScreen';
import InfoScreen from './src/pages/InfoScreen';
import SearchScreen from './src/pages/SearchScreen';
import MyTabBar from './src/components/MyTabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyTabs = createBottomTabNavigator({
  // tabBar: (props) => <MyTabBar {...props} />,
  screens: {
    Home: {
      screen:　HomeScreen,
      options: {
        title: '首页',
        tabBarIcon:({color,size}) => (
          <Icon name="home" size={size} color={color} />
        )
      }
    },
    Search: {
      screen: SearchScreen,
      options: {
        title: '搜索',
        tabBarIcon:({color,size}) => (
          <Icon name="magnify" size={size} color={color} />
        )
      }
    },
    Info: {
      screen: InfoScreen,
      options: {
        title: '信息',
        tabBarIcon:({color,size}) => (
          <Icon name="email" size={size} color={color} />
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      options:{
        title: '我的',
        tabBarIcon: ({ color, size }) => (
          <Icon name="account" size={size} color={color} />
        ),
      }
    },
  },
});

const Navigation = createStaticNavigation(MyTabs);

export default function App() {
  return <Navigation />;
}