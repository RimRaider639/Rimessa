import { Flex, 
    useColorModeValue, 
    Stack, 
    Text, 
    Popover, 
    PopoverTrigger, 
    PopoverContent,
    Box,
    Input,
    Link
} from "@chakra-ui/react";
import {Link as ReactLink, useLocation, useParams} from 'react-router-dom'
import React from 'react'
import {LINKS, LINKS_LEFT} from './data'
import SubNav from "./SubNav";
import PopOverLink from "../../PopOverLinks";

const checkPath = (path) => {
    for (let l of LINKS_LEFT){
        if (path.includes(l.path)){
            return true
        }
    }
    return false;
}

export default function Bottom(){
    const [offsetLeft, setOffsetLeft] = React.useState(null)
    const bg = useColorModeValue('white', 'black')
    const linkColor = useColorModeValue('gray.600', 'gray.400')
    const linkHoverColor = useColorModeValue('lightGrey', 'gray.200')
    const loc = useLocation()
    const type = loc.pathname.split('/')[1]
    const bottomRef = React.useRef(null)
    const barRef = React.useRef(null)
    const bound = React.useRef(null)
    // React.useEffect(()=>{
    //     var rect = bottomRef.current.getBoundingClientRect();
    //     var rect2 = barRef.current.getBoundingClientRect();
    //     setOffsetLeft(rect2.left)
    // }, [])
    return <Flex bg={bg} minH="40px" align='center' justify='space-between' ref={bottomRef} display={checkPath(loc.pathname)?'flex':'none'}>
        <Stack direction={'row'} spacing={4}>
           {LINKS.map((item) => (
            <Box key={item.path}>
            {<Popover border={10} borderColor={linkColor} trigger={'hover'} placement={'bottom'}>
                <PopoverTrigger>
                    <Link as={ReactLink} to={`/${type}/products${item.path}/all`}>
                        <Text
                            textStyle='h4'
                            color={linkColor}
                            _hover={{
                                textDecoration: 'none',
                                color: linkHoverColor,
                                cursor: 'pointer',
                                transition: 'color 0.5s',
                        }}>
                            {item.text}
                        </Text>
                    </Link>
                </PopoverTrigger>
    
                {item.children && (
                    <PopoverContent
                        ref={barRef}
                        key={item.text}
                        minW={'6xl'}
                        p='0'
                        // pos='absolute'
                        // left={offsetLeft*-1}
                        >
                        <SubNav children={item.children} image={item.image} parentPath={item.path}/>
                    
                    </PopoverContent>
                )}
                </Popover>} 
                {/* <PopOverLink item={item}/>6 */}
            </Box>
            ))}
        </Stack>
        <Flex align='center' justify='center' w='300px'>
            <Input h='25px'/>
        </Flex>
    </Flex>
}



