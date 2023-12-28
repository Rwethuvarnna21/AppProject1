import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useEffect, useReducer } from 'react'
import axios from 'axios'


export const ProductContext = createContext()
export const initialstate = {
    data: null,
    error: null,
    loading: false
}
export const productReducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload,

            }
        case 'FAILURE':
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
            
        default:
            return state

    }
}
export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialstate);


    

        // axios.get('https://fakestoreapi.com/products').then(response=>{
        //     dispatch({type:'SUCCESS',payload :response.data})

        // })
        // .catch(error=>{
        //     dispatch({type:'FAILURE',payload:error})
        // })

   
    const PostData = async () => {
        dispatch({ type: 'REQUEST' });
        try {
            const response = await axios.post("https://dummy.restapiexample.com/api/v1/create", { status: 'single', data: 123, message: 'stop', });
            dispatch({ type: 'SUCCESS', payload: response.data });


        } catch (error) {
            Alert.alert('invalid', 'An error occured')
        }}



    const GetData = async () => {
            dispatch({ type: 'SUCCESS' });

            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                    dispatch({ type: 'SUCCESS', payload: response.data })
       
            
        }
            catch (error) {
                dispatch({ type: 'FAILURE', payload: error })
       }
    }
    useEffect(() => {
        
        GetData();

    }, [])
    
        

    


return (
    <ProductContext.Provider value={{ ...state, PostData, GetData }}>
        {children}
    </ProductContext.Provider>


)
}








//   return (
//     <><ProductContext.Provider value={state}>
//           {children}
//       </ProductContext.Provider>

//           </>
//   )}




const styles = StyleSheet.create({})