import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';


type ButtonProps = TouchableOpacityProps & {
  label: string;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3366FF', 
    width: '100%',
    height: 48,
    paddingHorizontal: 32,
    borderRadius: 8,        
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    },
});

  

export function Button ({label, ...rest}: ButtonProps ) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

