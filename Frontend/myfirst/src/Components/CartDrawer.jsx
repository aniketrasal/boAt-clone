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
    Text
  } from '@chakra-ui/react'
  import React from 'react'
  import { useDisclosure } from '@chakra-ui/react'
  import {AiOutlineShoppingCart} from "react-icons/ai"
  import { Link } from 'react-router-dom'

export function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='white' color={"black"} onClick={onOpen}>
        <AiOutlineShoppingCart size={30}/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size="sm"
        >
          <DrawerOverlay/>
          <DrawerContent border={"1px solid black"}>
            <DrawerCloseButton color={"white"} />
            <DrawerHeader h={"50px"} bg={"red"} color={"white"}>Your Cart</DrawerHeader>
            <DrawerHeader h={"60px"} bg={"black"} fontWeight={"none"} padding={"10px"} fontSize="14px" color={"white"}>Free Shipping sitewide | Delivery might be delayed due to high demand from the past few days.</DrawerHeader>

  
            <DrawerBody display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <Box margin={"auto"}>
              <Text fontSize={"18px"} pl={"30px"}>Your cart is empty</Text>
              <br/>
              <br/>
              <Link><Button bg='red' color={"white"} w={"200px"} h={"60px"}>START SHOPPING</Button></Link>
              </Box>
              
              
            </DrawerBody>
  
            <DrawerFooter>
      
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }