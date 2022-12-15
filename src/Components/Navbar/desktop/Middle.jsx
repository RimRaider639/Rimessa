import { Flex, Image, Link } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"

export default function Middle(){
    return <Flex align='center'>
        <Flex grow={1} justifyContent='center'>
            <Link as={RouterLink} to='/'>
                <Image src='Rimessa.png' alt='logo' h='100px'/>
            </Link>
        </Flex>
    </Flex>
}