import React from 'reactn';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PillDiaryScreen from '../screens/PillDiaryScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ScheduleStack = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
  config
);

ScheduleStack.navigationOptions = {
  tabBarLabel: 'Schedule',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="pill" source="MaterialCommunityIcons" />
  ),
};

ScheduleStack.path = '';

const PillDiaryStack = createStackNavigator(
  {
    PillDiary: PillDiaryScreen,
  },
  config
);

PillDiaryStack.navigationOptions = {
  tabBarLabel: 'Pill Diary',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-journal' : 'md-journal'}
    />
  ),
};

PillDiaryStack.path = '';

const tabNavigator = createBottomTabNavigator({
  ScheduleStack,
  PillDiaryStack,
});

tabNavigator.path = '';

export default tabNavigator;
