import { LABELS } from './data'
import { VStack, Image, Flex, Text, Link } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

export default function SubNav({children, image, parentPath}){
    const loc = useLocation()
    const type = loc.pathname.split('/')[1]

    const elements = []
    for (let key in children){
        elements.push(<VStack minW='200px' >
            <Flex align='center' minH='40px' w='100%' justify='center' bg='lightGrey' m={0}>
                <Text textStyle='h3'>{LABELS[key]}</Text>
            </Flex>
            <VStack align='left' w='80%' spacing={0} m={0}>
                {children[key].map(label=>
                    <Link as={RouterLink} key={label} to={`/${type}/products${parentPath}/${label.toLowerCase()}`} variant='highlight'>{label}</Link>)}
            </VStack>
        </VStack>)
    }
    return <Flex justifyContent='space-between'>
        {elements}
        <Flex direction='column'>
            <Flex h='40px' w='100%' bg='lightGrey' m={0}></Flex>
            <Image src={image} alt='product' />
        </Flex>
    </Flex>
}