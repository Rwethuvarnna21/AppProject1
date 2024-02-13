import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AddTask from '../../Tsrc/Scrn/AddTask';
import Home from '../../Tsrc/Scrn/Home';

const Stack = createNativeStackNavigator();

const Navg = () => {
  const queryClient=new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddTask" component={AddTask} />
      </Stack.Navigator>
    </NavigationContainer>
    </QueryClientProvider>
  );
};

export default Navg;
