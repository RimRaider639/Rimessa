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
import {LINKS} from './data'
import SubNav from "./SubNav";

export default function Bottom(){
    const [offsetLeft, setOffsetLeft] = React.useState(null)
    const linkColor = useColorModeValue('gray.600', 'gray.400')
    const linkHoverColor = useColorModeValue('lightGrey', 'gray.200')
    const loc = useLocation()
    const type = loc.pathname.split('/')[1]
    const bottomRef = React.useRef(null)
    const barRef = React.useRef(null)
    const bound = React.useRef(null)
    React.useEffect(()=>{
        var rect = bottomRef.current.getBoundingClientRect();
        var rect2 = barRef.current.getBoundingClientRect();
        console.log(rect2.left, rect.left);
        setOffsetLeft(rect2.left)
    }, [])
    console.log(offsetLeft)
    return <Flex minH="40px" align='center' justify='space-between' ref={bottomRef} display={loc.pathname==='/'?'none':'flex'}>
        <Stack direction={'row'} spacing={4}>
           {LINKS.map((item) => (
            <Box key={item.text}>
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
                        key={item.textS}
                        minW={'6xl'}
                        p='0'
                        // pos='absolute'
                        // left={offsetLeft*-1}
                        >
                        <SubNav children={item.children} image={item.image} parentPath={item.path}/>
                    
                    </PopoverContent>
                )}
                </Popover>}
            </Box>
            ))}
        </Stack>
        <Flex align='center' justify='center' w='300px'>
            <Input h='25px'/>
        </Flex>
    </Flex>
}



