import { Box, Grid, Image, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../Components/CardItem'
import { getProducts } from '../Redux/ProductsRedux/actions'

const Products = () => {
  const products = useSelector((store) => store.products.products)
  console.log("products", products);
  const dispatch = useDispatch()
  const  PAGE_LIMIT=9
  useEffect(() => {
    // if (products.length === 0) {
      dispatch(getProducts())
    // }
  }, [dispatch])

  const fetchMoreData =() => {
    let pageNo = 1
    const queryParam = "page"+pageNo+"&limit"+PAGE_LIMIT

    getProducts(queryParam)
    // getProducts()
  }

  return (
    <Box w={"100%"} padding={"2%"} h={"auto"} bg={""} display={"flex"} alignItems={"center"} justifyContent={"center"}>
      <Box w={"100%"} h={"auto"} bg={""} >
      <InfiniteScroll
    dataLength={products.length}
    next={fetchMoreData}
    hasMore={products.length < 27}
    loader={<Image m={"auto"} mb={"5%"} mt={"5%"} w={{sm:"60px",md:"60px",lg:"60px"}} src={"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/final-loader.gif?v=1670845994"}/>}
    scrollableTarget="scrollableDiv"
  >

  <SimpleGrid columns={{sm:1,md:2,lg:3}} gap={{md:6,lg:8}}>
        {
         products &&  products.length > 0 && products.map((ele) =>
            <ProductCard ele={ele} key={ele.id} />
          )
        }
      </SimpleGrid>
  </InfiniteScroll>
     
      </Box>
    </Box>
  )
}

export default Products