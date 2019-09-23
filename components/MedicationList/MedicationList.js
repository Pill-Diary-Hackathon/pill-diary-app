import React from 'react';
import {
  SectionList,
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  View,
  Platform,
  StyleSheet,
} from 'react-native';

import { ListItem } from 'react-native-elements';

const compObj = {
  touchable: {
    android: TouchableNativeFeedback,
    ios: TouchableOpacity,
  },
};

const MedicationList = () => {
  const TouchableComponent = compObj.touchable[Platform.OS];
  return (
    <SectionList
      style={{
        width: '100%',
      }}
      sections={[
        {
          title: 'At-Home Medications',
          data:
            [
              { name: 'drug1', genericName: 'dd' },
              { name: 'drug2', genericName: 'dd2' },
            ] || [],
        },
        {
          title: 'In-Clinic Medications',
          data: [{ name: 'drug3', genericName: 'dd' }, { name: 'drug4' }] || [],
        },
      ]}
      renderItem={({ item, index, section }) => (
        <TouchableOpacity onPress={null}>
          <ListItem
            title={item.name}
            subtitle={item.genericName || null}
            rightIcon={{ name: 'chevron-right', type: 'material-community' }}
          />
        </TouchableOpacity>
      )}
      renderSectionHeader={({ section }) =>
        section.data.length ? (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        ) : null
      }
      keyExtractor={(item, index) => index}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      SectionSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    backgroundColor: 'rgb(200, 199, 204)',
    height: StyleSheet.hairlineWidth,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});

export default MedicationList;
