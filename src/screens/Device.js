// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';
// import DeviceInfo from 'react-native-device-info';

// const Device = () => {
//   const [deviceId, setDeviceId] = useState('');

//   useEffect(() => {
//     // Function to get device ID
//     const getDeviceId = async () => {
//       try {
//         const id = await DeviceInfo.getUniqueId();
//         console.log('id:',id)
//         setDeviceId(id);
//       } catch (error) {
//         console.error('Error getting device ID:', error);
//       }
//     };

//     // Call the function
//     getDeviceId();
//   }, []);

//   return (
//     <View>
//       <Text>Device ID: {deviceId}</Text>
//     </View>
//   );
// };

// export default Device;
import React, { useEffect, useState } from 'react';
import { View, Text, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const Device = () => {
  const [deviceId, setDeviceId] = useState('');
  const [deviceOS, setDeviceOS] = useState('');

  useEffect(() => {
    // Function to get device ID and OS
    const getDeviceInfo = async () => {
      try {
        const id = await DeviceInfo.getUniqueId();

        setDeviceId(id);
        setDeviceOS(Platform.OS);
      } catch (error) {
        console.error('Error getting device information:', error);
      }
    };

    // Call the function
    getDeviceInfo();
  }, []);

  return (
    <View>
      <Text>Device ID: {deviceId}</Text>
      <Text>Device OS: {deviceOS}</Text>
    </View>
  );
};

export default Device;





