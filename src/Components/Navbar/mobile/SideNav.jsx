import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    Flex,
    useDisclosure,
    Text,
    Image,
    useColorModeValue
  } from '@chakra-ui/react'
import { LINKS_LEFT } from '../desktop/data'
import { HamburgerIcon } from "@chakra-ui/icons"
import React from 'react';
import CustomAccordion from './Accordion';

export default function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const image = useColorModeValue('Rimessa.png', 'Rimessa_dark.png')

  
    return (
      <>
        <Button ref={btnRef} onClick={onOpen}>
            <HamburgerIcon/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader><Image src={image} alt='logo' h='50px' mr='30px'/></DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Search' mb={4}/>
              <Flex direction='column' gap={4}>
                {LINKS_LEFT.map(l=>
                <CustomAccordion>
                    <Text variant='highlight'>{l.text}</Text>
                </CustomAccordion>)}
              </Flex>
            </DrawerBody>
  
            {/* <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </>
    )
  }