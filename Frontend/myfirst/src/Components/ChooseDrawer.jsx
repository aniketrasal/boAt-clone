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
    Heading,
    Flex,
    UnorderedList,
    ListItem,


} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
//   import {AiOutlineShoppingCart} from "react-icons/ai"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/CartRedux/actions'
import Cart from '../Pages/Cart'

export function ChooseDrawer({ ele,setIsTrue,isTrue }) {
    // const cart = useSelector((store) => store.carts.cart)
    // console.log("cart",cart);
    const dispatch= useDispatch()
    const [data, setData] = useState({})

    const [selectItem, setSelectItem] = useState(true)
    const [image, setImage] = useState(ele.image[0])
    const [productColor, setProductColor] = useState(ele.color[0])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const chooseData = (ele) => {
        // console.log("ele", ele);
        setData(ele)
    }

    const handleAddToCart = (ele) => {
        console.log("add to cart",ele);
        // let payload = {
        //     ele
            
        // }
        setIsTrue(!isTrue)
        dispatch(addToCart(ele))
    }

    return (
        <>
            <Button ref={btnRef} onClick={() => {
                chooseData(ele)
                onOpen()
            }} fontWeight={"bold"} _hover={{ bg: "#ff0000" }} mb={"5%"} w={"100%"} bg={"#ff0000"} color={"white"}>
                ADD TO CART
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
                    <DrawerHeader h={"50px"} bg={"black"} mb={"4%"} color={"white"}>
                        Choose options</DrawerHeader>
                    {/* <DrawerHeader h={"60px"} bg={"black"} fontWeight={"none"} padding={"10px"} fontSize="14px" color={"white"}>Free Shipping sitewide | Delivery might be delayed due to high demand from the past few days.</DrawerHeader> */}

                    <DrawerBody display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                        {
                            data && Object.keys(data).length > 0 &&
                            <Box w={"100%"} bg={""} p={"4% 0"} >
                                <Box w={"100%"} bg={""} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                                    <Image w={"150px"} src={image} />
                                    <Box w={"60%"}>
                                        <Heading size='md' mb={"3%"} fontSize={"17px"}>{ele.name}</Heading>

                                        <Flex mb={"3%"} bg={""} display={"flex"} alignItems={"center"} justifyContent={"flex-start"}>
                                            <Text mr={"4%"} fontSize={"18px"} fontWeight={"bold"} color={"red"}><span>₹</span> {ele.original_price}</Text>
                                            <Text mr={"4%"} fontSize={"18px"} fontWeight={"500"} color={"#6ab05e"}>{ele.discount}<span>%</span></Text>
                                        </Flex>
                                        <hr w={"50px"} h={"100px"} color={"red"} />
                                        <UnorderedList styleType={"square"} mt={"3%"}>
                                            <ListItem>30 hours playback</ListItem>
                                            <ListItem>ENx™ Technology</ListItem>
                                            <ListItem>40mm Dynamic Drivers</ListItem>
                                        </UnorderedList>

                                    </Box>

                                </Box>
                                <Box w={"100%"} h={"100px"} bg={""}  >
                                    <Heading fontSize={"15px"}><span style={{ color: "gray" }} >Color :</span>Active {productColor}</Heading>
                                    <Flex p={"2% 0"} display={"flex"} alignItems={"center"} justifyContent={"flex-start"}>
                                       {
                                        ele.image.map((item,index) => 
                                        <Image p={"1%"} w={"80px"} src={item} onClick={() => {
                                            setImage(item)
                                            setSelectItem(!selectItem)
                                            setProductColor(ele.color[index])
                                        }} cursor={"pointer"} 
                                        
                                        // className={selectItem ? "active" : "disable"} 
                                    //     style={({ isActive }) =>
                                    //     isActive
                                    //       ? "active"
                                    //       :"disable"
                                    //   }
                                        />
                                        )
                                       }
                        
                                    </Flex>
                                </Box>
                            <Box mt={"15%"} h={"auto"} bg={"gray"} display={"flex"}  alignItems={"center"} justifyContent={"center"}>
                            <Button onClick={() => {
                                   handleAddToCart(ele)
                                }} fontWeight={"bold"} _hover={{ bg: "red" }}  w={"100%"} bg={"#ff0000"} color={"white"}>
                                    ADD TO CART
                                </Button>
                            </Box>
                              
                            </Box>

                        }
                        <Box margin={"auto"}>
                            <br />
                            <br />
                            <Link><Text color={"red"} fontSize={"17px"} m={"auto"} borderBottom={"1px solid red"}>View details</Text></Link>
                            <hr width={"100px"} />
                        </Box>


                    </DrawerBody>

                    <DrawerFooter>
                            {/* <Cart/> */}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}