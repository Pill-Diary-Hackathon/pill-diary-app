import React, { useGlobal } from 'reactn';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ProfileForm } from '../components/ProfileForm';

export default function ProfileScreen() {
  const [user] = useGlobal('user');

  return <ProfileForm />;
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
