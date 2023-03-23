
import * as types from "./actionTypes"

const initialState = {
    cart:JSON.parse(localStorage.getItem("cartItem")) || []
}

export const cartReducer = (state=initialState,{type,payload}) => {
    switch(type){
            case types.ADD_TO_CART : {
                const isProduct = state.cart.find((ele) => {
                    return  ele._id ===  payload._id 
                 })
                let newCart
                 if(isProduct){
                     newCart =  state.cart.map((ele) => {
                         if(ele._id  ===  payload._id  ){
                            return {...ele,qty:ele.qty+1}
                         }else{
                            return ele
                         }
                    })
                 }else {
                        const newPayload = {
                            ...payload,
                            qty: 1
                        }
                        newCart=[...state.cart,newPayload]
                 }
                 console.log("newCart",newCart);
                 localStorage.setItem("cartItem",JSON.stringify(newCart))
                    return {...state,cart:newCart}
           }
        
           case types.INCREASE_QUANTITY :{
              console.log("reducer =>",payload);
            //   const convertToNumber = (str) => {
            //     if(Number(str)){
            //         return Number(str)
            //     }
            //     let arr  = str.includes(",")? str.split(","):[]
            //     let final_str = arr.reduce((acc,value) =>  acc + value,"")
            //     let result = Number(final_str)
            //     // return result
            //   }
             let modifiedCart =  state.cart.map((ele) => {
                 if(ele._id ===  payload){
                    return {...ele,qty:ele.qty+1}
                 }else{
                    return ele
                 }  
            })
            localStorage.setItem("cartItem",JSON.stringify(modifiedCart))
            return {...state,cart:modifiedCart}
           }
        
           case types.DECREASE_QUANTITY :{
             let resultantCart =  state.cart.map((ele) => {
                 if(ele._id ===  payload){
                    return {...ele,qty:ele.qty-1}
                 }else{
                    return ele
                 }
           })
           localStorage.setItem("cartItem",JSON.stringify(resultantCart))
            return {...state,cart:resultantCart}
           }
        
           case types.REMOVE_ITEM :{
             let updatedCart =  state.cart.filter((ele) => {
                return  !(ele._id ===  payload)
                
            })
            localStorage.setItem("cartItem",JSON.stringify(updatedCart))
              return {...state,cart:updatedCart}
           }
      
        default: {
            return state
        }
    }
}