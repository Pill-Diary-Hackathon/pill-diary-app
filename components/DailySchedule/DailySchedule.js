import React, { useGlobal } from 'reactn';
import {
  SectionList,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import moment from 'moment';
import { ListItem, Button, Icon, Overlay } from 'react-native-elements';
import { useEffect } from 'react';

//Meal Times	Frequency	Times to take pill	Medication

const dummySchedule = [
  {
    id: 1,
    title: '',
    time: moment([2019, 9, 25, 7, 30]),
    medications: [
      {
        id: 1,
        title: 'Morphine',
        numPills: 3,
        taken: true,
        timeTaken: moment([2019, 9, 25, 7, 35]),
      },
      {
        id: 2,
        title: 'Temozolomide ',
        numPills: 1,
        taken: false,
        timeTaken: undefined,
      },
      {
        id: 3,
        title: 'Regorafanib ',
        numPills: 1,
        taken: false,
        timeTaken: undefined,
      },
    ],
  },
  {
    title: 'Before Breakfast',
    time: moment([2019, 9, 25, 12, 30]),
    medications: [
      {
        id: 1,
        title: 'Pill 1',
        numPills: 3,
        taken: false,
        timeTaken: undefined,
      },
      {
        id: 2,
        title: 'Pill 2',
        numPills: 1,
        taken: false,
        timeTaken: undefined,
      },
    ],
  },
  {
    id: 2,
    title: 'Breakfast',
    type: 'Meal',
    time: moment([2019, 9, 25, 13, 30]),
    medications: [
      {
        id: 1,
        title: 'Pill 1',
        numPills: 3,
        taken: false,
        timeTaken: undefined,
      },
      {
        id: 2,
        title: 'Pill 2',
        numPills: 1,
        taken: false,
        timeTaken: undefined,
      },
    ],
  },
];

export default function DailySchedule() {
  const [schedule, setSchedule] = useGlobal('schedule');
  useEffect(() => {
    setSchedule(dummySchedule);
  }, []);
  const handleMedTakenChange = ({
    taken,
    item,
    index,
    medication,
    medIndex,
  }) => {
    const updatedMeds = [...item.medications];
    updatedMeds[medIndex] = {
      ...updatedMeds[medIndex],
      taken,
      timeTaken: taken ? moment() : undefined,
    };
    const updatedSection = { ...item, medications: updatedMeds };
    const updatedSchedule = [...schedule];
    updatedSchedule[index] = updatedSection;
    setSchedule(updatedSchedule);
  };
  return (
    <SectionList
      style={{
        width: '100%',
      }}
      sections={[{ title: '', data: schedule || [] }]}
      renderItem={({ item, index, section }) => {
        const { time, title, medications, type } = item;
        const timeString = time ? time.format('h:m A') : 'Time Not Set Yet';
        return (
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
                  {title ? <Text style={{ padding: 10 }}>{title}</Text> : null}
                  {type === 'Meal' ? (
                    <Icon name="food-variant" type="material-community" />
                  ) : null}
                </View>

                {medications.map((medication, medIndex) => {
                  const {
                    id,
                    title: medTitle,
                    numPills,
                    taken,
                    timeTaken,
                  } = medication;
                  return (
                    <ListItem
                      titleStyle={styles.medicationItem}
                      key={id}
                      topDivider
                      title={
                        <TouchableOpacity onPress={null}>
                          <View
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                          >
                            <View
                              style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                              }}
                            >
                              <Text
                                style={{ marginRight: 20 }}
                              >{`${medTitle} - (${numPills} pills)`}</Text>
                              {taken ? (
                                <View
                                  style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                  }}
                                >
                                  <Icon
                                    name="checkbox"
                                    type="foundation"
                                    color="green"
                                  />
                                  <Text style={{ marginLeft: 5 }}>
                                    Taken @ {timeTaken.format('h:m A')}
                                  </Text>
                                </View>
                              ) : null}
                            </View>
                            <View>
                              {!taken ? (
                                <View
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                  }}
                                >
                                  <Button
                                    title="Just Took It"
                                    buttonStyle={styles.buttonStyle}
                                    titleStyle={styles.buttonTextStyle}
                                    onPress={() =>
                                      handleMedTakenChange({
                                        taken: true,
                                        item,
                                        index,
                                        medication,
                                        medIndex,
                                      })
                                    }
                                  />
                                  <Button
                                    title="Took It Earlier / Later"
                                    buttonStyle={styles.buttonStyle}
                                    titleStyle={styles.buttonTextStyle}
                                  />
                                  <Button
                                    title="Missed It"
                                    buttonStyle={styles.buttonStyle}
                                    titleStyle={styles.buttonTextStyle}
                                  />
                                </View>
                              ) : (
                                <View
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                  }}
                                >
                                  <Button
                                    title="Undo Taken"
                                    buttonStyle={styles.buttonStyle}
                                    titleStyle={styles.buttonTextStyle}
                                    onPress={() =>
                                      handleMedTakenChange({
                                        taken: false,
                                        item,
                                        index,
                                        medication,
                                        medIndex,
                                      })
                                    }
                                  />
                                  <Button
                                    title="Add Note"
                                    buttonStyle={styles.buttonStyle}
                                    titleStyle={styles.buttonTextStyle}
                                  />
                                </View>
                              )}
                            </View>
                          </View>
                        </TouchableOpacity>
                      }
                    />
                  );
                })}
              </View>
            }
            subtitle={null}
          />
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
  buttonStyle: {
    // width: 20,
    margin: 5,
  },
  buttonTextStyle: {
    fontSize: 10,
  },
});
