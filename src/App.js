import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { useState } from 'react';

const { width: screenWidth } = Dimensions.get("screen")

const images = [
  { uri: 'https://img.freepik.com/free-photo/colorful-bird-with-yellow-beak-sits-pink-flower_1340-38643.jpg', title: 'bird1' },
  { uri: 'https://images.pexels.com/photos/792416/pexels-photo-792416.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'bird2' },
  { uri: 'https://images.pexels.com/photos/70069/pexels-photo-70069.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'bird3' },

];
const picture = [
  { pic: 'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_640.jpg' ,title2:'flower1'},
  { pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HRxtfz8theFOgTjL_SCujsvwOiUdqgkEpxvnfhtN&s' ,title2:'flower2'},
  { pic: 'https://images.pexels.com/photos/850359/pexels-photo-850359.jpeg?cs=srgb&dl=pexels-jess-bailey-designs-850359.jpg&fm=jpg',title2:'flower3' },
]

// const reversedImages = [...images].reverse();





const MyApp = () => {
  const [slide, setSlide] = useState(0)
  const[slider,setSlider]=useState(0)
  const renderitem = ({ item }) => {
    return (
      <View style={{ height: 120, width: '100%', alignSelf: 'center' }}>
        <Image source={{ uri: item.uri }} style={styles.imag} /> 
        <View style={{backgroundColor:'white',height:50}}>        
          <Text style={{ color: 'red', fontSize: 13, alignSelf: 'flex-end',}}>{item.title}</Text>
          <Text style={{ color: 'red', fontSize: 13, alignSelf: 'center',}}>{item.title}</Text>
        </View>
      </View>

    )
  }
  const reitem = ({ item }) => {
    return (
      <View style={{ height: 520, width: '100%',alignSelf:'center'}}>
        <Image source={{ uri: item.pic }} style={styles.imag} />
        <View style={{backgroundColor:'yellow'}}>

        <Text style={{color:'blue',alignSelf:'center'}}>{item.title2}</Text>
      </View>
      </View>
    )

  }






  return (

    <View style={styles.caritem}>
      <View style={{ height: '40%', width: '100%' }}>
        <Carousel
          data={images}
          renderItem={renderitem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          loop
          onSnapToItem={(index) => setSlide(index)} />
        <Pagination
          dotsLength={3} // Specify the number of dots
          activeDotIndex={slide} // Specify the active dot index
          containerStyle={styles.paginationContainer}
          dotStyle={styles.paginationDot}
          inactiveDotStyle={styles.paginationInactiveDot}
          inactiveDotOpacity={0.6}
          inactiveDotScale={0.8} />
      </View>


      {/* <View style={styles.car}> */}
      <Carousel
        data={picture}
        renderItem={reitem}
        sliderWidth={screenWidth}
        loop
        itemWidth={screenWidth} 
        onSnapToItem={(index) => setSlider(index)}/>
      <Pagination
          dotsLength={3} // Specify the number of dots
          activeDotIndex={slider} // Specify the active dot index
          containerStyle={styles.paginationCont}
          dotStyle={styles.paginationDot}
          inactiveDotStyle={styles.paginationInactiveDot}
          inactiveDotOpacity={0.6}
          inactiveDotScale={0.8} />
    </View>

    // </View>
  );
};



export default MyApp

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  car: {
    marginTop: 50,
  },

  imag: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'// Adjust the height as needed
    // justifyContent:'flex-start'
  },
  caritem: {
    flex: 1,
  },
  paginationContainer: {
    // position: 'absolute',
    bottom: 2, // Adjust the position as needed
    alignSelf: 'center',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8, // Adjust the spacing between dots
    backgroundColor: 'blue', // Change the active dot color
  },
  paginationInactiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
  },
  paginationCont:{
    bottom:200,
    marginTop:50


  },

})