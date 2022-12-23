import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Container,
    Image,
    Flex,
    NumberInput,
    NumberInputField,
    Text,
    Input,
    InputGroup,
    InputRightAddon,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    useDisclosure,
  } from '@chakra-ui/react'
import React from 'react'
import { CartContext } from '../Context/CartContext'
import CartItem from '../Components/CartItem'
import Button from '../Components/Button'
import AlertWrapper from '../Components/AlertWrapper'

export default function Cart(){
    const {updateCartData, data, total} = React.useContext(CartContext)
    const {
        isOpen: isVisible,
        onClose,
        onOpen,
      } = useDisclosure({ defaultIsOpen: false })

    React.useEffect(()=>{
        updateCartData()
    }, [])
    return <Container>
        <Text>YOUR SHOPPING BAG</Text>
        <TableContainer>
        <Table variant='simple'>
            <Thead>
            <Tr>
                <Th></Th>
                <Th></Th>
                <Th>Price</Th>
                <Th>Quantity</Th>
                <Th>Subtotal</Th>
            </Tr>
            </Thead>
            <Tbody>
                {data.map(prod=> <CartItem prod={prod} updateCartData={updateCartData}/>)}
            </Tbody>
        </Table> 
                    
        </TableContainer>
        <Flex justify='space-between' p='30px 0'>
            <Flex>
            <InputGroup>
                <Input type='text' placeholder='Gift card/store credit/promo code' w='300px'/>
                <InputRightAddon children='USE CODE' cursor='pointer'/>

            </InputGroup>
            </Flex>
            <Flex direction='column' justify='flex-end' align='flex-end' right='0'>
                <Text color='text'>Subtotal € {total}</Text>
                <Text fontWeight='600'>GRAND TOTAL € {total}</Text>
                <Text color='text'>VAT exception. VAT not included. Shipping not included.</Text>
                <AlertWrapper isVisible={isVisible} onClose={onClose}>
                    <Button text='PROCEED TO CHECKOUT' mt='30px' onClick={onOpen}/>
                </AlertWrapper>
            </Flex>
        </Flex>
    </Container>
}