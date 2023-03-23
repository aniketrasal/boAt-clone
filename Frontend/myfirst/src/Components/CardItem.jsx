import React, { useState } from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Flex, Box } from '@chakra-ui/react'
import {LazyLoadComponent}  from "react-lazy-load-image-component"
import { StarIcon } from "@chakra-ui/icons"
import { ChooseDrawer } from './ChooseDrawer'
import { DrawerExample } from './CartDrawer'

// StarIcon

const ProductCard = ({ ele }) => {
    const [image, setImage] = useState(ele.product_item__primary_image_src)
    const [isTrue, setIsTrue] = useState(false)
    // console.log("ele", ele);
    return (
        <LazyLoadComponent>
        <Card
        key={ele.id}
            direction={{ base: 'row', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            // bg="gray.100"
            border={"3px solid gray.500"}
        >
            <Box w={"250px"} display={"flex"} alignItems={"center"}  justifyContent={"center"}>
                <Image
                    onMouseOver={() => setImage(ele.product_item__secondary_image_src)}
                    onMouseLeave={() => setImage(ele.product_item__primary_image_src)}
                    objectFit='cover'
                    // maxW={{ base: '100%', sm: '200px' }}
                    w={"160px"}
                    h={"160px"}
                    src={image}
                    alt={image}
                />
            </Box>
                
            <Stack w={"400px"} textAlign={"left"}>
                <CardBody bg={""} w={"100%"}>
                    <Heading size='md'>{ele.product_item_meta__title}</Heading>
                    <Flex bg={""} display={"flex"} alignItems={"center"} justifyContent={"flex-start"}>
                        <Text mr={"2%"} fontSize={"15px"} fontWeight={"bold"}>{ele.price}</Text>
                        <Text mr={"2%"} fontSize={"15px"} fontWeight={"500"} color={"#6ab05e"}>{ele.m_0}</Text>
                        <Text as='s' mr={"2%"} fontSize={"10px"} fontWeight={"500"} color={"#6ab05e"} mb={"-2px"}>{ele.price_2}</Text>
                    </Flex>
                    <Box bg={"#f1efef"} borderRadius={"10px"}>
                        <Flex>
                            <Text display={"flex"} alignItems={"center"} justifyContent={"center"}><StarIcon fontSize={"10px"} />{ele.rating__stars}</Text>
                            <Text>{ele.rating__caption}</Text>
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