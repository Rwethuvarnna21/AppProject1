


import React, { useContext,useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, Image, TouchableOpacity } from 'react-native';
import { ProductContext } from './BothContext'
import { useNavigation } from '@react-navigation/native';

const ScreenContext = () => {
  const navigation=useNavigation()
  const { data, error, loading } = useContext(ProductContext);
  const [cart, setCart] = useState([]);
  

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

 

  return (
<View style={{flex:1,backgroundColor:'white'}}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{ flex: 1, height: 150, width: '90%', borderWidth: 1, marginHorizontal: 20, marginTop: 10 }}>
            <Image source={{ uri: item.image }} style={{ height: 50, width: 80, resizeMode: 'stretch' }} />
            <Text style={{ color: 'black' }} numberOfLines={1}>{item.title}</Text>
            <Text style={{ color: 'grey' }}>{item.price}</Text>
            <TouchableOpacity onPress={() =>

            navigation.navigate('CartPage',{item})}
               
              
               >

              <Text style={{color:'red'}}>Add to Cart</Text>
            </TouchableOpacity>
            </View>
            )}
            />
          
        
       {/* keyExtractor={(item) => item.id.toString()} */}
     
      </View>
  );
};

export default ScreenContext;
