import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OnePay from '../../assets/Images/OnePay.svg'
import Noti from '../../assets/Images/Noti.svg'
import Frame from '../../assets/Images/Frame.png'
import Wallet from '../../assets/Images/Wallet.svg'
import Sub from '../../assets/Images/Sub.svg'
import Earning from '../../assets/Images/Earning.svg'
import New from '../../assets/Images/New.png'
import SubCategory from '../Component/SubCategory'
const Main = () => {
  return (
    <View>
      <View style={{height:50,width:500,backgroundColor:'white',elevation:3}}>
        <View style={{height:50,width:100,bottom:17,marginHorizontal:20,flexDirection:'row'}}>
        <OnePay height={100} width={100} />
        <View style={{height:60,width:246,flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end',paddingBottom:3}}>
<Noti height={25} width={25}/>
        </View>
        
</View>
      </View>
      <ScrollView>
      <Image source={Frame} style={{height:160,width:'92%',justifyContent:'center',alignItems:'center',alignSelf:'center',borderRadius:12,marginTop:18}}/>
      <View style={{height:50,width:'92%',backgroundColor:'#2D368F',borderRadius:12,justifyContent:'center',alignItems:'center',alignSelf:'center',marginTop:12}}>
      <View style={{height:50,width:90,borderRadius:12,right:120,flexDirection:'row',top:27}}>
<Wallet height={20} width={20} top={6}/>
<Text style={{color:'white',left:7}}>Wallet Balence</Text>
</View>
<View style={{height:40,width:120,flexDirection:'row',bottom:17}}>
<Text style={{color:'white',fontSize:15,top:3}}> SR </Text>
<Text style={{color:'white',fontWeight:'700',fontSize:22}}>5500.50</Text>
<View style={{justifyContent:'flex-end',alignItems:'flex-end',flexDirection:'row',height:40,width:130,}}>
<Sub height={60} width={60}/>
</View> 
</View>
      </View>
      <View style={{height:50,width:'92%',backgroundColor:'#1EA55E',borderRadius:12,justifyContent:'center',alignItems:'center',alignSelf:'center',marginTop:9}}>
      <View style={{height:50,width:60,borderRadius:12,right:135,flexDirection:'row',top:27}}>
<Earning height={20} width={20} top={6}/>
<Text style={{color:'white',left:7}}>your Earning</Text>
</View>
<View style={{height:40,width:120,flexDirection:'row',bottom:17}}>
<Text style={{color:'white',fontSize:15,top:3}}> SR </Text>
<Text style={{color:'white',fontWeight:'700',fontSize:22}}>5500.50</Text>
<View style={{justifyContent:'flex-end',alignItems:'flex-end',flexDirection:'row',height:40,width:130,}}>
<Sub height={60} width={60}/>
</View> 
</View>
</View>
<View style={{height:50,width:'92%',backgroundColor:'white',borderRadius:12,justifyContent:'center',alignItems:'center',alignSelf:'center',marginTop:9}}>
    <View style={{flexDirection:'row',}}>
    <View style={{height:40,width:80,flexDirection:'row',right:80,top:7}}>
<Text style={{color:'#1EA55E',fontSize:13}}>Due:</Text>
<Text style={{color:'#1EA55E',fontWeight:'700'}}>1000</Text>
<Text style={{color:'#1EA55E',fontSize:12,top:2}}>SR</Text>
</View>
<View style={{height:40,width:80,flexDirection:'row',left:60,top:7}}>
<Text style={{color:'red',fontSize:13}}>Credit:</Text>
<Text style={{color:'red',fontWeight:'700'}}>1000</Text>
<Text style={{color:'red',fontSize:12,top:2}}>SR</Text>
</View>
</View>
</View>
<View style={{height:230,width:'92%',borderRadius:12,justifyContent:'center',alignItems:'center',alignSelf:'center', backgroundColor: 'white',marginVertical:12,
          elevation: 4,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          }}>
    
<SubCategory/>
</View>

<Image source={New} style={{height:180,width:'92%',justifyContent:'center',alignItems:'center',alignSelf:'center',borderRadius:11,resizeMode:'stretch'}}/>
<View style={{height:50,width:50,backgroundColor:'red'}}>

</View>
</ScrollView>
</View>
  )
}

export default Main

const styles = StyleSheet.create({})