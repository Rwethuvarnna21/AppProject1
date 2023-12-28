// /* eslint-disable prettier/prettier */
// import { StyleSheet, Text, FlatList, View } from 'react-native'
// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import React from 'react'

// const Api = () => {
//     const [data, setData] = useState([]);
//     const getProduct = () => {
//         axios.get('https://jsonplaceholder.typicode.com/albums').then((response) => {
//             console.log('processing=>:', response)
//             setData(response.data)
//         })
//     }
//     useEffect(() => {
//         getProduct();
//     }, []);

//     return (
//         <View style={{ flex: 1, backgroundColor: 'white' }}>
//             <FlatList
//                 data={data}
//                 renderItem={({ item }) =>
//                     <>
//                     {/* <View style={{flexDirection:'row'}}> */}
//                     <Text style={{ color: 'black', fontSize: 20,alignItems:'center',justifyContent:'center',alignSelf:'center' }}>{item.id} </Text>
//                     <View style={{marginBottom:16,borderWidth:1,borderColor:'black',borderRadius:4,width:200,alignSelf:'center',height:56}}>
//                     <Text style={{ color: 'red',alignSelf:'center' }}>{item.title}</Text>

//                     </View>
//                     {/* </View> */}
//                     </>
//                 }
               
                
//             />
//         </View>
        

//     )





// }


// export default Api

// const styles = StyleSheet.create({})