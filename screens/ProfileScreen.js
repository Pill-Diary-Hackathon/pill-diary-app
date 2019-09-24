import React, { useGlobal } from 'reactn';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  const [user] = useGlobal('user');

  const fields = [
    { title: 'First Name', fieldName: 'firstName' },
    { title: 'Last Name', fieldName: 'lastName' },
    { title: 'Date of Birth', fieldName: 'dob' },
    { title: 'Sex', fieldName: 'sex' },
  ];
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>Let's just make sure all of your personal info is correct:</Text>
        {fields.map(field => {
          const { title, fieldName } = field;
          return (
            <View key={title}>
              <Text>{title}:</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

ProfileScreen.navigationOptions = {
  title: 'Welcome!',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
