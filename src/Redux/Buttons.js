

import React from 'react';
import { View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../Redux/InDe';

const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="Reset" onPress={() => dispatch(reset())} />
    </View>
  );
};

export default Buttons;
