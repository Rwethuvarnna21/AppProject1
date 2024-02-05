import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import OnePay from '../../assets/Images/OnePay.svg'
import LinearGradient from 'react-native-linear-gradient'
import Lock from '../../assets/Images/Lock.svg'
import User from '../../assets/Images/User.svg'
import Eye from '../../assets/Images/Eye.svg'
import { LoginContext } from '../Store/LoginContext'
import { useNavigation } from '@react-navigation/native'
import { useContext } from 'react'
const PayLogin = () => {
  const navigation=useNavigation()
  const {PostData}=useContext(LoginContext)
  const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const handlePostData=()=>{
  PostData(
    username,
    password
  )
  if (username==='rwethu1234'&& password==='rwethu1234'){
    navigation.navigate('Otp')
  }
}
  return (
    <View style={{height:290,width:400,backgroundColor:'white',}}>
      <View style={{height:250,width:250,justifyContent:'center',alignSelf:'center',backgroundColor:'white'}}>
<OnePay />

</View>

       
<LinearGradient colors={['#0FB259','#2D368F']}   end={{ x: 1, y: 0.5 }}
        locations={[0, 0.5]}  style={{height:'190%',width:'100%', }}>
          
          <View style={{height:90,width:280,paddingHorizontal:33,top:21}}>
<Text style={{color:'white',fontWeight:'bold',fontSize:28}}>Hello,</Text>
<Text style={{color:'#EFEFEF',fontSize:25,opacity:0.6}}>Welcome Back!</Text>
</View>
<View style={{height:50,width:280,paddingHorizontal:33,top:19,paddingTop:18}}>
<Text style={{color:'white',fontWeight:'600',fontSize:21}}>Login</Text>
</View>
<View style={{height:50,width:'83%',backgroundColor:'white',justifyContent:'center',alignSelf:'center',alignItems:'center',borderRadius:6,top:28}}>
  <View style={{height:40,width:120,paddingTop:8,flexDirection:'row',right:99}}>
<User height={22} width={29}/>
<TextInput
placeholder='username'
placeholderTextColor='grey'
style={{color:'black',height:40,width:80,bottom:10}}
value={username}
onChangeText={setUsername}
 />
</View>
</View>
<View style={{height:50,width:'83%',backgroundColor:'white',justifyContent:'center',alignSelf:'center',alignItems:'center',borderRadius:6,top:28,marginVertical:14}}>
  <View style={{height:40,width:120,paddingTop:8,flexDirection:'row',right:99}}>
<Lock height={22} width={22} left={5} />
<TextInput
placeholder='Password'
placeholderTextColor='grey'
style={{color:'black',height:40,width:264,bottom:8,paddingHorizontal:14}}
value={password}
onChangeText={setPassword}
/>
<Eye top={4}/>
</View>
</View>
<TouchableOpacity style={{height:50,width:'83%',backgroundColor:'#1EA55E',justifyContent:'center',alignSelf:'center',alignItems:'center',borderRadius:6,marginVertical:100,}}
onPress={handlePostData}

>
  <Text style={{color:'white',fontWeight:'800',fontSize:15}}>Login</Text>
  
</TouchableOpacity>
</LinearGradient>

    </View>
  )
}

export default PayLogin

const styles = StyleSheet.create({})