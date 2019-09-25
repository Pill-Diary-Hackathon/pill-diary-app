import React from 'reactn';
import {
  SectionList,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import moment from 'moment';
import { ListItem, Button, Icon } from 'react-native-elements';
import {PatientSchedulePreference, PatientMedicationSchedule, PatientTrialDrugSchedule,Schedule, Medication, Patient, TimeFrequency} from '../../data/index'
//Meal Times	Frequency	Times to take pill	Medication

const getSchedule = () => {
  let temp = [];
  let patientSchedules = PatientTrialDrugSchedule.filter( x => {return x.PatientId == "08f5798-e303-4c10-9198-59a6da622b2d"});
  let tempSched;
  let finalSched = [];
  for(let n of patientSchedules) {
    console.log(n);
    tempSched = Schedule.filter(x => x.ScheduleId === n.ScheduleId);
    for(let t of tempSched) {
      var patientWakeup, patientSleep, patientPref;
      patientPref = PatientSchedulePreference.find(x => x.PatientId == "08f5798-e303-4c10-9198-59a6da622b2d");
      
      patientWakeup = patientPref.SleepEnd;
      patientSleep = patientPref.SleepStart;
      
      var time = TimeFrequency.find(x => x.TimeFrequencyId == t.TimeFrequencyId);
      
      // found time
      let interval, minutes;
      let finalTimes = [];
      let thours,rhours,tminutes,rminutes;
      if(time) {
        interval = time.Interval.split(":");
        // get time interval in minutes
        minutes = Number(interval[1]) + (Number(interval[0])*60);

        // get start and end times for interval in minutes 
        patientWakeupInMinutes = (Number(patientWakeup.split(":")[0])*60) + Number(patientWakeup.split(":")[1]);
        patientSleepInMinutes = (Number(patientSleep.split(":")[0]*60)) + Number(patientSleep.split(":")[1]);

        // from start interval while less than end interval
        // push the times to final times array
        // need to add medication
        while (patientWakeupInMinutes < patientSleepInMinutes) {
          thours = Number(Number(patientWakeupInMinutes) / 60);
          rhours = Math.floor(thours);
          tminutes = (thours - rhours) * 60;
          rminutes = Math.round(tminutes);
          finalTimes.push(`${rhours}:${rminutes}`);
          patientWakeupInMinutes += minutes;
        }


      }
      
    }
  }
};
getSchedule();
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

                {medications.map(medication => {
                  const { id, title: medTitle, numPills, taken } = medication;
                  return (
                    <ListItem
                      titleStyle={styles.medicationItem}
                      key={id}
                      bottomDivider
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
                                <Icon name="checkbox" type="foundation" />
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
                                  />
                                  <Button
                                    title="Took It Earlier"
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
                                    title="Edit"
                                    buttonStyle={styles.buttonStyle}
                                    titleStyle={styles.buttonTextStyle}
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
