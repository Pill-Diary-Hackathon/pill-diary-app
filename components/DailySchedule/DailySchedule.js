import React from 'react';
import {
  SectionList,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import moment from 'moment';
import { ListItem, Button, Icon } from 'react-native-elements';

//Meal Times	Frequency	Times to take pill	Medication

const dummySchedule = [
  {
    id: 1,
    title: '',
    time: moment([2019, 9, 24, 7, 30]),
    medications: [
      { id: 1, title: 'Morphine', numPills: 3, taken: true },
      { id: 2, title: 'Temozolomide ', numPills: 1, taken: false },
      { id: 3, title: 'Regorafanib ', numPills: 1, taken: false },
    ],
  },
  {
    title: 'Before Breakfast',
    time: undefined,
    medications: [
      { id: 1, title: 'Pill 1', numPills: 3 },
      { id: 2, title: 'Pill 2', numPills: 1 },
    ],
  },
  {
    id: 2,
    title: 'Breakfast',
    type: 'Meal',
    time: undefined,
    medications: [
      { id: 1, title: 'Pill 1', numPills: 3 },
      { id: 2, title: 'Pill 2', numPills: 1 },
    ],
  },
];

export default function DailySchedule() {
  return (
    <SectionList
      style={{
        width: '100%',
      }}
      sections={[{ title: '', data: dummySchedule || [] }]}
      renderItem={({ item, index, section }) => {
        const { time, title, medications, type } = item;
        const timeString = time ? time.format('h:m A') : 'Time Not Set Yet';
        return (
          <TouchableOpacity onPress={null}>
            <ListItem
              leftElement={
                <View
                  style={{
                    width: 50,
                    borderColor: 'blue',
                    borderWidth: 2,
                    borderRadius: 3,
                    overflow: 'hidden',
                  }}
                >
                  <Text style={{ fontSize: 10, textAlign: 'center' }}>
                    {timeString}
                  </Text>
                </View>
              }
              title={
                <View>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignContent: 'center',
                    }}
                  >
                    {title ? (
                      <Text style={{ padding: 10 }}>{title}</Text>
                    ) : null}
                    {type === 'Meal' ? (
                      <Icon name="food-variant" type="material-community" />
                    ) : null}
                  </View>

                  {medications.map(medication => {
                    const { id, title: medTitle, numPills, taken } = medication;
                    return (
                      <ListItem
                        titleStyle={styles.medicationItem}
                        key={id}
                        title={`${medTitle} - (${numPills} pills)`}
                        bottomDivider
                        rightElement={
                          !taken ? <Button title="took it" /> : null
                        }
                      />
                    );
                  })}
                </View>
              }
              subtitle={null}
            />
          </TouchableOpacity>
        );
      }}
      renderSectionHeader={({ section }) =>
        section.data.length ? <Text>{section.title}</Text> : null
      }
      keyExtractor={(item, index) => index}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      SectionSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

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
  medicationItem: {
    fontSize: 10,
  },
});
