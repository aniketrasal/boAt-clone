import { Box, Heading, Image,Text, } from "@chakra-ui/react"
import { SlideShow } from "../Components/Swiper"

export const Home = () => {
    return (
        <Box>
            <Box w={"95%"} h={"60px"} bg={"#e8edf0"} m={"auto"} mt={"10px"} display={"flex"} justifyContent={"space-evenly"}>
                <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} >
                    <Image w={"50px"} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_2_small.png?v=1663586590" />
                    <Box width={"100px"}><Text lineHeight={"1"} fontWeight={"bold"}>1 YEAR WARRANTY</Text></Box>
                    
                </Box>
                <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} >
                    <Image w={"50px"} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_3_small.png?v=1663586612" />
                    <Box width={"120px"}><Text lineHeight={"1"}  fontWeight={"bold"}>FREE 7 DAYS REPLACEMENT</Text></Box>
                </Box>
                <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} >
                    <Image w={"50px"} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_1_small.png?v=1663586576" />
                    <Box width={"100px"}><Text lineHeight={"1"}  fontWeight={"bold"}>FREE SHIPPING</Text></Box>
                </Box>
                <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} >
                    <Image w={"50px"} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_4_small.png?v=1663586627" />
                    <Box width={"100px"}><Text lineHeight={"1"} fontWeight={"bold"}>SECURE CHECKOUT</Text></Box>
                </Box>
                <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} >
                    <Image w={"50px"} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/icon-black-v1_small.png?v=1661245767" />
                    <Box width={"100px"}><Text lineHeight={"1"}  fontWeight={"bold"}>GST BILLING</Text></Box>
                </Box>
            </Box>
            <Box>
                <SlideShow/>
            </Box>
        </Box>
    )
}