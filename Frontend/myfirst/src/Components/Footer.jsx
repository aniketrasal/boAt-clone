import { ReactNode } from 'react';
import React from "react"
import {
    Box,
    Button,
    Container,
    Image,
    InputGroup,
    InputRightElement,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react'
const Logo = (props: any) => {
    return (
        <div>
            <Image src='http://cdn.shopify.com/s/files/1/0057/8938/4802/files/boat_logo_small.webp?v=1672379935' />
        </div>
    );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    );
};

function PasswordInput() {
    const [SUBSCRIBE, setShow] = React.useState(false)
    const handleClick = () => setShow(!SUBSCRIBE)
  
    return (
      <InputGroup size='md'>
      
        {/* <Input
          borderWidth={"0px"}
          pr='4.5rem'
          type={SUBSCRIBE ? 'text' : 'password'}
          placeholder='Enter Address'
        /> */}

        <Input w={"150px"} h={"40px"} variant='unstyled'   placeholder='Enter Address'
          type={SUBSCRIBE ? 'text' : 'password'}
          pr='4.5rem'
        />
        <InputRightElement width='10rem' p={"2px 0"}>
          <Button w={"100%"}  fontWeight={"bold"} _hover={{bg:"#ff0000"}} bg={"#ff0000"} color={"white"} h='2.75rem' fontSize={"18px"} size='sm' onClick={handleClick}>
            {SUBSCRIBE ? 'UNSUBSCRIBE' : 'SUBSCRIBE'}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }
export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container m={"auto"} as={Stack} maxW={'8xl'} py={20}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
                    spacing={8}>
                    <Stack spacing={6} textAlign={"left"}>
                        <Box>
                            <Logo color={useColorModeValue('gray.700', 'white')} />
                        </Box>
                        <Text fontSize={'sm'}>
                            Subscribe to email alerts. We promise not to spam your inbox.
                        </Text>
                        <Box border={"2px solid red"} borderRadius={"10px"} p={"2%"}>
                            <PasswordInput/>
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Product</ListHeader>
                        <Link href={'#'}>Overview</Link>
                        <Link href={'#'}>Features</Link>
                        <Link href={'#'}>Tutorials</Link>
                        <Link href={'#'}>Pricing</Link>
                        <Link href={'#'}>Releases</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Company</ListHeader>
                        <Link href={'#'}>About</Link>
                        <Link href={'#'}>Press</Link>
                        <Link href={'#'}>Careers</Link>
                        <Link href={'#'}>Contact</Link>
                        <Link href={'#'}>Partners</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Support</ListHeader>
                        <Link href={'#'}>Help Center</Link>
                        <Link href={'#'}>Terms of Service</Link>
                        <Link href={'#'}>Legal</Link>
                        <Link href={'#'}>Privacy Policy</Link>
                        <Link href={'#'}>Status</Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Follow Us</ListHeader>
                        <Link href={'#'}>Facebook</Link>
                        <Link href={'#'}>Twitter</Link>
                        <Link href={'#'}>Dribbble</Link>
                        <Link href={'#'}>Instagram</Link>
                        <Link href={'#'}>LinkedIn</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}