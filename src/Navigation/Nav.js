
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../ContextApi/HomeScreen';
import CartScreen from '../screens/CartScreen';
import Icon from '../screens/Icon';
import { ProductProvider } from '../ContextApi/BothContext';
import ScreenContext from '../ContextApi/ScreenContext';
import Cart from '../screens/Cart';
import { CartProvider } from '../ContextApi/CartContext';
import CartPage from '../screens/CartPage';

const Stack = createStackNavigator();

const Nav = () => {
  return (
     <ProductProvider>
    {/* // <CartProvider> */}
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="ScreenContext" component={ScreenContext} />
          <Stack.Screen name="CartPage" component={CartPage} />
        {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cart" component={CartScreen} 
        options={{ headerShown: true,
          
          headerStyle:{
            // backgroundColor:'black'
          },
          headerTintColor:'black'
          
         }}
         /> */}
          {/* <Stack.Screen name="ScreenContext" component={ScreenContext} /> */}
          {/* options={{ headerShown:true,
       headerRight:()=>(
        <Cart width={'180%'} height={56} fill="black"
        style={{marginRight:20}}
        
        />

       )
      }}
       */}



          {/* <Stack.Screen name="CART" component={Icon} /> */}

          
          {/* <Stack.Screen name="Cart" component={Cart} options={{ headerShown: true }} /> */}

        </Stack.Navigator>
      </NavigationContainer>
      {/* </CartProvider> */}
     </ProductProvider>
  );
};

export default Nav;
