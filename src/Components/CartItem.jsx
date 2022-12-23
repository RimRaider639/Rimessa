import React from 'react'
import { patchData } from '../Scripts/api'
import {Tr, Td, Flex, Text, Input, Image, Spinner, CloseButton} from '@chakra-ui/react'

export default function CartItem({prod, updateCartData}){
    const [qtd, setQtd] = React.useState(prod.qtd)
    const [update, setUpdate] = React.useState(false)
    const [spin, setSpin] = React.useState(false)
    const handleQtd = (e) => {
        console.log(e.target.value)
        setUpdate(true)
        setQtd(e.target.value)
    }
    const removeProd = () => {

    }
    const handleUpdate = () => {
        setSpin(true)
        prod.qtd = +prod.qtd + 1
        patchData(prod, 'cart', { prod_id:prod.id })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        .finally(()=>{
            setUpdate(false)
            setSpin(false)
        })
        updateCartData()
    }
    React.useEffect(()=>{
        
    }, [])
    return <Tr textStyle='t1'>
    <Td><Image src={prod.image} h='120px'/></Td>
    <Td>
        <Flex direction='column'>
            <Text>{prod.brand}</Text>
            <Text>{prod.name}</Text>
            <Text>Size: {prod.size}</Text>
            <Text>Item No.: {prod.id}</Text>
            <Flex align='center'><CloseButton onClick={removeProd}/> Remove</Flex>
        </Flex>
    </Td>
    <Td color='secondary'>€ {prod.mrp}</Td>
    <Td>
    <Input type='number' value={qtd} onChange={handleQtd} w='70px'/>
    <Text onClick={handleUpdate} cursor='pointer' display={update?'flex':'none'}>update {spin?<Spinner/>:""}</Text>
    </Td>
    <Td>€ {(+prod.mrp)*(+prod.qtd)}</Td>
</Tr>
}