import { Box, Grid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../Components/CardItem'
import { getProducts } from '../Redux/ProductsRedux/actions'

const Products = () => {
  const products = useSelector((store) => store.products.products)
  console.log("products", products);
  const dispatch = useDispatch()

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts())
    }
  }, [dispatch,products.length])

  return (
    <Box w={"100%"} padding={"2%"} h={"auto"} bg={""} display={"flex"} alignItems={"center"} justifyContent={"center"}>
      <Box w={"100%"} h={"auto"} bg={""} >
      <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        {
          products.length > 0 && products.map((ele) =>
            <ProductCard ele={ele} key={ele.id} />
          )
        }
      </Grid>
      </Box>
    </Box>
  )
}

export default Products