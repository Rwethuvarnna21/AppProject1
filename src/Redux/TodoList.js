// src/components/TodoList.js

import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, deleteTodo } from '../Redux/TodoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <View>
      {todos.map((todo) => (
        <View key={todo.id}>
          <TouchableOpacity onPress={() => handleToggle(todo.id)}>
            <Text
              style={{
                textDecorationLine: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </Text>
          </TouchableOpacity>
          <Button title="Delete" onPress={() => handleDelete(todo.id)} />
        </View>
      ))}
    </View>
  );
};

export default TodoList;
