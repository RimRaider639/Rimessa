import { Flex } from "@chakra-ui/react";
import {LINKS} from "./Navbar/desktop/data"

export default function Sidebar({content, ...rest}){
    return <Flex direction='column' {...rest} textAlign='left' w='20%'>
        {LINKS[2].children['category'].map(el=><li>{el}</li>)}
    </Flex>
}