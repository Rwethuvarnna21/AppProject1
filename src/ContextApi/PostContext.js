
import React, { Alert, createContext, useReducer, useContext } from 'react'
import axios from 'axios'
import { initialstate } from './ProductContext';

export const PostContext = createContext();
export const postReducer = (state, action) => {
    switch (action.type) {
        case 'REQUEST':
            return {
                ...state,
                loading: false,
                error: null,
            };
        case 'SUCCESS':
            return {
                ...state,
                loading: false,
                response: action.payload,
            }
        default:
            return state



    }
}
export const PostProvider = ({ children }) => {
    const [state, dispatch] = useReducer(postReducer, initialstate)

    const PostData = async () => {
        dispatch({ type: 'REQUEST' });
        try {
            const response = await axios.post("https://dummy.restapiexample.com/api/v1/create",  {status: 'single', data: 123, message: 'stop',});
            dispatch({ type: 'SUCCESS', payload: response.data });


        } catch (error) {
            Alert.alert('invalid', 'An error occured')
        }


    }


    return (
        <PostContext.Provider value={{ ...state, PostData }}>
            {children}
        </PostContext.Provider>


    )
}






