import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderColor: '#DCDCDC',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
  },
});


export function Input({...rest}: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      {...rest}
    />
  );
}