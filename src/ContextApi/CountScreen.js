import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { CountContext } from './CountContext';

import { useContext } from 'react'

const CountScreen = () => {
    const { state, dispatch } = useContext(CountContext)

    const Increment = () => {
        dispatch({ type: 'INCREMENT' });
    }
    const Decrement = () => {
        dispatch({ type: 'DECREMENT' });

    }
    const Reset =()=>{
        dispatch({type:'RESET'})
    
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <Text>count:{state.count}</Text>
            <Button title="Increment" onPress={Increment} />
            <Button title="Decrement" onPress={Decrement} />
            <Button title='RESET'     onPress={Reset}/>
        </View>
    )
}

export default CountScreen

const styles = StyleSheet.create({})