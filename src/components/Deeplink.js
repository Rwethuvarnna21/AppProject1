import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import dynamicLinks from '@react-native-firebase/dynamic-links'
import Clipboard from '@react-native-clipboard/clipboard'
import { useNavigation } from '@react-navigation/native'


const Deeplinkg = () => {
  const navigation=useNavigation();
  const [link, setLink] = useState('')
  const buildLink = async () => {
    const link = await dynamicLinks().buildLink({
      link: 'https://invertase.io/',
      // domainUriPrefix is created in your Firebase console
      domainUriPrefix: 'https://deeplinkingapp234.page.link',
      // optional setup which updates Firebase analytics campaign
      // "banner". This also needs setting up before hand
      analytics: {
        campaign: 'banner',
      },
    });

    setLink(link);
  }
  function App() {
    const handleDynamicLink = link => {
      // Handle dynamic link inside your own application
      if (link.url === 'https://invertase.io/offer') {
        // ...navigate to your offers screen
        //  Alert.alert("matched");
        navigation.navigate('linkpage')
      }
      else{
       Alert.alert('not matched')
      }
    };
  
    useEffect(() => {
      const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
      // When the component is unmounted, remove the listener
      return () => unsubscribe();
    }, []);
  
    return ;
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'red' }}>{link}</Text>
      <TouchableOpacity style={{ width: 100, height: 50, borderWidth: 1, alignItems: 'center', alignSelf: 'center', justifyContent: 'center', marginVertical: 50 }}
        onPress={() => {
          buildLink();
        }}
      >
        <Text style={{ color: 'black' }}>deep link</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ width: 100, height: 50, borderWidth: 1, alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}
      onPress={()=>{
        Clipboard.setString(link);
      }}
      >
        <Text style={{ color: 'black' }}>copy deep link</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Deeplinkg;

const styles = StyleSheet.create({})