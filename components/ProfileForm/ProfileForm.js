import React from 'reactn';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Wizard from './Wizard';
import { Input, TimePicker, DPicker as DatePicker, Picker } from './Inputs';

const pages = [
  {
    headerText: "Let's make sure we have your personal info in order!",
    fields: [
      {
        displayName: 'First Name',
        fieldName: 'firstName',
        placeholder: 'Enter your first name...',
        fieldType: 'input',
      },
      {
        displayName: 'Last Name',
        fieldName: 'lastName',
        placeholder: 'Enter your last name...',
        fieldType: 'input',
      },
      {
        displayName: 'Date of Birth',
        fieldName: 'dob',
        placeholder: 'Enter your birthday...',
        fieldType: 'date',
      },
      {
        displayName: 'Sex',
        fieldName: 'sex',
        placeholder: 'Enter your sex...',
        fieldType: 'picker',
        items: [{ label: 'Male', value: 'm' }, { label: 'Female', value: 'f' }],
      },
    ],
  },

  {
    headerText: 'Perfect! Please confirm who your doctor is...',
    fields: [
      {
        displayName: 'Your MSK Doctor',
        placeholder: 'Enter your MSK Doctor here...',
        fieldName: 'doctor',
        fieldType: 'input',
      },
    ],
  },
  {
    headerText: "You're doing awesome! Let's talk about sleep...",
    fields: [
      {
        placeholder: 'When do you usually wake up?',
        displayName: 'Wake-up Time',
        fieldName: 'wake',
        fieldType: 'time',
      },
      {
        placeholder: 'When do you usually go to bed?',
        displayName: 'Bedtime',
        fieldName: 'sleep',
        fieldType: 'time',
      },
    ],
  },
  {
    headerText: 'Sleep is cool, but food is better!',
    fields: [
      {
        placeholder: 'When do you usually eat breakfast?',
        displayName: 'Breakfast Time',
        fieldName: 'breakfast',
        fieldType: 'time',
      },
      {
        placeholder: 'When do you usually eat lunch?',
        displayName: 'Lunch Time',
        fieldName: 'lunch',
        fieldType: 'time',
      },
      {
        placeholder: 'When do you usually eat dinner?',
        displayName: 'Dinner Time',
        fieldName: 'dinner',
        fieldType: 'time',
      },
    ],
  },
];

const renderField = props => {
  const { fieldType, ...rest } = props;
  switch (fieldType) {
    case 'input':
      return <Input {...rest} />;
    case 'time':
      return <TimePicker {...rest} />;
    case 'date':
      return <DatePicker {...rest} />;
    case 'picker':
      return <Picker {...rest} />;
    default:
      return null;
  }
};

export default function ProfileForm() {
  return (
    <View style={styles.root}>
      <Wizard
        initialValues={{
          firstName: 'Hermione',
          lastName: 'Granger',
          dob: '09-25-1991',
          sex: 'f',
          wake: '',
          sleep: '',
          doctor: 'Dr. Thompson',
          breakfast: '',
          lunch: '',
          dinner: '',
        }}
      >
        {pages.map((page, ind) => (
          <Wizard.Step key={ind}>
            {({ onChangeValue, values }) => (
              <View style={styles.container}>
                <Text style={styles.headerText}>{page.headerText}</Text>
                {page.fields.map(field => (
                  <View key={field.fieldName} style={styles.formContainer}>
                    <Text>{field.displayName}</Text>
                    {renderField({
                      fieldType: field.fieldType,
                      onChangeValue,
                      placeholder: field.placeholder,
                      value: values[field.fieldName],
                      name: field.fieldName,
                      items: field.items,
                    })}
                    {/* <Input
                    onChangeValue={onChangeValue}
                    placeholder={field.placeholder}
                    value={values[field.fieldName]}
                    name={field.fieldName}
                  /> */}
                  </View>
                ))}
              </View>
            )}
          </Wizard.Step>
        ))}
      </Wizard>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: 'white',
    padding: 5,
  },
  headerText: {
    fontSize: 25,
    padding: 10,
  },
});
