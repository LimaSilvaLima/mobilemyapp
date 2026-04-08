import {Text, View, StyleSheet,  KeyboardAvoidingView} from 'react-native';


export default function Signup() {
  return (
    <KeyboardAvoidingView style={styles.screenContainer} behavior={'padding'}>
      <View style={styles.contentCenter}>
        <Text>Signup </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 32,
  },
  
});

