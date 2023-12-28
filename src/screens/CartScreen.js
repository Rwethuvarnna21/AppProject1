
import React, { useContext, useState } from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet, TouchableOpacity ,Alert} from 'react-native';
import { CartContext } from '../ContextApi/CartContext'
import Heart from '../assets/Images/Heart.svg'
import Red from '../assets/Images/Red.svg'
import Star from '../assets/Images/Star.svg'
import StarFill from '../assets/Images/StarFill.svg'







const CartScreen = () => {
  const { cart, removeCart, } = useContext(CartContext);
  const [count, setCount] = useState(1)
  const [favourite, setFavourite] = useState([])
  const[rating,setRating]=useState(0)
  const[max,setMax]=useState([1,2,3,4,5])
  const[message,setMessage]=useState('')
  
  const Rating = ({setMessage}) => {
    return (
      <View style={{width:'100%',height:50,flexDirection:'row',marginTop:10}}>
        {max.map((item, key) => (
          <TouchableOpacity  key={item} onPress={()=> {
            setRating(item)
            setMessage('Thanks,for your review')
            setTimeout(() => {
              setMessage('')
              },2000)

          
}}>
            {rating > key ? (
             
            
              <StarFill width={20} height={20} marginHorizontal={4} />
            
            ) : (
              
                <Star width={20} height={20} />
                
            )}
          </TouchableOpacity>
          
        ))}
      </View>
    );
  };
  
  const handlefavourite = (itemid) => {
    setFavourite((previtems) => {
      if (previtems.includes(itemid)) {
        return previtems.filter((id) => id !== itemid);

      } else {
        return [...previtems, itemid];
      }
    })

  }

  const renderItem = ({ item }) => (
    <><View style={styles.de} key={item.id}>
      <View style={{ marginHorizontal: 1, flexDirection: 'row' }}>
        <Image source={{ uri: item.uri }} style={styles.image} />

        <View style={{ height: 40, width: 140, marginHorizontal: 6 ,}}>


          <Text style={{ color: 'black', fontWeight: 'bold' }}> {item.name}</Text>
          <Text style={{ color: 'green', fontSize: 12, }}>Price per unit:${item.price}</Text>
           <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
          <Text style={{ color: 'black' }}>$ {item.price * count}</Text>
          </View>
         
          <Rating setMessage={setMessage}>
            
          </Rating>
         
          

        </View>


        <View style={{ height: 34, width: 30, flexDirection: 'row', marginTop: 20, }}>
          <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
            <Text style={{ color: 'black', fontSize: 10, }}>+</Text>

          </TouchableOpacity>
          <View style={{ alignSelf: 'center', justifyContent: 'center' }}>

            <Text style={{ color: 'black', fontSize: 13 }}>{count}</Text>
          </View>
          <View style={{ height: 34, width: 30, flexDirection: 'row', marginBottom: 10, }}>
            <TouchableOpacity style={styles.button} onPress={() => {
              if (count > 1) {
                setCount(count - 1);
              }
            }}
            >
              <Text style={{ color: 'black', fontSize: 16 }}>-</Text>
            </TouchableOpacity>
          </View>




        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Button title="Remove from Cart" onPress={() => removeCart(item.id)} />
        {message &&
        <View style={styles.Container}>
          
            
          <Text style={{color:'white'}}>{message}</Text>
          </View>
}
        <TouchableOpacity onPress={() => handlefavourite(item.id)}
          style={{ justifyContent: 'flex-end', flexDirection: 'row', marginHorizontal: 200 }}
        >
          {favourite.includes(item.id) ?
            <Red width={25} height={25} />
            :
            <Heart width={25} height={25} />



          }
        </TouchableOpacity>


      </View>

    </View>

    </>


  );

  return (
    <View>

      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  de: {
    // flexDirection: 'row',
    // alignItems: 'center',
    marginHorizontal: 3,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',


  },
  button: {
    width: 25,
    height: 25,
    backgroundColor: '#dddddd',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
    borderRadius: 40,
    margin: 5,
  },
  Container:{
    position:'absolute',
    bottom:0,
    top:0,
    height:30,
    width:'100%',
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
    

  },

})

export default CartScreen;
