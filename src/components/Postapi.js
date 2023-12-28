/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const Postapi = () => {
  const [status, setStatus] = useState('');
  const [data, setData] = useState('');
  const [message, setMessage] = useState('');
  const postData = () => {
    axios.post('https://dummy.restapiexample.com/api/v1/create', { status: 'single', data: 123, message: 'stop', }).then((response) => {
      console.log = ('process:', response.data);
      Alert.alert('successfully created');



    })
      
      


  };
  return (
    <View style={{ flex: 1, backgroundColor: 'skyblue' }}>
      <Text style={{ fontSize: 12, color: 'black' }}>postapi</Text>
      <TextInput
        placeholder='enter status'
        placeholderTextColor={'black'}
        value={status}
        onChangeText={setStatus}
      />

      <TextInput
        placeholder='enter data'
        placeholderTextColor={'black'}
        value={data}
        onChangeText={setData}
      />
      <TextInput
        placeholder='enter message'
        placeholderTextColor={'black'}
        value={message}
        onChangeText={setMessage}
      />
      <Button
        title='enter ur name'
        onPress={postData} />
      <TextInput style={{ alignItems: 'center', alignSelf: 'center' }} />



    </View>
  )
}

export default Postapi;

