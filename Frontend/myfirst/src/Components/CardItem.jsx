import React, { useState } from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Flex, Box } from '@chakra-ui/react'
import {LazyLoadComponent}  from "react-lazy-load-image-component"
import { StarIcon } from "@chakra-ui/icons"
import { ChooseDrawer } from './ChooseDrawer'
import { DrawerExample } from './CartDrawer'

// StarIcon

const ProductCard = ({ ele }) => {
    const [image, setImage] = useState(ele.image[0])
    const [isTrue, setIsTrue] = useState(false)
    // console.log("ele", ele);
    return (
        <LazyLoadComponent>
        <Card
        key={ele._id}
            direction={{ base: 'row', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            // bg="gray.100"
            border={"3px solid gray.500"}
        >
            <Box w={"250px"} display={"flex"} alignItems={"center"}  justifyContent={"center"}>
                <Image
                    onMouseOver={() => setImage(ele.image[1])}
                    onMouseLeave={() => setImage(ele.image[0])}
                    objectFit='cover'
                    // maxW={{ base: '100%', sm: '200px' }}
                    w={"160px"}
                    cursor={"pointer"}
                    h={"160px"}
                    src={image}
                    alt={image}
                />
            </Box>
                
            <Stack w={"400px"} textAlign={"left"}>
                <CardBody bg={""} w={"100%"}>
                    <Heading size='md'>{ele.name}</Heading>
                    <Flex bg={""} display={"flex"} alignItems={"center"} justifyContent={"flex-start"}>
                        <Text mr={"2%"} fontSize={"15px"} fontWeight={"bold"}><span>₹</span> {ele.original_price}</Text>
                        <Text mr={"2%"} fontSize={"15px"} fontWeight={"500"} color={"#6ab05e"}>{ele.discount}<span>%</span></Text>
                    </Flex>
                    <Box bg={"#f1efef"} borderRadius={"10px"}>
                        <Flex>
                            <Text display={"flex"} alignItems={"center"} justifyContent={"center"}><StarIcon fontSize={"10px"} />{ele.rating__stars}</Text>
                            <Text>{ele.rating}</Text>
                            <Text></Text>
                        </Flex>
                    </Box>
                    <Text fontSize={"13px"}>₹15 Extra Discount on UPI</Text>
                </CardBody>

                <CardFooter p={"-10px"} >
                  <ChooseDrawer ele={ele} setIsTrue={setIsTrue} isTrue={isTrue}/> 
                    {/* </Button> */}
                </CardFooter>
            </Stack>
        </Card>
        </LazyLoadComponent>
    );
}

export default ProductCard