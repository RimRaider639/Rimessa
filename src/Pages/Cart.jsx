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
    Image
  } from '@chakra-ui/react'
import React from 'react'
import { getData } from "../Scripts/api";
import { AuthContext } from "../Context/AuthContext";

export default function Cart(){
    const [data, setData] = React.useState([])
    const {userCred:{id}} = React.useContext(AuthContext)
    React.useEffect(()=>{
        getData('cart', {id})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }, [])
    return <Container>
        <TableContainer>
        <Table variant='simple'>
            <TableCaption>YOUR SHOPPING BAG</TableCaption>
            <Thead>
            <Tr>
                <Th></Th>
                <Th></Th>
                <Th></Th>
                <Th>Price</Th>
                <Th>Quantity</Th>
                <Th>Subtotal</Th>
            </Tr>
            </Thead>
            <Tbody>
                {data.map(prod=><Tr>
                    <Td><Image src={prod.image}/></Td>
                    <Td>{prod.name}</Td>
                </Tr>
            )}
            </Tbody>
            <Tfoot>
            <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
            </Tr>
            </Tfoot>
        </Table> 
                    
        </TableContainer>
    </Container>
}