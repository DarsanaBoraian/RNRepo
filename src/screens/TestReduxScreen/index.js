//yarn add react-redux
// yarn add @reduxjs/toolkit
// yarn add redux

import {View, TouchableOpacity, Text, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addCar} from '../../../features/cars/carSlice';
import styles from '../styles';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../../../features/counter/counterSlice';

export default function TestReduxScreen() {
  const [inputVal, setInputVal] = useState(0);
  const [currentCar, setCurrentCar] = useState([]);
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  const cars = useSelector(state => state.car);

  return (
    <View>
      <Text>ReduxScreen</Text>
      <Text>{count}</Text>

      <TouchableOpacity
        onPress={() => {
          dispatch(increment());
        }}>
        <Text>Increment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          dispatch(decrement());
        }}>
        <Text>Decrement</Text>
      </TouchableOpacity>
      <Text>Increment by value</Text>
      <TextInput
        style={styles.textInput}
        value={inputVal}
        onChangeText={changedText => setInputVal(changedText)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(incrementByAmount(parseInt(inputVal)));
        }}>
        <Text>Increment by value</Text>
      </TouchableOpacity>

      <View style={styles.pinkContainer}>
        <TextInput
          style={styles.textInput}
          value={currentCar}
          onChangeText={changedText => setCurrentCar(changedText)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(addCar(currentCar))}>
          <Text>Add Car</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={cars}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
