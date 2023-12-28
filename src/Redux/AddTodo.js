// src/components/AddTodo.js

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/TodoSlice';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Add a new todo"
        value={text}
        onChangeText={(newText) => setText(newText)}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  );
};

export default AddTodo;
