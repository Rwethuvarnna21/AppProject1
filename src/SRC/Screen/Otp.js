// import { StyleSheet, Text, View,TouchableOpacity, Alert } from 'react-native'
// import React,{useState,useContext} from 'react'
// import LinearGradient from 'react-native-linear-gradient'
// import OnePay from '../../assets/Images/OnePay.svg' 
// import Back from '../../assets/Images/Back.svg'
// import Sub from '../../assets/Images/Sub.svg'
// import { useNavigation } from '@react-navigation/native'
// import { LoginContext } from '../Store/LoginContext'
// const Otp = () => {
//   const navigation=useNavigation()
//   const { ValidateOTP } = useContext(LoginContext);
//   const [pin, setPin] = useState('');
//   const handlePress = async (value) => {
//     if (value === 'backspace') {
//       setPin((prevPin) => prevPin.slice(0, -1));
//     } else if (pin.length < 4) {
//       setPin((prevPin) => prevPin + value);
//     } else if (value === 'submit') {
//       const isValidOTP = await ValidateOTP(pin);
//       console.log('isValidOTP:', isValidOTP);
//       console.log('Entered PIN:', pin);
//       if (isValidOTP) {
//         if (pin === '1234') {
//           console.log('Navigating to Main page...');
//           navigation.navigate('Main');
//         }
//       } else {
//         Alert.alert('Invalid OTP', 'Please enter a valid OTP.');
//         // Clear the pin and update the state
//         setPin('');
//       }
//     }
//   };
  
//   const renderKeypad = () => {
//     const keypadLayout = [
//       [1, 2, 3],
//       [4, 5, 6],
//       [7, 8, 9],
//       ['backspace',0,'submit'],
//     ];
    
//     return keypadLayout.map((row, rowIndex) => (
//       <View key={rowIndex} style={{ flexDirection: 'row' }}>
//         {row.map((item) => (
//           <TouchableOpacity key={item} onPress={() => handlePress(item)}>
//            <View style={{height:1,width:100,backgroundColor:'grey',opacity:0.5,}}></View>
//             <View style={[styles.keypadButton,    pin[pin.length - 1] === item.toString()? styles.keypadTextSelected  : null,]}>
              
//               {item === 'backspace' ? (
//                <Back width={30} height={30}/>
//               ) : item ==='submit'?(
//                 <Sub width={80} height={80}/>
//               ):(
//                 // typeof item === 'number' ? (
//                 <Text style={[styles.keypadText,pin.length === 4 && styles.keypadTextDefault]}>{item}</Text>
//                 // ) : null
//               )}
//             </View>
//           </TouchableOpacity>
//         ))}
//       </View>
//     ));
//   };

//   return (
//     <><View style={{ height: 290, width: 400, backgroundColor: 'white', }}>
//       <View style={{ height: 250, width: 250, justifyContent: 'center', alignSelf: 'center', backgroundColor: 'white' }}>
//         <OnePay />

//       </View>
//     </View>
   
//     <LinearGradient colors={['#0FB259', '#2D368F']} end={{ x: 1, y: 0.3 }}
//       locations={[0, 0.5]} style={{ height: '190%', width: '100%',  }}>
//         <View style={{justifyContent:'center',alignSelf:'center',top:32}}>
//         <Text style={{color:'white',fontSize:14,fontWeight:'400'}}>ENTER YOUR PIN</Text>
//         </View>
//         <View style={styles.pinDisplay}>
//         {[1, 2, 3, 4].map((index) => (
//             <View key={index} style={[styles.pinDot, pin.length >= index ? styles.pinDotFilled : null]} />
//           ))}
//         </View>
//         <View style={styles.keypadContainer}>{renderKeypad()}</View>
//       </LinearGradient>
      
//       </>
//   )
// }

// export default Otp

// const styles = StyleSheet.create({
//   pinDisplay: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 50,
//   },
//   pinDot: {
//     height: 15,
//     width: 15,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 10,
//     marginHorizontal: 15,
//   },
//   pinDotFilled: {
//     backgroundColor: 'white',
//   },
//   keypadContainer: {
//     flexDirection: 'column',
//     justifyContent: 'center',
//     marginTop: 20,
//     alignSelf:'center'
//   },
//   keypadButton: {
//     margin: 10,
//     height: 60,
//     width: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 20,
//     // backgroundColor: 'rgba(255, 255, 255, 0.2)',
//   },
//   keypadText: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight:'700'
//   },
//   keypadTextSelected: {
//     backgroundColor:'rgba(255, 255, 255, 0.2)'
//   }
 
