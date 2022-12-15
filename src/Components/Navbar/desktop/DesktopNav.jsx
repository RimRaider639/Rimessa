import { Divider, Flex, Spacer } from "@chakra-ui/react"
import Top from "./Top"
import Middle from "./Middle"
import Bottom from "./Bottom"
import Notify from "./Notify";
import Sticky from "../Sticky";
import HomeBottom from "./HomeBottom"

export default function DesktopNav(props){
    

    return <Flex  direction='column' gap='sm' minH='220px'>
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