// /* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, FlatList,Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Secondapi = () => {
  const [api, setApi] = useState([]);

  const getproduct = () => {
    axios.get('https://jsonplaceholder.typicode.com/photos').then((response) => {
      console.log('processing=>', response)
      setApi(response.data)

    })
  }
  useEffect(() => {
    getproduct();
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <FlatList
        data={api}
        renderItem={({ item }) =>
          <View style={{ height:67, width: '100%',flexDirection:'row'}}>
            <Image source={{ uri: item.url }} style={{ height: 45, width: 67 }} />
            <View style={{marginBottom:16,borderWidth:1,borderColor:'red',borderRadius:4,width:'80%'}}>
            <Text style={{color:'black'}} numberOfLines={1}>     {item.title}</Text>
            <Text style={{color:'grey'}} numberOfLines={1}>{item.thumbnailUrl}</Text>
          </View>
          
          </View>
        }
      />
    </View>

  )
}





export default Secondapi;

const styles = StyleSheet.create({
  item:{
    fontSize:32,
    color:'red',
  },
})