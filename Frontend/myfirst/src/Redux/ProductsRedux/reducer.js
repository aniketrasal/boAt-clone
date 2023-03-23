import * as types from "./actionTypes"

const initialState = {
    isLoading:false,
    isError:false,
    products:[]
}

export const productReducer = (state=initialState,{type,payload}) => {
    switch(type){

        case types.GET_PRODUCTS_REQUEST:{
            return {
                ...state,isLoading:true
            }
        }
        case types.GET_PRODUCTS_SUCCESS:{
            return {
                ...state,isLoading:false,products:[...state.products,...payload]
            }
        }
        case types.GET_PRODUCTS_FAILURE:{
            return {
                ...state,isError:true
            }
        }
        default: {
            return state
        }
    }
}