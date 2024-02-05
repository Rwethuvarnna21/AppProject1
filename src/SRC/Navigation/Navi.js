import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Otp from '../Screen/Otp';
import PayLogin from '../Screen/PayLogin';
import Main from '../Screen/Main';
import BottomNav from './BottomNav';
import { LoginProvider } from '../Store/LoginContext';
const Stack = createNativeStackNavigator();
 export const Navi=()=>{
    return(
       <NavigationContainer>
           <LoginProvider>
             <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='PayLogin' component={PayLogin} />
                <Stack.Screen name='Otp' component={Otp} />
                <Stack.Screen name='Main' component={BottomNav} />
             </Stack.Navigator>
             </LoginProvider>
        </NavigationContainer>
    )
}