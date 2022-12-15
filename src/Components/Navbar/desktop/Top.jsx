
import { Flex, Link, Text } from "@chakra-ui/react"
import { Link as RouterLink, useLocation } from "react-router-dom"
import { LINKS_LEFT, LINKS_RIGHT } from "./data"



export default function Top(){
    const location = useLocation()
  
    return <Flex minH="40px" justifyContent='space-between'>
        {/* left */}
        <Flex  align='center' gap={2}>
            {
                LINKS_LEFT.map(link=>
                <Flex h='100%' align='center' p='0 10px' bg={location.pathname.includes(link.path)?"lightGrey":""}>
                    <Link as={RouterLink} to={link.path}>
                        <Text textStyle='h4' color='text'>{link.text}</Text>
                    </Link>
                </Flex>)
            }
        </Flex>

        {/* right */}
        <Flex>
            {
                LINKS_RIGHT.map(link=>
                    <Flex h='100%' align='center' p='0 5px'>
                    <Link as={RouterLink} to={link.path} variant='highlight'>
                        <Text textStyle='t2'>{link.text}</Text>
                    </Link>
                </Flex>    
                )
            }
        </Flex>
    </Flex>
}