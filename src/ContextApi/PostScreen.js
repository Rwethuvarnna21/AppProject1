import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useContext, useState } from 'react'
// import { PostContext } from './PostContext'
import { ProductContext } from './ProductContext';

const PostScreen = () => {
    const { PostData } = useContext(ProductContext);
    const [status, setStatus] = useState('');
    const [data, setData] = useState('');
    const [message, setMessage] = useState('');

    const handlePostData = () => {
        const DATA = {
            status,
            data,
            message,
        };
        PostData(DATA);
    };
    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>

            <TextInput
                placeholder='enter status'
                placeholderTextColor={'black'}
                value={status}
                onChangeText={setStatus}
                style={styles.input}
            />

            <TextInput
                placeholder='enter data'
                placeholderTextColor={'black'}
                value={data}
                onChangeText={setData}
                style={styles.input}
            />
            <TextInput
                placeholder='enter message'
                placeholderTextColor={'black'}
                value={message}
                onChangeText={setMessage}
                style={styles.input}
            />
            <Button
                title='enter ur name'
                onPress={handlePostData} />
        </View>
    )
}

export default PostScreen

const styles = StyleSheet.create({
    input:{
        color:'black'
    }
})