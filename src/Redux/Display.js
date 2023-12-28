

import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Display = () => {
  const count = useSelector((state) => state.count);

  return (
    <View>
      <Text>Count: {count}</Text>
    </View>
  );
};

export default Display;
