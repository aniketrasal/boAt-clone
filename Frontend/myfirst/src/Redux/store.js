import {legacy_createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import { productReducer } from "./ProductsRedux/reducer"
const rootReducer   = combineReducers({
    products : productReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))