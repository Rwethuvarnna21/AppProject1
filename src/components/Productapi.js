/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Productapi = () => {
    const [product, setProduct] = useState([])

    const getproduct = () => {
        axios.get('https://fakestoreapi.com/products').then((response) => {
            console.log('processor=>', response)
            setProduct(response.data)
        })
    }
    useEffect(() => {
        getproduct();
    }, []);



return (
    
        <FlatList
        numColumns={2}
            data={product}
            renderItem={({ item }) =>
                <View style={{ flex:1,backgroundColor:'white',height: 320, width: '48%',marginVertical:3,marginHorizontal:3,alignSelf:'center' }}>
                    <Image source={{ uri: item.image }} style={{ height: '60%', width: '45%',resizeMode:'stretch',alignSelf:'center'}} />
                    {/* <View style={{ marginBottom: 25, borderWidth: 3, borderColor: 'red', borderRadius: 4, width: '45%',height:'100%' }}> */}
                    <View style={{height: 60, width: '90%',alignSelf:'center',marginVertical:5}}>
                        <Text style={{ color: 'black' }}  numberOfLines={1}>{item.title}</Text>
                        <Text style={{color:'blue'}} numberOfLines={1}> {item.description}</Text>
                        
                        <Text style={{ color: 'grey' }} >{item.price}</Text>
                    </View>
                     </View>

                
            }
        />


)
    }








export default Productapi

const styles = StyleSheet.create({})