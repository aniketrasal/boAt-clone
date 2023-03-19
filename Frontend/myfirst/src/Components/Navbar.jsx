import { Text,Box, Image } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import {AiOutlineSearch} from "react-icons/ai"
import {BsChevronDown} from "react-icons/bs"
import { DrawerExample } from "./CartDrawer"
// import Type from "./Type"
import { TypewriterInput } from "./TypeWritter"
import { LoginButton } from "./LoginModal"

export const Navbar = ()=>{
    return(
        <Box boxShadow={"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"}>
            <Box style={{width:"100%", height:"40px", background:"black", color:"white",display:"flex",alignItems:"center", justifyContent:"center"}}>
                <Text>Track almost everything with Wave Elite and its 700+ Active Modes. Grab now at ₹999.</Text>
            </Box>
            <Box height={"90px"} display={"flex"} justifyContent={"space-between"}alignItems={"center"}>
                <Box padding={"30px"}><Image src="//cdn.shopify.com/s/files/1/0057/8938/4802/files/boat_logo_small.webp?v=1672379935"/></Box>
                <Box w={"35%"} display={"flex"} justifyContent={"space-between"}>
                    <Link><Text fontWeight={"bold"} fontSize={"17px"} display={"flex"} alignItems={"center"}>CATEGORIES<BsChevronDown size={20}/></Text></Link>
                    <Link><Text fontWeight={"bold"} fontSize={"17px"}>DAILY DEALS</Text></Link>
                    <Link><Text fontWeight={"bold"} fontSize={"17px"}>GIFT WITH BOAT</Text></Link>
                    <Link><Text fontWeight={"bold"} fontSize={"17px"} display={"flex"} alignItems={"center"}>MORE<BsChevronDown size={20}/></Text></Link>
                </Box>
                <Box w={{sm: '30em',md: '48em',lg: '20em'}} h={{lg:"45px"}} ml={"200px"} bg={"#eaeaea"} borderRadius={"2em"} display={"flex"} alignItems={"center"}paddingLeft={"20px"}>
                    <AiOutlineSearch size={30}/><Text fontSize={"18px"}>Search</Text><TypewriterInput/>
                </Box>
                <Box display={"flex"} padding={"30px"} ml={"-100px"}>
                    <LoginButton/>
                    <DrawerExample/>
                </Box>
            </Box>
        </Box>
    )
}