import { StyleSheet, Text, View, Image, Dimensions,FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Carousel } from 'react-native-snap-carousel'
const { width: screenWidth } = Dimensions.get("screen")
const image=[
    {url:'https://img.freepik.com/free-psd/super-sale-podium-product-banner-with-editable-text_47987-12084.jpg?w=2000'},
    {url:'https://img.freepik.com/free-psd/black-friday-super-sale-social-media-banner-template_120329-2128.jpg?size=626&ext=jpg&ga=GA1.1.1755627661.1693042834&semt=ais'},
    {url:'https://img.freepik.com/free-psd/black-friday-super-sale-social-media-banner-template_106176-1494.jpg'},
]


const CarouselApi = () => {
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
    const renderitem = ({ item }) => {
        return (
            <View style={{ height: 220, width: '100%' }}>
                <Image source={{ uri: item.url }} style={{ height: '100%', width: '100%', resizeMode: 'stretch' }} />

            </View>
        )
    }


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Carousel
                data={image}
                renderItem={renderitem}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                // autoplay
                loop />
            <View style={{width:'100%',height:'70%'}}>
                <FlatList
                    numColumns={2}
                    data={product}
                    renderItem={({ item }) =>
                        <View style={{  backgroundColor: 'white', height: 130, width: '48%', marginVertical: 3, marginHorizontal: 3, alignSelf: 'center',borderWidth:2 }}>
                            <Image source={{ uri: item.image }} style={{ height: '50%', width: '45%', resizeMode: 'stretch', alignSelf: 'center' }} />
                            <View style={{height: 100, width: '90%',alignSelf:'center',marginVertical:5}}>
                        <Text style={{ color: 'black' }}  numberOfLines={1}>{item.title}</Text>
                        <Text style={{color:'blue'}} numberOfLines={1}> {item.description}</Text>
                        
                        <Text style={{ color: 'grey' }} >{item.price}</Text>
                    </View>



                        </View>

                    }
                />
            </View>
        </View>



    )
}


export default CarouselApi

const styles = StyleSheet.create({})