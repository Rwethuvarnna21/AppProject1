export const initialstate={
    data:null,
    error:null,
    loading:null,
}
export const LoginReducer=(state,action)=>{
    switch (action.type) {
        case 'REQUEST':
            return {
                ...state,
                loading: true,
                error:'',

            }
        case 'SUCCESS':
            return {
                ...state,
                loading: false,
                user: action.payload,
                error:'',
            }
            case'ERROR':
            return{
                ...state,
                loading:false,
                error:action.payload,
            }
            default:
                return state
}}