// })


import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'react-native-linear-gradient';
import { LoginContext } from '../Store/LoginContext';
import OnePay from '../../assets/Images/OnePay.svg';
import Back from '../../assets/Images/Back.svg';
 import Sub from '../../assets/Images/Sub.svg';
const OtpScreen = () => {
  const { ValidateOTP } = useContext(LoginContext);
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();
  const [highlightedDigit, setHighlightedDigit] = useState(null);
  const handleKeyPress = (digit) => {
    if (otp.length < 4) {
      setOtp(otp + digit);
      setHighlightedDigit(digit);

    }
  };

  const handleBackspace = () => {
    if (otp.length > 0) {
      setOtp(otp.slice(0, -1));
    }
  };

  const handleVerifyOTP = () => {
    ValidateOTP(otp);
    if (otp === '1234') {
      navigation.navigate('Main');
    }
  };

  return (
    <View style={{ height: 290, width: 400, backgroundColor: 'white' }}>
    <View style={{ height: 250, width: 250, justifyContent: 'center', alignSelf: 'center', backgroundColor: 'white' }}>
         <OnePay />
     </View>
    <LinearGradient colors={['#0FB259', '#2D368F']} end={{ x: 1, y: 0.3 }} style={styles.container}>
    <View style={{justifyContent:'center',alignSelf:'center',top:32}}>
        <Text style={{color:'white',fontSize:14,fontWeight:'400'}}>ENTER YOUR PIN</Text>
        </View>
      <View style={styles.pinDisplay}>
        
        {[1, 2, 3, 4].map((index) => (
          <View key={index} style={[styles.pinDot, otp.length >= index ? styles.pinDotFilled : null]} />
        ))}
      </View>
      <View style={styles.keypadContainer}>
        <View style={styles.row}>
          
          {[1, 2, 3].map((digit) => (
            <TouchableOpacity
              key={digit}
              onPress={() => handleKeyPress(digit)}
              style={[styles.digitButton, highlightedDigit === digit && styles.highlightedDigit,]}
            >
             
              <Text style={styles.digitButtonText}>{digit}</Text>
              <View style={{height:1,width:100,backgroundColor:'grey',opacity:0.5,top:21}}></View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {[4, 5, 6].map((digit) => (
            <TouchableOpacity
              key={digit}
              onPress={() => handleKeyPress(digit)}
              style={styles.digitButton}
            >
              <Text style={styles.digitButtonText}>{digit}</Text>
              <View style={{height:1,width:100,backgroundColor:'grey',opacity:0.5,}}></View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {[7, 8, 9].map((digit) => (
            <TouchableOpacity
              key={digit}
              onPress={() => handleKeyPress(digit)}
              style={styles.digitButton}
            >
              <Text style={styles.digitButtonText}>{digit}</Text>
              <View style={{height:1,width:150,backgroundColor:'grey',opacity:0.5,}}></View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          
        <TouchableOpacity
            onPress={handleBackspace}
            style={styles.backspaceButton}
          >
            <Back width={20} height={20}/>
          </TouchableOpacity>
        
          <TouchableOpacity
            onPress={() => handleKeyPress(0)}
            style={styles.digitButton}
          >
            <Text style={styles.digitButtonText}>0</Text>
            
          </TouchableOpacity>
        
      
      <TouchableOpacity onPress={handleVerifyOTP} style={styles.verifyButton}>
        <Sub width={50} height={50}/>
      </TouchableOpacity>
      </View>
      </View>
    </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:550,
    width:400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinDisplay: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  pinDot: {
    height: 15,
    width: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    marginHorizontal: 15,
  },
  pinDotFilled: {
    backgroundColor: 'white',
  },
  keypadContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
  },
  digitButton: {
    margin: 15,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  
    borderColor: 'rgba(255, 255, 255, 0.7)',
  },
  digitButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  backspaceButton: {
    margin: 10,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  
  },
  backspaceButtonText: {
    fontSize: 20,
    color: 'white',
  },
 verifyButton:{
  top:18,
  left:18
 },
 highlightedDigit: {
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
},
 
});

export default OtpScreen;
