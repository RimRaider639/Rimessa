import { Flex, Image, Link, useColorMode, useColorModeValue, Text } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function Middle(){
    const image = useColorModeValue('Rimessa.png', 'Rimessa_dark.png')
    const bg = useColorModeValue('', 'black')
    return <Flex align='center' bg={bg} position='relative'>
        <Flex grow={1} justifyContent='center'>
            <Link as={RouterLink} to='/'>
                <Image src={image} alt='logo' h='100px'/>
            </Link>
        </Flex>
        <Link as={RouterLink} to='/cart'  position='absolute' right={0}>
            <Flex justifyContent='center' align='center'  >               
                <Text>SHOPPING BAG</Text>
                <HiOutlineShoppingBag/>                     
            </Flex>
        </Link>  
    </Flex>
}