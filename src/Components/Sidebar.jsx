import { Divider, Flex, Text } from "@chakra-ui/react";
import {LINKS} from "./Navbar/desktop/data"

export default function Sidebar({content, category, handleSubCategory, ...rest}){
    let item = LINKS.filter(l=>l.text===category.toUpperCase())[0]
    return <Flex direction='column' {...rest} textAlign='left' w='20%' display={{base:'none', sm:'none', md:'flex'}}>
        <Flex direction='column'>
            <Flex><Text textStyle='h4' m='10px 0'>{item.text}</Text></Flex>
            <Flex direction='column' textStyle='t1' gap={1}>
                {item.children.category.map(el=><Text variant='highlight' onClick={()=>handleSubCategory(el)}>{el}</Text>)}
            </Flex>
        </Flex>
        <Divider/>
    </Flex>
}