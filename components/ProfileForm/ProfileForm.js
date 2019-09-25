import React from 'reactn';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Wizard from './Wizard';
import Input from './Input';

const pages = [
  [
    {
      placeholder: 'Username here...',
      name: 'username',
    },
  ],
  [
    {
      placeholder: 'Email here...',
      name: 'email',
    },
  ],
  [
    {
      placeholder: 'Avatar here...',
      name: 'avatar',
    },
  ],
];

export default function ProfileForm() {
  return (
    <View style={styles.root}>
      <Wizard
        initialValues={{
          username: '',
          email: '',
          avatar: '',
        }}
      >
        {pages.map((page, ind) => (
          <Wizard.Step key={ind}>
            {({ onChangeValue, values }) =>
              page.map(field => (
                <View key={field.name} style={styles.container}>
                  <Input
                    onChangeValue={onChangeValue}
                    placeholder={field.placeholder}
                    value={values[field.name]}
                    name={field.name}
                  />
                </View>
              ))
            }
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
  },
});
