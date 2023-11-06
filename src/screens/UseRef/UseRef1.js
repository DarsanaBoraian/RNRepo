import React, {useRef, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
//Accessing and Managing DOM Elements:
export default function UseRef1() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus on the input element when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <View style={styles.container}>
      <Text> My Component</Text>
      <TextInput style={styles.textInput} ref={inputRef} />
      <Text>Focus set to Text Input</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
});
