import { Flex, Text, Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export default function Notify(){
    const loc = useLocation()
    return <Flex align='center' justify='space-evenly' minH='40px' display={loc.pathname=='/'?'flex':'none'}>
        <Flex w='1fr'>
            <Text textStyle='t1' color='secondary'>The finest edit in luxury fashion</Text>
        </Flex>
        <Flex w='1fr'>
            <Text textStyle='t1' color='secondary'>Free shipping on orders over 800€</Text>
        </Flex>
        <Flex w='1fr'>
            <Text textStyle='t1' color='secondary'>Free returns within 30 days</Text>
        </Flex>
            
        </Flex>
}