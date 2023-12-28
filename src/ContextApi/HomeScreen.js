
// import React, { useContext, useState } from 'react';
// import { View, Text, Button, Image, StyleSheet,TouchableOpacity ,FlatList} from 'react-native';
// import { CartContext } from '../ContextApi/CartContext';
// import { useNavigation } from '@react-navigation/native';
// import Cart from '../assets/Images/Cart.svg'
// import  Heart from '../assets/Images/Heart.svg'
// import Red from '../assets/Images/Red.svg'



// const HomeScreen = () => {
//   const { AddCart } = useContext(CartContext);
//   const[favourite,setFavourite]=useState(false)

//   const items = [
//     {
//       uri: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
//       id: 'item1',
//       name: 'Benze Car Sticker',
//       price: 10.99,
//     },
//     {
//       uri: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
//       id: 'item2',
//       name: 'Ford Car Sticker',
//       price: 10.99,

//     }]
//   const navigation = useNavigation()
//   const renderItem=({item})=>(
//     <><View key={item.id}>
//       <View style={{ width: '100%', height: '50%', borderWidth: 1 }}>
//         <Image source={{ uri: item.uri }} style={styles.image} />
//         <TouchableOpacity onPress={() => setFavourite(!favourite)}
//           style={{ justifyContent: 'flex-end', flexDirection: 'row' }}
//         >
//           {favourite ?
//             <Red width={25} height={25} />
//             :
//             <Heart width={25} height={25} />}


//         </TouchableOpacity>


//         <Text style={{ color: 'red', alignSelf: 'center' }}>{item.name}</Text>
//         <Text style={{ color: 'blue', alignSelf: 'center' }}>${item.price}</Text>
//       </View>
//       {/* <View style={{flexDirection:'row',alignSelf:'center',height:60}}>
//     <Button title="Add to Cart" onPress={() => {
//       AddCart(item)
    
//     }}
  
//     />
//     </View> */}

//     </View>
//     <View style={{ flexDirection: 'row', justifyContent:'center',width:'100%',height:100 }}>
//         <Button title="Add to Cart" onPress={() => {
//           AddCart(item);

//         } } />
//       </View></>
//   )

  

//   return (
//     <View>
//       <View style={{ backgroundColor: 'skyblue', height: 45, width: '100%' }}>
//       <TouchableOpacity onPress={()=> navigation.navigate('Cart')}>
//           <Cart width={'180%'} height={46} fill="black" />
//         </TouchableOpacity>
//         </View>
//         <FlatList
//         data={items}
//         renderItem={renderItem}
//         keyExtractor={(item)=>item.id}


//         />
        
      
      
//     </View>
//   )
//         }
// const styles = StyleSheet.create({
//   image: {
//     width: 400,
//     height: 200,
//     marginBottom: 10,
//   },
// })

// export default HomeScreen;

// {/* {items.map((item) => ( */}
//         {/* <View key={item.id}>

//           <Image source={{ uri: item.uri }} style={styles.image} />

//           <Text style={{ color: 'red', alignSelf: 'center' }}>{item.name}</Text>
//           <Text style={{ color: 'blue', alignSelf: 'center' }}>${item.price}</Text>
//           <Button title="Add to Cart" onPress={() => {
//             AddCart(item)
          
//           }}

//           /> */}
import React, { useContext, useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, FlatList, ImageBackground, Alert } from 'react-native';
import { CartContext } from '../ContextApi/CartContext';
import { useNavigation } from '@react-navigation/native';
import Cart from '../assets/Images/Cart.svg';
import Heart from '../assets/Images/Heart.svg'; 
import Red from '../assets/Images/Red.svg'

const HomeScreen = () => {
  const { AddCart } = useContext(CartContext);
  const[confirmationMessage,setConfirmationMessage]=useState('')

  const [items, setItems] = useState([
    {
      uri: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      id: 'item1',
      name: 'Benze Car Sticker',
      price: 10.99,
      favorite: false, 
    },
    {
      uri: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60',
      id: 'item2',
      name: 'Ford Car Sticker',
      price: 10.99,
      favorite: false, 
    }
  ]);

  const navigation = useNavigation();

  const toggleFavorite = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.uri }} style={styles.image} />

      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <ImageBackground 
      style={{position:'absolute',top:15,right:15,backgroundColor:'white',borderRadius:100}} 
      >
      
      
     
      

      <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
        {item.favorite ? (
           <Red width={24} height={24} />
        ):(
            <Heart width={25}  height={25} />
            
           
            
            )} 
               </TouchableOpacity> 
               
               </ImageBackground>
      <Button
        title="Add to Cart"
        onPress={() => {
          AddCart(item);
          setConfirmationMessage(`${item.name} has been added to your cart.`);
    setTimeout(() => {
      setConfirmationMessage('');
    }, 2000); 
        }}
      />
    </View>
  
      )
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Cart width={'180%'} height={46} fill="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {confirmationMessage!== ''&&(
        <View style={styles.Container}>
          <View style={styles.Container}>
            <Text style={styles.textmodal}>{confirmationMessage}</Text>
          </View>
        </View>

      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'skyblue',
    height: 45,
    width: '100%',
  },
  itemContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  
  image: {
    width: 350,
    height: 200,
  },
  name: {
    color: 'red',
    alignSelf: 'center',
  },
  price: {
    color: 'blue',
    alignSelf: 'center',
  },
  Container:{
    position:'absolute',
    backgroundColor:'black',
    height:50,
    width:'100%',
    bottom:0,
    
    justifyContent:'center',
    borderRadius:10,
  },
  textmodal:{
    color:'white',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'



  }
});

export default HomeScreen;
 