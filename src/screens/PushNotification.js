import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import messaging  from '@react-native-firebase/messaging'
import { useEffect } from 'react'

const PushNotification = () => {
  useEffect(()=>{
    getDeviceToken();
  },[])
  const getDeviceToken=async()=>{
    let token=await messaging().getToken();
    console.log(token);
  }

  return (
    <View style={{flex:1,backgroundColor:'white',justifyContent:'center'}}>
      <Text style={{color:'black'}}>PushNotification</Text>
    </View>
  )
}

export default PushNotification

const styles = StyleSheet.create({})