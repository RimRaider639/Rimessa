import { Flex } from "@chakra-ui/react"
import Top from "./Top"
import Middle from "./Middle"
import Bottom from "./Bottom"

export default function DesktopNav(props){
    return <Flex direction='column' bg='gray.200'>
        <Top/>
        <Middle/>
        <Bottom/>
    </Flex>
}