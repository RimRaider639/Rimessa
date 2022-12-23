import { CartContext } from "../Context/CartContext";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Bag(){
    const {totalItems, updateCartData} = React.useContext(CartContext)
    React.useEffect(()=>{
        updateCartData()
    }, [])
    return <Flex position='relative' justify='center' align='center'>
    <HiOutlineShoppingBag size='40px'/>     
    <Text position='absolute' top='14px'>{totalItems}</Text>
</Flex>
}