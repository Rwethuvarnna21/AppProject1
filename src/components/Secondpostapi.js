/* eslint-disable prettier/prettier */
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react';
import axios from 'axios';
// import postUrl from '../utils/Apilink'




const Secondpostapi = () => {
    const[name,setName]=useState('')
    const [salary,setSalary]=useState('')
    const [age,setAge]=useState('')
    // const [rating,setRating]=useState('')
    // const [count,setCount]=useState('')
    // const [description,setDescription]=useState('')
    const postData=()=>{
        axios.post('https://dummy.restapiexample.com/api/v1/create',{name:name,salary:543,Age:45})
        .then((response)=> {
            console.log('processor=>',response.data);
            Alert.alert('sucessesfully selected');


        });
        
        // .catch ((error) => {
          // console.error('Error:', error);
      
        
        };


  return (
    <View style={{flex:1,backgroundColor:'orange'}}>
      <Text style={{color:'black',fontSize:12}}>Secondpostapi</Text>
      <TextInput
      placeholder='enter ur nmae'
      placeholderTextColor={'black'}
      value={name}
      onChangeText={setName}/>
      <TextInput
      placeholder='enter ur salary'
      placeholderTextColor={'black'}
      value={salary}
      onChangeText={setSalary}/>
      <TextInput
      placeholder='enter ur age'
      placeholderTextColor={'black'}
      value={age}
      onChangeText={setAge}/>
      {/* <TextInput
      placeholder='enter ur rating'
      placeholderTextColor={'black'}
      value={rating}
      onChangeText={setRating}/>
      <TextInput
      placeholder='enter ur count'
      placeholderTextColor={'black'}
      value={count}
      onChangeText={setCount}/>
      <TextInput
      placeholder='enter ur description'
      placeholderTextColor={'black'}
      value={description}
      onChangeText={setDescription}/> */}
      <Button
      title='submit'
      onPress={postData}/>








    </View>
  )
}

export default Secondpostapi

const styles = StyleSheet.create({})