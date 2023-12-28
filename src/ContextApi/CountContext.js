import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createContext } from 'react';
import { useReducer } from 'react';

export const CountContext = createContext();


export const initialstate = {count:0};

export const CountReducer = (state,action)=>{
  switch (action.type) {
        case 'INCREMENT':
            return {count:state.count + 1};
            case 'DECREMENT':
                return {count:state.count - 1};
                case 'RESET':
                    return {count:state.count = 0};
                default :
                return state;



    }
};
// eslint-disable-next-line prettier/prettier
export const CountProvider = ({children})=>{
    const [state,dispatch] = useReducer(CountReducer,initialstate);

return (
    <CountContext.Provider value={{state,dispatch}}>
        {children}
    </CountContext.Provider>
);

};   

    

const styles = StyleSheet.create({});