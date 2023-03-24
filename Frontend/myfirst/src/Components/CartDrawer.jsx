import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
  Text,
  Image,
  Flex,
  Heading
} from '@chakra-ui/react'
import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeItem } from '../Redux/CartRedux/actions'

export function DrawerExample() {
  const cart = useSelector((store) => store.carts.cart)
  // console.log("cart", cart);
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  

  const handleDec = (id,qty) => {
    // console.log("handleDec",id)
    if(qty > 1){
      dispatch(decreaseQuantity(id))
    }else {
      dispatch(removeItem(id))
    }
  }
  
  const handleInc = (id) => {
    // console.log("handleInc",id)
    dispatch(increaseQuantity(id))
  }

  let totalAmount = 0
  const convertToNumber  = (str) => {
    // console.log("str",str);
    if(Number(str)){
      return Number(str) 
      // let value = Number(str)
      // console.log("value",value);
    }
        let arr  = str.includes(",") ? str.split(","):[]
        let final_str = arr.reduce((acc,value) =>  acc + value,"")
        // console.log("final_str",final_str);
        let result = Number(final_str)
        // console.log(result);
        return result


  }
  cart.forEach((prod) => {
    // console.log(convertToNumber(prod.price)*prod.qty);
    totalAmount += convertToNumber(prod.price)*prod.qty
  })
console.log("totalAmount",totalAmount);
  return (
    <>
      <Button ref={btnRef} colorScheme='white' color={"black"} onClick={onOpen}>
        <AiOutlineShoppingCart size={30} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent border={"1px solid black"}>
          <DrawerCloseButton color={"white"} />
          <DrawerHeader h={"60px"} bg={"black"} fontSize={"13px"} color={"white"}>Free Shipping sitewide | Delivery might be delayed due to high demand from the past few days.</DrawerHeader>
          <DrawerHeader h={"60px"} bg={""} padding={"10px"} fontSize="15px" fontWeight={"bold"} color={"black"}>Your Cart</DrawerHeader>

          <DrawerBody bg="" p={"0px"}>
            {

              cart.length > 0 ? cart.map((ele) =>
                <Box mb={"2%"} bg={""} borderBottom={"1px solid #e1e1e1"} key={ele._id} w={"100%"} m={"3% -5% -5% -5%"}>
                  <Box p={"2% 0 2% 2%"} w={"100%"} display={"flex"} justifyContent={"space-around"} alignItems={"center"}>
                    <Image ml={"4%"} w={"100px"} src={ele.product_item__primary_image_src} />
                    <Box
                      w={"100%"} display={"flex"} justifyContent={"space-around"} alignItems={"center"}>
                      <Box w={"40%"}  >
                        <Heading fontSize={"15px"}>{ele.product_item_meta__title}</Heading>
                        <Flex mb={"3%"} bg={""} display={"flex"} alignItems={"center"} justifyContent={"flex-start"}>
                          <Text mr={"4%"} fontSize={"10px"} fontWeight={"bold"} color={"red"}>{ele.price}</Text>
                          <Text as='s' mr={"2%"} fontSize={"8px"} fontWeight={"500"} color={"black"} mb={"-2px"}>{ele.price_2}</Text>
                        </Flex>
                      </Box>
                      <Box>
                        <Flex border={"3px solid #dfdfdf"} h={"30px"}>
                          <Button borderRadius={"0px "} borderRight={"2px solid #dfdfdf"} color={"red"} p={"1px"} h={"100%"} background={"none"} onClick={() => handleDec(ele._id,ele.qty)}>-</Button>
                          <Button color={"black"} h={"100%"} background={"none"}>{ele.qty}</Button>
                          <Button borderRadius={"0px "} borderLeft={"2px solid #dfdfdf"} color={"red"} h={"100%"} background={"none"} onClick={() => handleInc(ele._id,ele.qty)}>+</Button>
                        </Flex>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ) : <Box margin={"auto"}>
                <Text fontSize={"18px"} pl={"30px"}>Your cart is empty</Text>
                <br />
                <br />
                <Link><Button bg='red' color={"white"} w={"200px"} h={"60px"}>START SHOPPING</Button></Link>
              </Box>
            }



          </DrawerBody>

          <DrawerFooter>
            <Flex bg={""} w={"100%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
              <Box w={"40%"} > <Heading fontSize={"15px"}><span>Total :</span> {totalAmount}</Heading>
                <Text>Inclusive of all taxes</Text>
              </Box>
              <Button fontWeight={"bold"} bg={"#ff0000"} color={"white"} w={"70%"} h={"55px"} _hover={{bg:"#ff0000",color:"white"}}>Confirm Order </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}