import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>hi</Text>
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
