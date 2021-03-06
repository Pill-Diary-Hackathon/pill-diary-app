import React from 'reactn';
import {
  Ionicons,
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  Foundation,
} from '@expo/vector-icons';

import Colors from '../constants/Colors';

// Go here to search for icons: https://expo.github.io/vector-icons/

export default function TabBarIcon(props) {
  const { name, source, focused } = props;
  switch (source) {
    case 'AntDesign':
      return (
        <AntDesign
          name={name}
          size={26}
          style={{ marginBottom: -3 }}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      );
    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          name={name}
          size={26}
          style={{ marginBottom: -3 }}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      );
    case 'Entypo':
      return (
        <Entypo
          name={name}
          size={26}
          style={{ marginBottom: -3 }}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      );
    case 'Foundation':
      return (
        <Foundation
          name={name}
          size={26}
          style={{ marginBottom: -3 }}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      );
    default:
      return (
        <Ionicons
          name={name}
          size={26}
          style={{ marginBottom: -3 }}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      );
  }
}
