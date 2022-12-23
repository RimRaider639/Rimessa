import { Fade, ScaleFade, Slide, SlideFade, useDisclosure } from '@chakra-ui/react'
import { Flex, 
    useColorModeValue, 
    Stack, 
    Text, 
    Popover, 
    PopoverTrigger, 
    PopoverContent,
    Box,
    Input,
    Link,
    Container
} from "@chakra-ui/react";
import {Link as ReactLink, useLocation, useParams} from 'react-router-dom'
import React from 'react'

export default function PopOverLink({item}){
    const { isOpen, onToggle } = useDisclosure()
    const linkColor = useColorModeValue('gray.600', 'gray.400')
    const linkHoverColor = useColorModeValue('lightGrey', 'gray.200')
    const loc = useLocation()
    const type = loc.pathname.split('/')[1]
  return (
    <>
    <Link as={ReactLink} to={`/${type}/products${item.path}/all`}>
        <Text
            textStyle='h4'
            color={linkColor}
            onMouseOver={onToggle}
            onMouseOut={onToggle}
            _hover={{
                textDecoration: 'none',
                color: linkHoverColor,
                cursor: 'pointer',
                transition: 'color 0.5s',
            }}>
            {item.text}
        </Text>
    </Link>
      <Fade in={isOpen}>
        <Container
          p='40px'
        bg='orange'
          mt='4'
        >
          Fade
        </Container>
      </Fade>
    </>
  )
}