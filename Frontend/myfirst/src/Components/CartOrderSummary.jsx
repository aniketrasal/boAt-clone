import {
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import { FaArrowRight } from 'react-icons/fa'
  import { formatPrice } from './PriceTag'
  const OrderSummaryItem = (props) => {
    const { label, value, children,price } = props
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {/* {label} */}
        </Text>
        {value ? <Text fontWeight="medium">{value}</Text> : children}
      </Flex>
    )
  }
  
  export const CartOrderSummary = () => {
    return (
      <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
        <Heading size="md">Order Summary</Heading>
  
        <Stack spacing="6">
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              {formatPrice(597)}
            </Text>
          </Flex>
        </Stack>
        <Button colorScheme="red" bg={"#ff0000"} size="lg" fontSize="md" rightIcon={<FaArrowRight />}>
          Confirm Order
        </Button>
        <Button colorScheme="red" bg={"#ff0000"} size="lg" fontSize="md" rightIcon={<FaArrowRight />}>
          PAY VIA CARD
        </Button>
      </Stack>
    )
  }