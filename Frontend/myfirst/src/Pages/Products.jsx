import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/ProductsRedux/actions'

const Products = () => {
    const products = useSelector((store) =>  store.products.products)
    console.log("products",products);
    const dispatch = useDispatch()

    useEffect(() => {
            // if(products.length === 0){
                dispatch(getProducts())
            // }
    }, [dispatch])
    
  return (
    <div>Products</div>
  )
}

export default Products