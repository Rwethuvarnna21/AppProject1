import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Cart from '../assets/Images/Cart.svg'
function CartScreen(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

    </View>
  )
}

const Tab=createBottomTabNavigator
const Icon = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="CART" component={CartScreen} options={{
  tabBarIcon:()=>{
    return(
      <Cart height={24} width={24}/>
    )
  }
} }
/>
  

</Tab.Navigator>
  )
}
export default Icon

const styles = StyleSheet.create({})
