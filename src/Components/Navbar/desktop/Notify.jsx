import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";

const MESSAGES = [
    'Enjoy free shipping for a short time only',
    "It's on - sale starts now with up to 50% off"
]


export default function Notify(){
    const [message, setMessage] = React.useState(MESSAGES[0])
    const loc = useLocation()
    
    React.useEffect(()=>{
        let count = 1
        let id = setInterval(()=>{
            setMessage(MESSAGES[count%MESSAGES.length])
            count++
        }, 4000)

        return ()=>clearInterval(id)
    }, [])
    
    return <Flex align='center' justify='center' minH='40px' display={loc.pathname=='/'?'none':'flex'}>
            <Text textStyle='t1' color='secondary'>{message}</Text>
        </Flex>
}