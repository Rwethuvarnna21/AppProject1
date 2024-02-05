import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from '../Screen/Main'
import HomeF from '../../assets/Images/HomeF.svg'
import HomeS from '../../assets/Images/HomeS.svg'
import Payment from '../../assets/Images/Payment.svg'
import PayS from '../../assets/Images/PayS.svg'
import Tran from '../../assets/Images/Tran.svg'
import TranS from '../../assets/Images/TranS.svg'
import Wall from '../../assets/Images/Wall.svg'
import WallS from '../../assets/Images/WallS.svg'
import Paym from '../Screen/Paym'
import Prof from '../../assets/Images/Prof.svg'
import ProfS from '../../assets/Images/ProfS.svg'
const Tab = createBottomTabNavigator()
const BottomNav = () => {
  return (
   <Tab.Navigator>
    <Tab.Screen
    name='Home'
    component={Main}
    options={({route})=>({
        tabBarIcon:({focused})=>
        focused? <HomeF height={20} width={20}/>:<HomeS height={20}width={20}/>,
        headerShown:false,
    }

    )}
    >

    </Tab.Screen>
    <Tab.Screen
    name='Payment'
    component={Paym}
    options={({route})=>({
        tabBarIcon:({focused})=>
        focused? <PayS height={20} width={20}/>:<Payment height={20}width={20}/>,
        headerShown:false,
    }

    )}
    >

    </Tab.Screen>
    <Tab.Screen
    name='Transcations'
    component={Main}
    options={({route})=>({
        tabBarIcon:({focused})=>
        focused? <TranS height={20} width={20}/>:<Tran height={20}width={20}/>,
        headerShown:false,
    }

    )}
    >

    </Tab.Screen>
    <Tab.Screen
    name='Wallet'
    component={Main}
    options={({route})=>({
        tabBarIcon:({focused})=>
        focused? <WallS height={20} width={20}/>:<Wall height={20}width={20}/>,
        headerShown:false,
    }

    )}
    >

    </Tab.Screen>
    <Tab.Screen
    name='Profile'
    component={Main}
    options={({route})=>({
        tabBarIcon:({focused})=>
        focused? <ProfS height={20} width={20}/>:<Prof height={20}width={20}/>,
        headerShown:false,
    }

    )}
    >

    </Tab.Screen>
   </Tab.Navigator>
  )
}

export default BottomNav

const styles = StyleSheet.create({})