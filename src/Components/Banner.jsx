import {Image, Link, Flex, Text} from '@chakra-ui/react'
import {Link as RouterLink} from 'react-router-dom'

export default function Banner({image, text=[], ...rest}){
    return <Flex position='relative' {...rest} mb='60px'>
        <Image src={image} alt={text.join(' ')}/>
        <Flex position='absolute' w='100%' h='100%'>
            {text.map(t=><Flex w={(1/text.length)*100+'%'} h='100%' align='center' justify='center'><Text textStyle='h1' color='white'>{t}</Text></Flex>)}
        </Flex>
    </Flex>
}

