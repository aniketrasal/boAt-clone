import {legacy_createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import { cartReducer } from "./CartRedux/reducer"
import { productReducer } from "./ProductsRedux/reducer"
const rootReducer   = combineReducers({
    products : productReducer,
    carts:cartReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))