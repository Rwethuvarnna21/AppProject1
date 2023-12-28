import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import { postcodeUrl } from '../utils/Apilink'

const Postcodeapi = () => {
  const [post, setPost] = useState('');
  const [pincode, setPincode] = useState([]);

  const getProduct = () => {
    axios.get(`${postcodeUrl}/${post}`).then((response) => {
      console.log('process=>', response)
      setPincode(response.data)
    })
  };




  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* <Text style={{ color: 'black' }}>Postcodeapi</Text> */}
      <TextInput
        style={{ color: 'black' }}
        placeholder='enter pin code'
        placeholderTextColor='black'
        value={post}
        onChangeText={setPost} />
      <Button
        title='submit'
        onPress={getProduct} />
      <View style={{ height: 300, color: 'blue' }}>
        <FlatList
          data={pincode}
          renderItem={({ item }) =>(
            <><Text style={{color:'black',fontSize:13}}>{item?.PostOffice[0].Name}</Text>
            <Text style={{color:'blue',fontsize:14}}>{item?.PostOffice[0].District}</Text>
            <Text style={{color:'blue',fontsize:14}}>{item?.PostOffice[0].Division}</Text>
            <Text style={{color:'blue',fontsize:14}}>{item?.PostOffice[1].Circle}</Text>
            <Text style={{color:'blue',fontsize:14}}>{item?.PostOffice[1].District}</Text>
            </>
            
          )
          }
            />
      </View>






    </View>
  )
}

export default Postcodeapi;

const styles = StyleSheet.create({})