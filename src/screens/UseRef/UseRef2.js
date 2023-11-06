import React, {useRef, useState} from 'react';
import {View, Text, Button} from 'react-native';
//Storing mutable values that wont trigger re - renders

export default function UseRef2() {
  const count = useRef(0); // Initialize with a mutable value
  const [renderCount, setRenderCount] = useState(0);

  const increment = () => {
    count.current += 1; // Mutable value can be modified directly
    setRenderCount(renderCount + 1); // Trigger a re-render
  };

  return (
    <View>
      <Text>Count: {count.current}</Text>
      <Text>Render Count: {renderCount}</Text>
      <Button title="Increment" onPress={increment} />
    </View>
  );
}
