import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import Mess from '../../assets/Images/Mess.png'
import Data from '../../assets/Images/Data.png'
import Gift from '../../assets/Images/Gift.png'
import Package from '../../assets/Images/Package.png'
import Pay from '../../assets/Images/Pay.png'
import Supp from '../../assets/Images/Supp.png'
const SubCategory = () => {
    const [columns, setColumns] = useState(4); 
    const [category, setCategory] = useState([]);
    const keyExtractor = (item, index) => `item-${item.id}-${columns}`; 
    const categor=[
        {id:1,image:Mess,text:'Recharge cards', type: 'rechargeCard'},
        {id:2,image:Data,text:'Datacard',type: 'dataCard'},
        {id:3,image:Gift,text:'Giftcard',type: 'giftCard'},
        {id:4,image:Package,text:'Package cards', type: 'packageCard' },
        {id:5,image:Pay,text:'Payments'},
        {id:6,image:Supp,text:'Support'}
    ]
    useEffect(() => {
      // Assuming you have a condition to check whether to show or hide specific cards
      const shouldShowRechargeCard = true; // Set your condition here
      const shouldShowDataCard = true; // Set your condition here
      const shouldShowPackageCard = false; // Set your condition here
  
      const updatedCategory = categor.map((item) => {
        switch (item.type) {
          case 'rechargeCard':
            return { ...item, hasPermission: shouldShowRechargeCard };
          case 'dataCard':
            return { ...item, hasPermission: shouldShowDataCard };
          case 'packageCard':
            return { ...item, hasPermission: shouldShowPackageCard };
          default:
            return { ...item, hasPermission: true }; 
        }
      });
  
      setCategory(updatedCategory);
    }, []);
  
    const limitTextLength = (text) => {
        const maxLength = 8; // Set your desired maximum length
        const padding = ' '
        if (text.length > maxLength) {
             const firstLine = text.substring(0, maxLength);
            const secondLine = text.substring(maxLength);

            const difference = maxLength - firstLine.length;
            const paddedFirstLine = firstLine + padding.repeat(difference);

            return paddedFirstLine + '\n' + secondLine;
        }
        return text;
    };
     const renderItem = ({ item }) => {
    if (!item.hasPermission) {
      return null; // Hide the card if it doesn't have permission
    }
    return (
      <View style={{ flexDirection: 'column', alignItems: 'center', margin: 18 }}>
        <Image source={item.image} style={{ height: 50, width: 50 }} />
        <Text style={{ color: 'black', textAlign: 'center' }}>{limitTextLength(item.text)}</Text>
      </View>
    );
  };
  return (
    <FlatList
    data={category}
    renderItem={renderItem}
    numColumns={columns}
    keyExtractor={keyExtractor}
  />
);
};

export default SubCategory

const styles = StyleSheet.create({})

// import React, { useState, useEffect } from 'react';
// import { FlatList, Image, Text, View } from 'react-native';
// import Mess from '../../assets/Images/Mess.png';
// import Data from '../../assets/Images/Data.png';
// import Gift from '../../assets/Images/Gift.png';
// import Package from '../../assets/Images/Package.png';
// import Pay from '../../assets/Images/Pay.png';
// import Supp from '../../assets/Images/Supp.png';

// const SubCategory = () => {
//   const [columns, setColumns] = useState(4);
//   const [hiddenCardIndex, setHiddenCardIndex] = useState(0);

//   const keyExtractor = (item, index) => `item-${item.id}-${columns}`;
//   const category = [
//     { id: 1, image: Mess, text: 'Recharge cards', type: 'rechargeCard' },
//     { id: 2, image: Data, text: 'Datacard', type: 'dataCard' },
//     { id: 3, image: Gift, text: 'Giftcard', type: 'giftCard' },
//     { id: 4, image: Package, text: 'Package cards', type: 'packageCard' },
//     { id: 5, image: Pay, text: 'Payments', type: 'paymentCard' },
//     { id: 6, image: Supp, text: 'Support', type: 'supportCard' },
//   ];

//   const limitTextLength = (text) => {
//     const maxLength = 8; // Set your desired maximum length
//     const padding = ' ';
//     if (text.length > maxLength) {
//       const firstLine = text.substring(0, maxLength);
//       const secondLine = text.substring(maxLength);

//       const difference = maxLength - firstLine.length;
//       const paddedFirstLine = firstLine + padding.repeat(difference);

//       return paddedFirstLine + '\n' + secondLine;
//     }
//     return text;
//   };

//   useEffect(() => {
//     // Set a timer to update hidden card index every 2 seconds
//     const timer = setTimeout(() => {
//       setHiddenCardIndex((prevIndex) => {
//         // Exclude Payments and Support cards from hiding logic
//         const filteredCategory = category.filter(
//           (item) => item.type !== 'paymentCard' && item.type !== 'supportCard'
//         );
//         return (prevIndex + 1) % filteredCategory.length;
//       });
//     }, 2000);

//     // Clear the timer when the component unmounts
//     return () => clearTimeout(timer);
//   }, [category]);

//   const renderItem = ({ item }) => {
//     if (item.type === category[hiddenCardIndex].type) {
//       return null; // Hide the card
//     } else {
//       return (
//         <View style={{ flexDirection: 'column', alignItems: 'center', margin: 10 }}>
//           <Image source={item.image} style={{ height: 50, width: 50 }} />
//           <Text style={{ color: 'black', textAlign: 'center' }}>{limitTextLength(item.text)}</Text>
//         </View>
//       );
//     }
//   };

//   return (
//     <FlatList
//       data={category}
//       renderItem={renderItem}
//       numColumns={columns}
//       keyExtractor={keyExtractor}
//     />
//   );
// };

// export default SubCategory;