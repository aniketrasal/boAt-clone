import * as types from "./actionTypes"

export const addToCart = (payload) => ({
    type:types.ADD_TO_CART,
    payload
  })

export const increaseQuantity = (payload) => ({
  type:types.INCREASE_QUANTITY,
  payload
}
)
export const decreaseQuantity = (payload) => ({
  type:types.DECREASE_QUANTITY,
  payload
}
)
  
export const removeItem = (payload) => (
  {
    type:types.REMOVE_ITEM,
    payload
  }
)

