import React from 'reactn';
import { TextInput, StyleSheet } from 'react-native';

export default function Input(props) {
  const { onChangeValue, name, ...rest } = props;

  const onChangeText = text => {
    onChangeValue(name, text);
  };

  return (
    <TextInput style={styles.root} {...rest} onChangeText={onChangeText} />
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#f4f9f4',
    width: '90%',
    height: 45,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
});
