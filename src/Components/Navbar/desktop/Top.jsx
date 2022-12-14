
import { Flex, Link, Text, useColorModeValue } from "@chakra-ui/react"
import { Link as RouterLink, useLocation } from "react-router-dom"

const linksLeft = [
    {
        path: "/",
        text: "WOMEN"
    },
    {
        path: "#",
        text: "MEN"
    },
    {
        path: "#",
        text: "KIDS"
    },
    {
        path: "#",
        text: "LIFE"
    }
]

const LinksRight = [
    {
        path: "#",
        text: "Signup for Newsletter"
    },
    {
        path: "#",
        text: "My account"
    },
    {
        path: "#",
        text: "My wishlist"
    },
    {
        path: "#",
        text: "Kazakhstan | English"
    }
]

export default function Top(){
    const location = useLocation()
    console.log(location)
    return <Flex minH="40px" justifyContent='space-between'>
        {/* left */}
        <Flex  align='center' gap={2}>
            {
                linksLeft.map(link=>
                <Flex h='100%' align='center' p='0 10px' bg={location.pathname===link.path?"gray.300":""}>
                    <Link as={RouterLink} to={link.path}>
                        <Text textStyle='h4' color='text'>{link.text}</Text>
                    </Link>
                </Flex>)
            }
        </Flex>

        {/* right */}
        <Flex>
            {
                LinksRight.map(link=>
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