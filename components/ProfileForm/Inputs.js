import React from 'reactn';
import { TextInput, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select';

export function Input(props) {
  const { onChangeValue, name, ...rest } = props;

  const onChangeText = text => {
    onChangeValue(name, text);
  };

  return (
    <TextInput style={styles.root} {...rest} onChangeText={onChangeText} />
  );
}

export function Picker(props) {
  const { onChangeValue, name, items } = props;
  return (
    <RNPickerSelect
      style={styles.root}
      onValueChange={value => onChangeValue(name, value)}
      items={items}
    />
  );
}

export function TimePicker(props) {
  const { onChangeValue, name, value, placeholder } = props;
  return (
    <DatePicker
      style={{ width: 200 }}
      date={value}
      mode="time"
      placeholder={placeholder}
      format="h:m A"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft: 0,
        },
        dateInput: {
          marginLeft: 36,
        },
        // ... You can check the source to find the other keys.
      }}
      onDateChange={date => {
        onChangeValue(name, date);
      }}
    />
  );
}

export function DPicker(props) {
  const { onChangeValue, name, value, placeholder } = props;
  return (
    <DatePicker
      style={{ width: 200 }}
      date={value}
      mode="date"
      placeholder={placeholder}
      format="MM-DD-YYYY"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{
        dateIcon: {
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft: 0,
        },
        dateInput: {
          marginLeft: 36,
        },
        // ... You can check the source to find the other keys.
      }}
      onDateChange={date => {
        onChangeValue(name, date);
      }}
    />
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
