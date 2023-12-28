import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import {ScreenContext} from '../ContextApi/ScreenContext'

const CartScreen = () => {
  const { cart, removeFromCart } = useContext(ScreenContext);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>Cart</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderColor: 'gray' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
            <Text style={{ color: 'grey' }}>{item.price}</Text>
            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
              <Text style={{ color: 'red' }}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Text style={{ fontSize: 16, fontWeight: 'bold', margin: 10 }}>
        Total Price: {totalPrice}
      </Text>
    </View>
  );
};

export default CartScreen;
