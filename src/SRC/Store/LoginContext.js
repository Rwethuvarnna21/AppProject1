import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useContext } from 'react';
import { createContext, useReducer } from 'react';
import { LoginReducer, initialstate } from './LoginReducer'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LoginReducer, initialstate);
  const navigation = useNavigation();

  const PostData = async (username, password) => {
    dispatch({ type: 'REQUEST' });
    try {
      const response = await axios.post("https://onetouchpay.codesap.com/api/user/login/", {
        username,
        password,
      });

      if (response.data.token) {
        const token = response.data.token;
        console.log('Token stored:', token);

        // Store data in AsyncStorage
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('password', password);

        dispatch({ type: 'SUCCESS', payload: response.data });
      } else {
        // Handle the case where the token is not received
        console.error('No token received');
      }
    } catch (error) {
      console.error('Login Error:', error);

      // Log AsyncStorage error, if any
      console.error('AsyncStorage error during token storage:', error);
    }
  };

  const ValidateOTP = async (otp) => {
    dispatch({ type: 'REQUEST' });
    try {
      const response = await axios.post("https://onetouchpay.codesap.com/api/user/authenticate-for-txn/", {
        otp,
      });
      
      if (response.data.success === "True") {
        console.log('API Response:', response.data);
        const token = response.data.token;
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('otp', otp);
        dispatch({ type: 'SUCCESS', payload: response.data });
      } else {
        console.error('Authentication unsuccessful:', response.data);
        dispatch({ type: 'ERROR', payload: 'Authentication unsuccessful' });
      }
    } catch (error) {
      console.error('Error while validating OTP:', error);
    }
  };
  

  const getData = async () => {
    dispatch({ type: 'REQUEST' });
    try {
      const token = await AsyncStorage.getItem('token');
      console.log('Stored token:', token);

      if (token) {
        console.log('Making request to API...');
        const response = await axios.get("https://onetouchpay.codesap.com/api/cards/home-page/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('API Response:', response.data);
        dispatch({ type: 'SUCCESS', payload: response.data });
        console.log('Data:', response.data);
      } else {
        console.log('No token found');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      dispatch({ type: 'ERROR', payload: 'Error fetching data' });
    }
  };

 useEffect(() => {
  // Check for stored credentials
  const checkStoredCredentials = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');
      const storedOTP = await AsyncStorage.getItem('otp');

      if (token) {
        // Token is present, navigate to the main page
        await getData();
         navigation.navigate('Main');
      } else if (storedUsername && storedPassword && storedOTP) {
        // If all credentials are present, perform automatic login
        await PostData(storedUsername, storedPassword);
        await ValidateOTP(storedOTP);
      await getData();
      } else {
        // No token or stored credentials, redirect to login page
        navigation.navigate('PayLogin');

      }
    } catch (error) {
      console.error('Error checking stored credentials:', error);
    }
  };

  checkStoredCredentials();
}, [navigation]);


  return (
    <LoginContext.Provider value={{ ...state, PostData, ValidateOTP, getData }}>
      {children}
    </LoginContext.Provider>
  );
};

