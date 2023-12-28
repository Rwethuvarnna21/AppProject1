import {  StyleSheet,Text, TextInput, View,Button } from 'react-native'
import React, { useContext, useState } from 'react'
import { LoginContext } from './LoginContext'


const LoginScreen = () => {
    const { login } = useContext(LoginContext);
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('');
    const handleLogin = () => {
        if (username === '' && pass === '') {
            login({ username })
        } else {
            alert('invalid');
        }
    }
    return (
        <View style={StyleSheet.container}>
            <Text>LoginScreen</Text>
            <TextInput
                placeholder='username'
                placeholderTextColor={'white'}
                value={username}
                onChangeText={setUsername}
                style={styles.input}

            />
            <TextInput
                placeholder='password'
                placeholderTextColor={'white'}
                value={pass}
                onChangeText={setPass}
                style={styles.input}


            />

            <Button
                title='LOGIN'
                onPress={handleLogin}

            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 100,
        height: 40,
        borderColor: 'gray',
        borderWidth: 4,
        marginBottom: 20,
        paddingHorizontal: 10,
        alignSelf:'flex-start'
    },
});

export default LoginScreen

