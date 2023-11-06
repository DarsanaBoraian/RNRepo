//Preserving State Across Re-renders:
import React, {useRef, useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';

export default function UseRef4() {
  const initialCount = useRef(0);
  const [count, setCount] = useState(initialCount.current);

  useEffect(() => {
    // Update the count when the component mounts
    initialCount.current = 10;
    setCount(initialCount.current);
  }, []);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Reset" onPress={() => setCount(initialCount.current)} />
    </View>
  );
}
