import { Button,Box,Modal,useDisclosure,ModalOverlay,ModalContent, ModalBody,Text,ModalCloseButton, } from "@chakra-ui/react"
import React from "react"
import {AiOutlineUser,AiOutlineSearch} from "react-icons/ai"
export function LoginButton() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)

    return (
        <>

            <Button mt={0} bg={"white"} onClick={onOpen}>
            <AiOutlineUser size={30}/>
            </Button>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent containerProps={{ justifyContent: 'flex-end', paddingRight: '2rem', paddingTop:"3rem" }} maxH="300px" maxW="250px" >
                    <ModalBody>
                        <Text fontWeight={"bold"} color={"red"}>Hi boAthead!</Text>
                        <ModalCloseButton color={"red"}/>
                        <br/>
                        <Button bg={"red"} w={"100%"} h={"35px"} color={"white"}>Login</Button>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}