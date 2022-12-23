import { Divider, Flex, Spacer, useColorModeValue } from "@chakra-ui/react"
import Top from "./Top"
import Middle from "./Middle"
import Bottom from "./Bottom"
import Notify from "./Notify";
import Sticky from "../Sticky";
import HomeBottom from "./HomeBottom"

export default function DesktopNav(props){
    const bg = useColorModeValue('white', 'black')
    return <Flex bg={bg}  direction='column' gap='sm' minH='220px' display={{sm:'none', md:'flex', lg:'flex'}}>
        <Top/>
        <Spacer/>
        <Middle/>
        <Spacer/>
        <Sticky>
            <Bottom/>
            <Divider/>
            <Notify/>
            <HomeBottom/>
        </Sticky>
        
    </Flex>
}