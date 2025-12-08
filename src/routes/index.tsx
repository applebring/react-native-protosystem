import React from 'react';
import { Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../pages/Home';
import InfoPage from '../pages/Info';
import Icon from '../components/Icon';


const MyTabs = createBottomTabNavigator({
  initialRouteName: 'Home',
  // screenOptions: {
  //   headerStyle: {
  //     backgroundColor: '#f4511e',
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //   },
  // }, //全局标题头部样式设置
  screens: {
    Home: {
      screen: HomePage,
      options: ({ route }) => ({
        // headerTitle: (props) => <LogoTitle {...props} />,  //用于自定义组件标题
        title: route?.params?.name || '标题',
        headerRight: () => (
          <Button onPress={() => alert('This is a button!')} title="Info" />
        ),

        tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />,
       
      }),
    },

    Info: {
      screen: InfoPage,
      options: {
        title: '消息'
      }
    },
  },
});

export default MyTabs;
