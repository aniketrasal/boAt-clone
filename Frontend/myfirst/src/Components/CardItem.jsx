import React, { useState } from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Flex, Box } from '@chakra-ui/react'

import {StarIcon} from "@chakra-ui/icons"
// StarIcon

const ProductCard = ({ ele }) => {
    const [image, setImage] = useState(ele.product_item__primary_image_src)
    console.log("ele", ele);
    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            // bg="gray.100"
            border={"3px solid gray.500"}
        >
            <Image
                onMouseOver={() => setImage(ele.product_item__secondary_image_src)}
                onMouseLeave={() => setImage(ele.product_item__primary_image_src)}
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={image}
                alt={image}
            />

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
                            <Text display={"flex"}  alignItems={"center"}  justifyContent={"center"}><StarIcon fontSize={"10px"}/>{ele.rating__stars}</Text>
                            <Text>{ele.rating__caption}</Text>
                            <Text></Text>
                        </Flex>
                   </Box>
                   <Text fontSize={"13px"}>₹15 Extra Discount on UPI</Text>
                </CardBody>

                <CardFooter p={"-10px"} >
                    <Button mb={"5%"} w={"100%"}  bg={"#ff0000"} color={"white"}>
                        ADD TO CART
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    );
}

export default ProductCard