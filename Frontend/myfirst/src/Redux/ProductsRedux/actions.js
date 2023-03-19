import * as types from "./actionTypes"
import axios from "axios"
const getProductsRequest = () => {
    return {
        type: types.GET_PRODUCTS_REQUEST
    }
}

const getProductsFailure = () => {
    return {
        type: types.GET_PRODUCTS_FAILURE
    }
}

const getProductsSuccess = (payload) => {
    return {
        type: types.GET_PRODUCTS_SUCCESS,
        payload
    }
}

// export const getProducts  = async () => (dispatch) => {
//     dispatch(getProductsRequest())
//     axios.get("https://super-boa-panama-hat.cyclic.app/product")
//     .then((res) =>{

//         console.log("getProducts")
//         dispatch(getProductsSuccess(res.data))
//     } )
        
//     .catch((err) => dispatch(getProductsFailure()))
// }

export const getProducts = () => (dispatch) => {
    dispatch(getProductsRequest())
    axios.get(`https://super-boa-panama-hat.cyclic.app/product`)
        .then((res) => {
            // console.log(res.data)
            dispatch(getProductsSuccess(res.data))
        })
        .catch((err) => dispatch(getProductsFailure()))
}