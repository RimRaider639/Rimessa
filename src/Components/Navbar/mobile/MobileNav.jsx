import { Divider, Flex, Spacer, useColorModeValue, Image } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import Bag from "../../Bag"
import SideNav from "./SideNav"

export default function MobileNav(props){
    const image = useColorModeValue('Rimessa.png', 'Rimessa_dark.png')
    return <Flex p="0 20px" gap='sm' minH='100px' display={{sm:'flex', md:'none', lg:'none'}} align='center' justify='space-between'>
        <Flex h='100%'>
            {/* <HamburgerIcon/> */}
            <SideNav/>
        </Flex>
        <Flex>
            <Image src={image} alt='logo' h='50px' mr='30px'/>
            <Bag/>
        </Flex>
    </Flex>
}