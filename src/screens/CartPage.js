import { StyleSheet, Text, View ,FlatList,Image} from 'react-native'
import React from 'react'

const CartPage = ({route}) => {
    const {item}=route.params
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <Text>CartPage</Text>
      <FlatList
        data={item}
        // keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
        
          <View style={{ flex: 1, height: 150, width: '90%', borderWidth: 1, marginHorizontal: 20, marginTop: 10 }}>
            <Image source={{ uri: item.image }} style={{ height: 50, width: 80, resizeMode: 'stretch' }} />
            <Text style={{ color: 'black' }} numberOfLines={1}>{item.title}</Text>
            <Text style={{ color: 'grey' }}>{item.price}</Text>
            </View>
            )}
            />
    </View>
  )
}

export default CartPage

const styles = StyleSheet.create({})